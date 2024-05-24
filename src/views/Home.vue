<template>
    <Header />
    <service />
    <about />
    <why />
    <team />
    <client />

</template>

<script>
import Header from '../components/header.vue'
import service from '../components/service.vue'
import about from '../components/about.vue'
import why from '../components/why.vue'
import team from '../components/team.vue'
import client from '../components/client.vue'


export default {
  components: {
    Header,
    service,
    about,
    why,
    team,
    client,

  }
}
</script>