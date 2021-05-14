<template>
    <div>
        <b-button v-b-modal.del>DEL</b-button>
        <b-modal id="del" title="DEL USER" >
            <b-form>
                <b-form-group label="Del Account" label-for="DelAccount">
                    <b-form-input id="DelAccount" trim v-model="del_account"></b-form-input>
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
    name:"userDel",
    data(){
        return{
            del_account:"",
            table:"user"
        }
    },
    methods:{
        update_table(data){
            this.$emit("update", this.$route.params.table,data)
        },
        async del(){
            try{
                let query_string=`?account=${this.del_account}`
                let result = await del(this.$route.params.table,"account",this.del_account,query_string)
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