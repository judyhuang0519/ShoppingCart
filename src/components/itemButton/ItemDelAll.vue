<template>
    <div>
        <b-button @click="del_all">DEL ALL</b-button>
        
    </div>
</template>
<script>
import {del_all} from '../../api/CRUD_API'
export default {
    name:"itemDelAll",
    props:{
        table:{
            default:"item"
        }
    },
    data(){
        return{
            //table:"user"
        }
    },
    methods:{
        update_table(data){
            this.$emit("update", this.table,data)
        },
        async del_all(){
            try{
                let result = await del_all(this.table)
                this.$bvModal.hide('del_all')
                this.update_table(result)
            }catch(e){
                if(e.error){
                    console.log(e.error)
                }
                if(e.msg){
                    console.log(e.msg)
                }
            }
        }
    }
}
</script>
<style scoped>

</style>