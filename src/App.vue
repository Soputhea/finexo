<template>
  <navbar v-if="$route.path !='/login'"/>
  <router-view/>
  <info v-if="$route.path !='/login'"/>
  <footerBar v-if="$route.path !='/login'"/>
  <ToastMessage/>
</template>



<script>
import navbar from './components/navbar.vue'
import info from './components/info.vue'
import footerBar from './components/footer.vue'
import ToastMessage from './components/toastMessage.vue'

export default {
  name: 'App',
  components: {
    navbar, footerBar, info,ToastMessage
  }
}
</script>

<style>
.active{
  color: brown;
}


</style>