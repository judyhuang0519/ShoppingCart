<template>
    <div>
        <b-button v-b-modal.del>DEL</b-button>
        <b-modal id="del" title="DEL ITEM" >
            <b-form>
                <b-form-group label="Del ID">
                    <b-form-input trim v-model="del_id"></b-form-input>
                </b-form-group>
            </b-form>
            <template #modal-footer= "{cancel}">
            <b-button @click="del" variant="success">Submit</b-button>
            <b-button variant="danger" @click="cancel()">Cancel</b-button>
            </template>
        </b-modal>
    </div>
</template>
<script>
import {del} from '../../api/CRUD_API'
export default {
    name:"itemDel",
    props:{
        table:{
            default:"item"
        }
    },
    data(){
        return{
            del_id:"",
            //table:"user"
        }
    },
    methods:{
        update_table(data){
            this.$emit("update", this.table,data)
        },
        async del(){
            try{
                let query_string=`?id=${this.del_id}`
                let result = await del(this.table,"id",this.del_id,query_string)
                this.$bvModal.hide('del')
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