<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-nav tabs>
                <b-nav-item class="h4 px-3" v-for="item in navbarItems" :key= "item.name" :to= "`${item.href}`">{{item.name}}</b-nav-item>
            </b-nav>
        </b-navbar>
        <router-view name="DBTable"></router-view>
    </div>
</template>
<script>


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
    }
}
</script>
<style scoped>
.nav-link{
    color: var(--light);
}
</style>