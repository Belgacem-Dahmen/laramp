import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "kacem",
    email: "tom@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    token: 1234,
    isGuest: false,
    isLoggedIn: true,
  }),
  name: "Tom Cook",

  actions: {
    // TODO bug
    login() {
      this.name = "kacem";
      this.token = 1234;
      this.isGuest = false;
      this.isLoggedIn = true;
    },

    logout() {
      this.name = "";
      this.token = null;
      this.isGuest = true;
      this.isLoggedIn = false;
    },
  },
});
