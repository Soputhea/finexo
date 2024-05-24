<template>
    <div>
        <h1>User Details</h1>
        <p>User ID: {{ $route.params.userId }}</p>
        <p>Query : {{ $route.query }}</p>
        <router-link :to="`/user/${$route.params.userId}/setting`"> Setting</router-link>
    </div>
    <router-view></router-view>

</template>

<script>
export default {
    mounted() {
        const param = this.$route.params.userId
        console.log(param);
    },
}
</script>