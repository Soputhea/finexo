<template>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text">@</span>
        </div>
        <input type="email" v-model="sendEmail" class="form-control" placeholder="Username">
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: ''
        }
    },
    watch: {
        sendEmail(newVal) {
            this.$emit('custom-event', newVal);
        }
    }
}
</script>