<template>
  <div>Sign Up</div>
  <PersonalRouter
    class="font-medium text-green-800 hover:text-green-900 hover:underline"
    :route="route"
    :buttonText="buttonText"
  />
  <p class="text-xl">Good Music, Patience and a lot effort</p>
  <p class="text-sm text-yellow-500">Keep calm and code on!</p>
  <img
    src="https://extrachill.com/wp-content/uploads/2021/06/wu-tang-logo-1024x1024.jpeg"
    alt=""
    style="width: 250px"
  />
</template>

<script setup>
import PersonalRouter from "./PersonalRouter.vue";

// Route Variables
const route = "/auth";
const buttonText = "Test the Sign In Route";

// Input Fields

// Error Message

// Show hide password variable

// Show hide confrimPassword variable

// Router to push user once SignedUp to Log In

// Arrow function to SignUp user to supaBase with a timeOut() method for showing the error
</script>

<style></style>
