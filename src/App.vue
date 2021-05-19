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
        <router-view >
        </router-view>
        <keep-alive>
          <shop-list v-show= "isShow"></shop-list>
        </keep-alive>
      </main-component>
      <footer-component>
      </footer-component>
  </div>
</template>
<script>
import HeaderComponent from '@/components/structure/HeaderComponent.vue'
import NavbarComponent from '@/components/structure/NavbarComponent.vue'
import MainComponent from './components/structure/MainComponent.vue'
import FooterComponent from './components/structure/FooterComponent.vue'
import ShopList from './components/shopList.vue'
export default {
  name: "App",
  components:{
    HeaderComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    ShopList

  },
  data(){
    return{
      headerTitle:"",
      navbarData: navbarData,
      //menuData: menuData
    }
  },
  computed:{
    isShow(){
      return (this.$route.name == 'ShopCart' || this.$route.name == 'Home')
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
    name:"Shopping Cart",
    href:"/shopcart"
},
{
    //id:"002",
    name:"DB Test",
    href:"/dbtest"
},
{
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
  color: var(--light);
  background-color: var(--secondary);
}
</style>
