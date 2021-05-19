<template>
    <b-sidebar id= "sidebar_right" title="Sidebar" bg-variant="dark" text-variant="light">
        <nav>
            <b-nav class="h4 w-100" vertical>
                <b-nav-item v-for="item in sidebarItems" :key= "item.name" :to= "`${item.href}`">{{item.name}}</b-nav-item>
            </b-nav>
        </nav>
    </b-sidebar>
</template>
<script>
export default {
  components: {},
    name:"SidebarComponent",
    props:{  
        "sidebarItems":{
            default:() => [{
                name:"s_Home",
                href:"/"
            },
            {
                name:"s_About",
                href:"/about"
            }]    
        }
    },
    data(){
        return{
          
        }
    }
}
</script>