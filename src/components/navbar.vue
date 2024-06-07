<template>
    <div>
        <header class="header_section" style="background-color: #1c126d;">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg custom_nav-container ">
                    <a class="navbar-brand" href="index.html">
                        <span>
                            Finexo
                        </span>
                    </a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class=""> </span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav  ">
                            <li class="nav-item" :class="{ active: $route.path == '/' }">
                                <router-link class="nav-link" to="/">{{ $t('navbar.home') }}</router-link>
                            </li>
                            <li class="nav-item" :class="{ active: $route.path == '/about' }">
                                <router-link class="nav-link" to="/about">{{ $t('navbar.about') }}</router-link>
                            </li>

                            <li class="nav-item" :class="{ active: $route.path == '/service' }">
                                <router-link to="/service">
                                    <a class="nav-link">{{ $t('navbar.service') }}</a>
                                </router-link>
                            </li>
                            <li class="nav-item" :class="{ active: $route.path == '/why' }">
                                <router-link to="/why">
                                    <a class="nav-link">{{ $t('navbar.whyus') }}</a>
                                </router-link>
                            </li>
                            <li class="nav-item" :class="{ active: $route.path == '/team' }">
                                <router-link to="/team">
                                    <a class="nav-link">{{ $t('navbar.team') }}</a>
                                </router-link>
                            </li>


                            <li class="nav-item" :class="{ active: $route.path == '/user' }">
                                <router-link to="/user">
                                    <a class="nav-link">{{ $t('navbar.user') }}</a>
                                </router-link>
                            </li>

                            <li class="nav-item">
                                <router-link to="/login">
                                    <a class="nav-link" >{{ $t('navbar.login') }}</a>
                                </router-link>
                                
                            </li>
                            <li class="nav-item">
                                <router-link to="/register">
                                <a class="nav-link"> <i class="fa fa-user" aria-hidden="true"></i> {{ $t('navbar.register') }}</a>
                                </router-link>
                            </li>
                            <form class="form-inline">
                                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </form>

                            <div class="form-inline">
                                <button @click="changeLanguage('en')">English</button>
                                <button @click="changeLanguage('km')">Khmer</button>
                            </div>
                            
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    </div>
</template>


<script>
export default{
    methods:{
        changeLanguage(){
            if(this.$i18n.locale == "en"){
                this.$i18n.locale ="km";
            }else{
                this.$i18n.locale= "en";
            }
        }
    }
}
</script>
