<template>
  <div v-show="event.id">
    <h1>Event #{{ event.id }}</h1>
    <h3>{{ event.title }}</h3>
    <h3 v-if="event.user">By: {{ event.user.name }}</h3>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    id: {
      type: [String, Number],
      coerce: (str) => parseInt(str),
    },
  },
  created() {
    this.$store.dispatch("event/fetchEvent", this.id);
  },
  computed: {
    ...mapState({
      event: (state) => state.event.event,
    }),
  },
};
</script>

<style></style>
