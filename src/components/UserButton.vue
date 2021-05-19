<template>
<div>
  <b-button-group>
    
    <b-button v-b-modal.user_add>ADD</b-button>
      <b-modal id="user_add" title="ADD USER" >
        <b-form>
          <b-form-group label="User Account" label-for="Account">
            <b-form-input id="Account" name="user_account" trim v-model="account"></b-form-input>
          </b-form-group>
          <b-form-group label="User Password" label-for="Password">
            <b-form-input id="Password" name="user_password" trim v-model="password"></b-form-input>
          </b-form-group>
        </b-form>
        <template #modal-footer= "{cancel}">
          <b-button @click="submit" variant="success">Submit</b-button>
          <b-button variant="danger" @click="cancel()">Cancel</b-button>
        </template>
      </b-modal>
    
    <b-button v-b-modal.user_del>DEL</b-button>
      <b-modal id="user_del" title="DEL USER" >
        <b-form>
          <b-form-group label="User ID" label-for="ID">
            <b-form-input id="ID" name="user_id" trim v-model="del_id"></b-form-input>
          </b-form-group>
        </b-form>
        <template #modal-footer= "{cancel}">
          <b-button @click="del" variant="success">Submit</b-button>
          <b-button variant="danger" @click="cancel()">Cancel</b-button>
        </template>
      </b-modal>
    
    <!--<b-button @click="del_all">DELALL</b-button>-->

    <b-button v-b-modal.user_update>UPDATE</b-button>      
      <b-modal id="user_update" title="UPDATE USER" >
        <b-form>
          <b-form-group label="NEW PASSWORD" label-for="NewPassword">
            <b-form-input id="NewPassword" name="new_password" trim v-model="new_password"></b-form-input>
          </b-form-group>
        </b-form>
        <template #modal-footer= "{cancel}">
          <b-button @click="update" variant="success">Submit</b-button>
          <b-button variant="danger" @click="cancel()">Cancel</b-button>
        </template>
      </b-modal>
    
    <b-button v-b-modal.user_search>SEARCH</b-button>
      <b-modal id="user_search" title="SEARCH USER" >
        <b-form>
          <b-form-group label="SEARCH ID" label-for="SearchID">
            <b-form-input id="SearchID" name="search_id" trim v-model="search_id"></b-form-input>
          </b-form-group>
        </b-form>
        <template #modal-footer= "{cancel}">
          <b-button @click="search" variant="success">Submit</b-button>
          <b-button variant="danger" @click="cancel()">Cancel</b-button>
        </template>
      </b-modal>
    <user-add @update= "update_table"></user-add>
    <user-del @update= "update_table"></user-del>
    <user-del-all @update= "update_table"></user-del-all>
    <user-update @update= "update_table"></user-update>
    <user-search @update= "update_table"></user-search>
    <b-button>SEARCH_ACCOUNT</b-button>
  </b-button-group>
</div>
</template>
<script>

import {post} from '../axios/request'
import * as item from '@/api/ItemsAPI'
import UserAdd from './userButton/UserAdd.vue'
import UserDel from './userButton/UserDel.vue'
import UserDelAll from './userButton/UserDelAll.vue'
import UserUpdate from './userButton/UserUpdate.vue'
import UserSearch from './userButton/UserSearch.vue'
export default {
  components: { UserAdd, UserDel, UserDelAll, UserUpdate, UserSearch },
    data(){
        return{
            title:"ADD",
            account:"",
            password:"",
            del_id:"",
            new_password:"",
            search_id:""
        }
    },
    methods:{      
      update_table(data){
        this.$emit("update",this.$route.params.table, data)
      },
      async submit(){
        let userData={
          user_account:this.account,
          user_password:this.password
        }
        console.log(userData)
        let result = await post(`/${this.$route.params.table}`,userData)
        console.log(result)

        this.$bvModal.hide('add')
        //this.update_table()
      },

      async del(){
        try{
          let data = await item.del(this.del_id)
          console.log(data)
        }catch(e){
          console.log(e)
        }
          this.$bvModal.hide('del')
          //this.update_table()
      },
      /*async del_all(){
        try{
            let data = await item.del_all()
            this.update_table(data)
        }catch(error){
            console.log(error)
        }
          
      }*/
    }
}
</script>
<style scoped>

</style>