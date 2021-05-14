<template>
    <div>
        <b-button v-b-modal.search>SEARCH</b-button>
        <b-modal id="search" title="SEARCH USER" >
            <b-form>
                <b-form-group label="Search User By">
                    <b-form-radio v-model="search_mode"  name="search_mode" value="id">ID</b-form-radio>
                    <b-form-radio v-model="search_mode"  name="search_mode" value="account">Account</b-form-radio>
                    <b-form-input id="SearchUser" trim v-model="search_key"></b-form-input>
                </b-form-group>
            </b-form>
            <template #modal-footer= "{cancel}">
            <b-button @click="search" variant="success">Submit</b-button>
            <b-button variant="danger" @click="cancel()">Cancel</b-button>
            </template>
        </b-modal>
    </div>
</template>
<script>
import {search} from '../../api/CRUD_API'
export default {
    name:"userDel",
    data(){
        return{
            search_mode:"id",
            search_key:"",
            table:"user"
        }
    },
    methods:{
        update_table(data){
            this.$emit("update", this.$route.params.table,data)
        },
        async search(){
            try{
                let query_string =`?${this.search_mode}=${this.search_key}`
                let result = await search(this.$route.params.table,this.search_mode,this.search_key,query_string)
                this.$bvModal.hide('search')
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