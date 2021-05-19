<template>
    <div>
        <b-button v-b-modal.add>ADD</b-button>
        <b-modal id="add" title="ADD USER" >
            <b-form>
                <b-form-group label="User Account" label-for="Account">
                    <b-form-input id="Account" trim v-model="user_account"></b-form-input>
                </b-form-group>
                <b-form-group label="User Password" label-for="Password">
                    <b-form-input id="Password" trim v-model="user_password"></b-form-input>
                </b-form-group>
            </b-form>
            <template #modal-footer= "{cancel}">
            <b-button @click="add" variant="success">Submit</b-button>
            <b-button variant="danger" @click="cancel()">Cancel</b-button>
            </template>
        </b-modal>
    </div>
</template>
<script>
import {add} from '../../api/CRUD_API'
export default {
    name:"userAdd",
    data(){
        return{
            user_account:"",
            user_password:"",
            //table:"user"
        }
    },
    methods:{
        update_table(data){
            this.$emit("update", this.$route.params.table,data)
        },
        async add(){
            try{
                let data ={
                    "user_account" : this.user_account,
                    "user_password" : this.user_password
                }
                let result = await add(this.$route.params.table, data)
                this.$bvModal.hide('add')
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