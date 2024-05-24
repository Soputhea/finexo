<template>
    <div class="row">
          <div class="col-lg-3 col-sm-6" v-for="(team, index) in teams" :key="index">
            <div class="box " >
              <div class="img-box">
                <img :src=team.image class="img1" alt="">
              </div>
              <div class="detail-box">
                <h5>
                 {{ team.title }}
                </h5>
                <p>
                  {{ team.description }}
                </p>
              </div>
              <div class="social_box">
                <a href="#">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            teams: [
                {
                    image: "images/team-1.jpg",
                    title: "Expert Management",
                    description: "fact that a reader "
                },
                {
                    image: "images/team-2.jpg",
                    title: "Currency Wallet",
                    description: "fact that a reader "
                },
                {
                    image: "images/team-3.jpg",
                    title: "Currency Wallet",
                    description: "fact that a reader "
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