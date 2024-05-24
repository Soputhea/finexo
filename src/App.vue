<template>
  <navbar/>
  <router-view/>
  <footerBar/>
</template>



<script>
import navbar from './components/navbar.vue'
import footerBar from './components/footer.vue'

export default {
  name: 'App',
  components: {
    navbar, footerBar
  }
}
</script>