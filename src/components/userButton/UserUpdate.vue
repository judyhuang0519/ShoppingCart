<template>
    <div>
        <b-button v-b-modal.update>UPDATE</b-button>
        <b-modal id="update" title="UPDATE USER" >
            <b-form>
                <b-form-group label="User Account" >
                    <b-form-input trim v-model="user_account"></b-form-input>
                </b-form-group>
            </b-form>
            <b-form>
                <b-form-group label="New Password" label-for="NewPassword">
                    <b-form-input id="NewPassword" trim v-model="new_password"></b-form-input>
                </b-form-group>
            </b-form>
            <template #modal-footer= "{cancel}">
            <b-button @click="update" variant="success">Submit</b-button>
            <b-button variant="danger" @click="cancel()">Cancel</b-button>
            </template>
        </b-modal>
    </div>
</template>
<script>
import {update} from '../../api/CRUD_API'
export default {
    name:"userUpdate",
    data(){
        return{
            user_account:"",
            new_password:"",
            table:"user"
        }
    },
    methods:{
        update_table(data){
            this.$emit("update", this.table,data)
        },
        async update(){
            try{
                let data={
                    "user_account":this.user_account,
                    "new_password":this.new_password
                }
                let result = await update(this.$route.params.table,data)
                this.$bvModal.hide('update')
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