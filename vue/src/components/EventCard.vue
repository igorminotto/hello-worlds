<template>
  <router-link
    class="event-link"
    :to="{ name: 'event-show', params: { id: event.id } }"
  >
    <div class="card -shadow">
      <span> {{ event.date }} at {{ event.time }} </span>
      <h4 class="eyebrow">{{ event.title }}</h4>
      <span v-if="event.attendees">{{ event.attendees.length }} attending</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
  props: ["event"],
};
</script>

<style scoped>
.card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0, 2),
    0 1px 15px 0 rgba(0, 0, 0, 0, 19);
}
.card .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
}
</style>
