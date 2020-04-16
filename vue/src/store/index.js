import Vue from "vue";
import Vuex from "vuex";

import * as category from "@/store/category";
import * as event from "@/store/event";
import * as notification from "@/store/notification";
import * as user from "@/store/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    category,
    event,
    notification,
    user,
  },
});
