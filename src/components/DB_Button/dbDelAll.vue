<template>
    <div>
        <b-button @click="del_all" size="lg" variant="danger">DEL ALL</b-button>
    </div>
</template>
<script>
//import {del} from '../../api/CRUD_API'
export default {
    name:"dbDelAll",
    props:{
        table:{
            default:"item"
        },
    },
    data(){
        return{
        }
    },
    methods:{
        del_all(){
            this.$emit("del_all",this.table,{})
            this.$bvModal.hide('del_all')
        }
    }
}
</script>
<style scoped>

</style>