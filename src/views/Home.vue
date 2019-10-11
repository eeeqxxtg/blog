<template>
  <div class="home">
    <HelloHeart msg="CLY IOU VM"/>
    <!-- <HelloHeart msg="Welcome"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloHeart from '@/components/HelloHeart.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloHeart,
  },
})
export default class Home extends Vue {}
</script>
