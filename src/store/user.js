import { defineStore } from "pinia";
import axios from "axios";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
  }),
  actions: {
    async fetchUsers() {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
        this.users = data;
      } catch (error) {
        console("get failed:", error);
      }
    },
  },
});
