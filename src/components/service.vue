<template>
  <section class="service_section layout_padding">
    <div class="service_container">
      <div class="container ">
        <div class="heading_container heading_center">
          <h2>
            Our <span>Services</span>
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
          </p>
        </div>

      <!-- This Service_Box Component -->
        <service_box />
      <!-- End Service_Box Component -->

      </div>
    </div>
  </section>
</template>

<script>

import service_box from './service_section/service_box'

export default {
  components: {
    service_box
  }
}
</script>