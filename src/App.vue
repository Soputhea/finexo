<template>
  <navbar/>
  <router-view/>
  <info/>
  <footerBar/>
</template>



<script>
import navbar from './components/navbar.vue'
import info from '@/components/info.vue'
import footerBar from './components/footer.vue'

export default {
  name: 'App',
  components: {
    navbar, footerBar, info
  }
}
</script>

<style>
.active{
  color: brown;
}
</style>