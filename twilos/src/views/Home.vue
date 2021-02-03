<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Timeline/>
  </div>
</template>

<script>
// @ is an alias to /src
import Timeline from '@/components/timeline.vue'

export default {
  name: 'Home',
  components: {
    Timeline
  }
}
</script>
