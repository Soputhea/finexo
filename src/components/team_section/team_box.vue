<template>
  <div class="box ">
    <div class="img-box">
      <img :src=staff.image class="img1" alt="">
    </div>
    <div class="detail-box">
      <h5>
        {{ staff.title }}
      </h5>
      <p>
        {{ staff.description }}
      </p>
      <p v-if="staff.quote!=null"> "{{ staff.quote }}" </p>
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
    staff: {
      type: Object,
      default: () => {
        return {
          title: "",
          description: "",
          quote: ""
        }
      }
    },
    users: {
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