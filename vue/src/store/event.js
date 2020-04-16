import EventService from "@/services/EventService";

export const namespaced = true;

export const state = {
  events: [],
  eventCount: 0,
  event: {},
};

export const mutations = {
  ADD_EVENT(state, event) {
    event.id = state.events.length + 1;
    state.events.push(event);
  },
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_EVENT_COUNT(state, n) {
    state.eventCount = parseInt(n);
  },
  SET_EVENT(state, event) {
    state.event = event;
  },
};

export const actions = {
  createEvent({ rootState, commit, dispatch }, event) {
    event.user = rootState.user.user;

    return EventService.postEvent(event)
      .then(() => {
        commit("ADD_EVENT", event);
        dispatch(
          "notification/addSuccess",
          "Your event was created with success",
          { root: true }
        );
      })
      .catch((error) => {
        dispatch("notification/addError", error, { root: true });
      });
  },
  fetchEvents({ commit, dispatch }, { perPage, page }) {
    commit("SET_EVENTS", []);
    return EventService.getEvents(perPage, page)
      .then((response) => {
        commit("SET_EVENTS", response.data);
        commit("SET_EVENT_COUNT", response.headers["x-total-count"]);
      })
      .catch((error) => {
        dispatch("notification/addError", error, { root: true });
        throw error;
      });
  },
  fetchEvent({ getters, commit, dispatch }, id) {
    const event = getters.fetchEventById(id);

    if (event) {
      commit("SET_EVENT", event);
    } else {
      commit("SET_EVENT", {});
      return EventService.getEvent(id)
        .then((response) => {
          commit("SET_EVENT", response.data);
        })
        .catch((error) => {
          dispatch("notification/addError", error, { root: true });
        });
    }
  },
};

export const getters = {
  fetchEventById: (state) => (id) => {
    return state.events.find((event) => event.id === id);
  },
};
