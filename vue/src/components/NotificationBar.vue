<template>
  <div class="notification" :class="notification.type">
    <span class="close-button" @click.prevent="close()">x</span>
    <div>{{ notification.message }}</div>
    <small>(closes in {{ timeoutCount }}...)</small>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      timeout: null,
      timeoutCount: 5,
    };
  },
  mounted() {
    this.timeout = setTimeout(this.decreaseTimeoutCount, 1000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  methods: {
    ...mapActions("notification", ["remove"]),
    close() {
      this.remove(this.notification);
    },
    decreaseTimeoutCount() {
      this.timeoutCount--;
      if (this.timeoutCount === 0) {
        this.close();
      } else {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.decreaseTimeoutCount, 1000);
      }
    },
  },
};
</script>

<style scoped>
.notification {
  margin: 0.4em 0;
  padding: 0.6em 1em;
  border-radius: 1em;
  width: 20em;
}
.notification.success {
  background: lightgreen;
  color: darkolivegreen;
}
.notification.error {
  background: lightcoral;
  color: darkred;
}
.notification .close-button {
  float: right;
  cursor: pointer;
  padding: 0 0.3em;
}
</style>
