<template>
    <div class="hero_area">

        <div class="hero_bg_box">
            <div class="bg_img_box">
                <img src="/public/images/hero-bg.png" alt="">
            </div>
        </div>
        
        <Slide />
    </div>
</template>

<script>

import Slide from "@/components/header/slide.vue"

export default {
    components: {
        Slide
    }
}
</script>