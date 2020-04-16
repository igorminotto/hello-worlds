export const namespaced = true;

export const state = {
  notifications: [],
};

let nextId = 1;

export const mutations = {
  PUSH(state, notification) {
    state.notifications.push({
      ...notification,
      id: nextId++,
    });
  },
  DELETE(state, id) {
    state.notifications = state.notifications.filter((n) => n.id !== id);
  },
};

export const actions = {
  add({ commit }, notification) {
    commit("PUSH", notification);
  },
  addError({ dispatch }, error) {
    dispatch("add", {
      type: "error",
      message: "Error: " + error.message,
    });
  },
  addSuccess({ dispatch }, message) {
    dispatch("add", {
      type: "success",
      message,
    });
  },
  remove({ commit }, notification) {
    commit("DELETE", notification.id);
  },
};
