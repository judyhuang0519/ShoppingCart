<template>
  <div class="d-flex flex-column" id="app">
      <header-component>
      <template #headerTitle>
        <p class="h1 text-light bg-dark text-center mb-0" >{{headerTitle}}</p>
      </template>
      <template #navbar>
        <navbar-component :navbarItems= "navbarData">
        </navbar-component>
      </template>
      </header-component>
      <main-component class="flex-grow-1 main_content">
          <router-view>
          </router-view>
      </main-component>
      
      <footer-component>
      </footer-component>

    
    <!--<menu-component
      :menuTitle= "menuData.name"
      :menuItems= "menuData.childMenus"
    >
    </menu-component>-->
    
    
  </div>
</template>
<script>
import headerComponent from '@/components/HeaderComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
export default {
  name: "App",
  components:{
    headerComponent,
    NavbarComponent

  },
  data(){
    return{
      headerTitle:"",
      navbarData: navbarData,
      //menuData: menuData
    }
  }
}
const navbarData=[{
    //id:"000",
    name:"Home",
    href:"/"
},
{
    //id:"001",
    name:"About",
    href:"/about"
},
{
    //id:"002",
    name:"User",
    href:"/user"
}]
/*const menuData={
  name: "Menu0",
  childMenus:[
    {
      name: "Menu0_1",
      childMenus:[
        {
          name: "Menu0_1_1"
        }
      ]
    },
    {
      name: "Menu0_2",
      childMenus:[
        {
          name: "Menu0_2_1",
          childMenus:[
            {
              name: "Menu0_2_1_1"
            }
          ]
        },
        {
          name: "Menu0_2_2",
        }
      ]
    }
  ]
}*/
</script>
<style scoped>
#app{
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
}

#app .main_content{
  background-color: var(--secondary);
}
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
