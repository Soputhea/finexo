<template>
    <section class="team_section layout_padding">
        <div class="container-fluid">
            <div class="heading_container heading_center">
                <h2 class="">
                    Our <span> Team</span>
                </h2>
            </div>

            <div class="team_container">
                <div class="row">
                    <div class="col-lg-3 col-sm-6" v-for="(user, index) in users" :key="index">
                        <UserBox :usersList="user" />
                    </div>
                </div>
            </div>
        </div>
    </section>



    <!-- {{ users }} -->
</template>


<script>

import UserBox from '../components/user/user_box.vue'
import { useUsersStore } from '@/store/user.js'
import { mapState, mapActions } from 'pinia'

export default {
    components: {
        UserBox
    },
    async mounted() {
        await this.fetchUsers()
    },
    computed: {
        ...mapState(useUsersStore, ["users"]),
    },
    methods: {
        ...mapActions(useUsersStore, ['fetchUsers']),
    }
}
</script>
