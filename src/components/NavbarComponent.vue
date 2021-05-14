<template>
    <b-navbar type="dark" variant="dark">
        <b-navbar-brand tag="h1">Navbar</b-navbar-brand>
        <b-navbar-nav class="w-100" align="right">
            <b-nav-item class="h4 px-3" v-for="item in navbarItems" :key= "item.name" :to= "`${item.href}`">{{item.name}}</b-nav-item>
            <b-nav-item class="h4 px-3" v-b-toggle.sidebar_right href="#" >Sidebar</b-nav-item>        
            <sidebar-component></sidebar-component>
        </b-navbar-nav>
    </b-navbar>
</template>
<script>
import SidebarComponent from './SidebarComponent.vue'
export default {
    name:'navbar-component',
    components:{
        SidebarComponent
    },
    props:{
        "navbarItems":{
            default:[{
                name:"Home",
                href:"/"
            },
            {
                name:"About",
                href:"/about"
            }]    
        }
    },
    data(){
       return{}
          
    }
}
</script>
<style scoped>

</style>