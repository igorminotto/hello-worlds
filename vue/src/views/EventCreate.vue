<template>
  <div>
    <h1>New Event</h1>
    <form @submit.prevent="handleSubmit()">
      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="category in categories" :key="category">
          {{ category }}
        </option>
      </select>

      <h3>Name & describe your event</h3>
      <div class="field">
        <label>Title</label>
        <input
          v-model="event.title"
          type="text"
          placeholder="Add an event title"
        />
      </div>

      <div class="field">
        <label>Description</label>
        <input
          v-model="event.description"
          type="text"
          placeholder="Add an description"
        />
      </div>

      <h3>Where is your event?</h3>
      <div class="field">
        <label>Location</label>
        <input
          v-model="event.location"
          type="text"
          placeholder="Add a location"
        />
      </div>

      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Add a date" />
      </div>

      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">
            {{ time }}
          </option>
        </select>
      </div>

      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
import datepicker from "vuejs-datepicker";
import { mapState } from "vuex";

export default {
  data() {
    return {
      event: {},
    };
  },
  components: {
    datepicker,
  },
  computed: {
    ...mapState({
      categories: (state) => state.category.categories,
    }),
    times() {
      const times = [];
      for (let i = 1; i <= 24; i++) {
        times.push(i + ":00");
      }
      return times;
    },
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch("event/createEvent", this.event).then(() =>
        this.$router.push({
          name: "event-show",
          params: { id: this.event.id },
        })
      );
    },
  },
};
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
