<template>
    <div class="row">
        <div class="col-md-4 " v-for="(service, index) in services" :key="index">
            <div class="box">
                <div class="img-box">
                    <img :src="service.image" alt="">
                </div>
                <div class="detail-box">
                    <h5>
                        {{ service.title }}
                    </h5>
                    <p>
                        {{ service.description }}
                    </p>
                    <a href="">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="btn-box">
        <a href="">
            View All
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            services: [
                {
                    image: "images/s1.png",
                    title: "Currency Wallet",
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
                }
            ]
        }

    },
}

</script>