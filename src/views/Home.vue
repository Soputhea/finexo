<template>

    <service />
    <about />
    <why />
    <team />
    <client />
    <info />
    <footerSector />
</template>

<script>

import service from '../components/service.vue'
import about from '../components/about.vue'
import why from '../components/why.vue'
import team from '../components/team.vue'
import client from '../components/client.vue'
import info from '../components/info.vue'
import footerSector from '../components/footer.vue'

export default {
  components: {

    service,
    about,
    why,
    team,
    client,
    info,
    footerSector
  }
}
</script>