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
                                <router-link class="nav-link" to="/">Home</router-link>
                            </li>
                            <li class="nav-item" :class="{ active: $route.path == '/about' }">
                                <router-link class="nav-link" to="/about">About</router-link>
                            </li>


                            <!-- <li class="nav-item active">
                                <router-link to="/">
                                    <a class="nav-link" href="">Home <span class="sr-only">(current)</span></a>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/about">
                                    <a class="nav-link">About</a>
                                </router-link>
                            </li> -->
                            <li class="nav-item" :class="{ active: $route.path == '/service' }">
                                <router-link to="/service">
                                    <a class="nav-link">Services</a>
                                </router-link>
                            </li>
                            <li class="nav-item" :class="{ active: $route.path == '/why' }">
                                <router-link to="/why">
                                    <a class="nav-link">Why US</a>
                                </router-link>
                            </li>
                            <li class="nav-item" :class="{ active: $route.path == '/team' }">
                                <router-link to="/team">
                                    <a class="nav-link">Team</a>
                                </router-link>
                            </li>


                            <li class="nav-item" :class="{ active: $route.path == '/user' }">
                                <router-link to="/user">
                                    <a class="nav-link">User</a>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"> <i class="fa fa-user" aria-hidden="true"></i> Login</a>
                            </li>
                            <form class="form-inline">
                                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </form>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    </div>
</template>