<template>
  <div class="container">
    <NotificationBar
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationBar from "@/components/NotificationBar.vue";
import { mapState } from "vuex";

export default {
  components: {
    NotificationBar,
  },
  computed: {
    ...mapState({
      notifications: (state) => state.notification.notifications,
    }),
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0 0.4em;
}
</style>
