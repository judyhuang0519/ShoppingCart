<template>
    <ul>
        <li>
            <template v-if= "menuItems.length > 0">
                <p @click= "isOpen = !isOpen">{{menuTitle}}</p>
                <menu-component
                    v-show="isOpen"
                    v-for= "child in menuItems"
                    :key= "child.name"
                    :menuTitle= "child.name"
                    :menuItems= "child.childMenus">
                </menu-component>
            </template>
            <a v-else href= "#">{{menuTitle}}</a>
        </li>
    </ul>
</template>
<script>
export default {
    name:'menu-component',
    props:{
        "menuTitle": String,
        "menuItems": {
            type: Array,
            default:() => []
        }
    },
    data(){
        return{
            "isOpen": false
        }
    }
}

</script>
<style scoped>

</style>