<template>
  <div>
    <h1>{{ user.name }}'s events</h1>
    <EventCard
      v-for="(event, index) in events"
      :key="'CARD' + index"
      :event="event"
    />

    <div>Page {{ page }} of {{ numberOfPages }}</div>

    <router-link
      :to="{ name: 'event-list', query: { page: page - 1 } }"
      rel="prev"
      v-if="page > 1"
    >
      Prev Page
    </router-link>
    <router-link
      v-for="p in numberOfPages"
      :key="'PAGE' + p"
      :to="{ name: 'event-list', query: { page: p } }"
    >
      {{ p }}
    </router-link>
    <router-link
      :to="{ name: 'event-list', query: { page: page + 1 } }"
      rel="next"
      v-if="page < numberOfPages"
    >
      Next Page
    </router-link>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    EventCard,
  },
  created() {
    this.fetchEvents(this.pagination);
  },
  computed: {
    ...mapState({
      events: (state) => state.event.events,
      eventCount: (state) => state.event.eventCount,
      user: (state) => state.user.user,
    }),
    perPage() {
      return parseInt(this.$route.query.perPage) || 3;
    },
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    pagination() {
      const { perPage, page } = this;
      return { perPage, page };
    },
    numberOfPages() {
      return Math.ceil(this.eventCount / this.perPage);
    },
  },
  methods: {
    ...mapActions("event", ["fetchEvents"]),
  },
};
</script>

<style></style>
