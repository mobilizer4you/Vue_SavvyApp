<template>
  <div id="app">
    <div id="nav">
      <Navigation v-if="currentUser"></Navigation>
    </div>
    <router-view/>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Navigation from './components/Navigation.vue'

    export default {
        components: { Navigation },
        computed: {
            ...mapState(['currentUser'])
        }
    }
</script>
