<template>
        <section class="team_section layout_padding">
    <div class="container-fluid">
      <div class="heading_container heading_center">
        <h2 class="">
          Our <span> Team</span>
        </h2>
      </div>

      <div class="team_container">
        <team_box/>
      </div>
    </div>
  </section>
</template>

<script>
import team_box from './team_section/team_box'

export default {
  components: {team_box}
}



</script>