<template>
  <div class="background">
    <div class="background-card">
      <BandImage :bandImage="bandInfo.image" />
      <BandInfo :bandInfo="bandInfo" />
      <div class="p-5">
        <BandSong :bandSong="bandSong" />
        <BandSongInfo :bandSongInfo="bandSongInfo" @myFirstEmit="test" />
      </div>
    </div>
  </div>
</template>

<script setup>
import BandImage from "./BandImage.vue";
import BandInfo from "./BandInfo.vue";
import BandSong from "./BandSong.vue";
import BandSongInfo from "./BandSongInfo.vue";

const props = defineProps({
  bandImage: String,
  bandInfo: Object,
  bandSong: String,
  bandSongInfo: String,
});

function test() {
  console.log("I am a emitted button");
}
</script>

<style></style>
