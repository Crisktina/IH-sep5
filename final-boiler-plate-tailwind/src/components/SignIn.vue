<template>
  <div>Sign In</div>
  <PersonalRouter
    class="font-medium text-green-800 hover:text-green-900 hover:underline"
    :route="route"
    :buttonText="buttonText"
  />
  <p class="text-2xl">Time to build up the Final Project!</p>
  <p class="text-xl text-yellow-500">Wu Tang Forever</p>
  <img
    src="https://extrachill.com/wp-content/uploads/2021/06/wu-tang-logo-1024x1024.jpeg"
    alt=""
    style="width: 250px"
  />
  <form @submit.prevent="signIn" class="flex flex-col py-4">
    <input
      class="text-black mb-4"
      type="email"
      placeholder="dave@wuTangfinancial.com"
      v-model="email"
      id="email"
      style="width: 20rem"
    />
    <!-- <input
      class="text-black mb-4"
      :type="passwordFieldType"
      onpaste="return false"
      placeholder="************"
      v-model="password"
      id="password"
      style="width: 20rem"
    /> -->
    <div class="">
      <input
        class="text-black mb-4"
        :type="passwordFieldType"
        onpaste="return false"
        placeholder="************"
        v-model="password"
        style="width: 20rem"
      />
      <EyeIcon
        class="text-white w-5 mb-4"
        @click.prevent="hidePassword = !hidePassword"
      />
    </div>
    <button class="bg-white text-black" style="width: 20rem" type="submit">
      Sign In
    </button>
  </form>
  <p v-if="errorMsg" class="text-md text-red-600 font-body">
    {{ errorMsg }}
  </p>
</template>

<script setup>
import { ref, computed } from "vue";
import { EyeIcon, EyeOffIcon } from "@heroicons/vue/outline";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

// Route Variables
const route = "/auth/sign-up";
const buttonText = "Test the Sign Up Route";

// Input Fields
const email = ref("");
const password = ref("");

// Error Message
const errorMsg = ref("");

//Show hide password variables
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);
const hidePassword = ref(true);

// Router to push user once SignedIn to the HomeView
const redirect = useRouter();

// Arrow function to Signin user to supaBase
const signIn = async () => {
  try {
    // calls the user store and send the users info to backend to logIn
    await useUserStore().signIn(email.value, password.value);
    // redirects user to the homeView
    redirect.push({ path: "/" });
  } catch (error) {
    // displays error message
    errorMsg.value = `Error: ${error.message}`;
    // hides error message
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
</script>

<style></style>
