<template>
  <div class="box ">
    <div class="img-box">
      <img src="/public/images/team-1.jpg" class="img1" alt="">
    </div>
    <div class="detail-box">
      <h5>
        {{ usersList.name }}
      </h5>
      <p>
        {{ usersList.email }}
      </p>
      <p > {{ usersList.job }} </p>
      
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
</template>

<script>
export default {
  props: {
    usersList: {
      type: Object,
      default: () => {
        return {
          name: "",
          email: "",
          job: ""
        }
      }
    }
  },

}
</script>