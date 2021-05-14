<template>
  <div class="home">
    <h1>This is a home page</h1>
    <item-list ></item-list>
    <!--:shopItems="shopItems"@addMessage='addToShopList'<item-list :items="items" @addMessage='addToShopList'></item-list>-->
    
    
  </div>
</template>

<script>
import ItemList from '../components/ItemList.vue'
//import ShopList from '../components/shopList.vue'
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    ItemList,
    //ShopList
  },
  data(){
    return{
      /*items:[{
                name:'Item1',
                price:100,
                //num:1
            },
            {
                name:'Item2',
                price:200,
                //num:1
            },
            {
                name:'Item3',
                price:300,
                //num:1
            }],*/
      //shopItems:[]
    }
  },
  methods:{
   /* addToShopList(item){
      //this.$emit('addMessage',item)
      this.$refs.shopList.addToShopList(item)
      //this.shopItems.push(item)
    }*/
  }
}
</script>
<style scoped>

</style>