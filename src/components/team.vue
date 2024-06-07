<template>
  <section class="team_section layout_padding">
    <div class="container-fluid">
      <div class="heading_container heading_center">
        <h2 class="">
          Our <span> Team</span>
        </h2>
      </div>

      <div class="team_container">
        <div class="row">
          <div class="col-lg-3 col-sm-6" v-for="(team, index) in teams" :key="index">
            <team_box :staff="team"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import team_box from './team_section/team_box'
import team_box from './team_section/team_box.vue'

export default {
  components: { team_box },
  data() {
    return {
      teams: [
        {
          image: "images/team-1.jpg",
          title: "Expert Management",
          description: "fact that a reader ",
          quote: "We love the world"
        },
        {
          image: "images/team-2.jpg",
          title: "Currency Wallet",
          description: "fact that a reader "
        },
        {
          image: "images/team-3.jpg",
          title: "Currency Wallet",
          description: "fact that a reader ",
          quote: "We love the world"
        },
        {
          image: "images/team-4.jpg",
          title: "Currency Wallet",
          description: "fact that a reader "
        }
      ]
    }

  },
}



</script>