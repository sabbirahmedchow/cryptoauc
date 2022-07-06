<template>
  <navHeader/>
  <router-view />
</template>

<script>
import navHeader from './components/navHeader.vue';

export default {
  name: 'App',
  components: {
    navHeader
  }
}
</script>

