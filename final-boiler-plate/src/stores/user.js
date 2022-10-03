import { ref } from "vue";
import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUserStore = defineStore(
  "user",
  () => {
    const user = ref(null);

    const fetchUser = async () => {
      const user = await supabase.auth.user();
      user.value = user;
    };

    const signIn = async (email, password) => {
      const { user, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) {
        user.value = user;
        console.log(user);
      }
    };

    const signUp = async (email, password) => {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) {
        user.value = user;
        console.log(user.value);
      }
    };

    return { signUp, signIn, fetchUser, user };
  },
  { persist: true }
);
