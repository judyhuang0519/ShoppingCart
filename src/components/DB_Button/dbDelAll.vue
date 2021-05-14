<template>
    <div>
        <b-button @click="del_all" size="lg" variant="danger">DEL ALL</b-button>
    </div>
</template>
<script>
import {del} from '../../api/CRUD_API'
export default {
    name:"dbDelAll",
    props:{
        table:{
            default:"item"
        }
    },
    data(){
        return{
        }
    },
    methods:{
        update_table(data){
            this.$emit("update", this.table,data)
        },
        async del_all(){
            try{
                let result = await del(this.table)
                this.update_table(result.data)
                if(result.msg){
                    alert(result.msg)
                }
            }catch(e){
                alert(e.msg)    
            }
            this.$bvModal.hide('del_all')
        }
    }
}
</script>
<style scoped>

</style>