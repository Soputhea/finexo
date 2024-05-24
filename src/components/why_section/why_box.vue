<template>
    <div class="why_container">
        <div class="box" v-for="(why, index) in whys" :key="index">
            <div class="img-box">
                <img :src="why.image" alt="">
            </div>
            <div class="detail-box">
                <h5>
                    {{why.title}}
                </h5>
                <p>
                    {{ why.description }}
                </p>
            </div>
        </div>
    </div>
    <div class="btn-box">
        <a href="">
            Read More
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            whys: [
                {
                    image: "images/s1.png",
                    title: "Expert Management",
                    description: "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using"
                },
                {
                    image: "images/s2.png",
                    title: "Currency Wallet",
                    description: "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using"
                },
                {
                    image: "images/s3.png",
                    title: "Currency Wallet",
                    description: "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using"
                },
                {
                    image: "images/s3.png",
                    title: "Currency Wallet",
                    description: "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using"
                }
            ]
        }

    },
}
</script>