<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-nav tabs>
                <b-nav-item class="h4 px-3" v-for="item in navbarItems" :key= "item.name" :to= "`${item.href}`">{{item.name}}</b-nav-item>
            </b-nav>
        </b-navbar>
        <router-view name="DBTable"></router-view>
        <!--<keep-alive>
            
        </keep-alive>-->
        <!--<keep-alive>
            <router-view name="DbTable" :ref= "`${this.$route.params.table}`" :key="`${$route.params.table}`"></router-view>
        </keep-alive>-->
        <!--<div class="d-flex justify-content-around" :key="`${$route.params.table}`">
            <user-add @update= "update" :v-show="isTable('user')"></user-add>
            <user-del @update= "update"></user-del>
            <user-del-all @update= "update"></user-del-all>
            <user-update @update= "update"></user-update>
            <user-search @update= "update"></user-search>
        </div>-->
        <!--<div class="d-flex justify-content-around" :key="`${$route.params.table}`">
            <item-add @update= "update"></item-add>
            <item-del @update= "update"></item-del>
            <item-del-all @update= "update"></item-del-all>
            
            <item-update @update= "update"></item-update>
        </div>
        <item-search @update= "update"></item-search>-->
        <!--<user-button @update= "update"></user-button>-->
        <!--<user-add @update= "update"></user-add>-->
    </div>
</template>
<script>
/*import ItemAdd from '../components/itemButton/ItemAdd.vue'
import ItemDel from '../components/itemButton/ItemDel.vue'
import ItemDelAll from '../components/itemButton/ItemDelAll.vue'
import ItemSearch from '../components/itemButton/ItemSearch.vue'
import ItemUpdate from '../components/itemButton/ItemUpdate.vue'*/
//import ItemList from '../components/ItemList.vue'
//import ItemSearch from '../components/itemButton/ItemSearch.vue'
/*import UserAdd from '../components/userButton/UserAdd.vue'
import UserDel from '../components/userButton/UserDel.vue'
import UserDelAll from '../components/userButton/UserDelAll.vue'
import UserSearch from '../components/userButton/UserSearch.vue'
import UserUpdate from '../components/userButton/UserUpdate.vue'*/

//import UserButton from '../components/UserButton.vue'
//import UserAdd from '../components/userButton/UserAdd.vue'
//import DbTable from '../components/DbTable.vue'


//import NavbarComponent from '../components/NavbarComponent.vue'

export default {
    components: { /*ItemAdd, ItemDel, ItemDelAll,  ItemSearch, ItemUpdate/*, ItemSearch */},
    data(){
        return{
            "navbarItems":[{
                name:"User",
                href:"/dbtest/user"
            },
            {
                name:"Item",
                href:"/dbtest/item"
            },
            {
                name:"Order",
                href:"/dbtest/order"
            },
            {
                name:"Order Detail",
                href:"/dbtest/detail"
            }]
        }
    },
    methods:{
        update(table,data){
            this.$refs[table].update(data)
        },
        isTable(table){
            console.log(this.$route.params.table == table)
            return this.$route.params.table == table
        }
    }
}
</script>
<style scoped>
.nav-link{
    color: var(--light);
}
</style>