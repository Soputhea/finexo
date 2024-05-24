<template>
    <div class="hero_area">

        <div class="hero_bg_box">
            <div class="bg_img_box">
                <img src="images/hero-bg.png" alt="">
            </div>
        </div>
        <Slide />
    </div>
</template>

<script>

import Slide from './header/slide'

export default {
    components: {
        Slide
    }
}
</script>