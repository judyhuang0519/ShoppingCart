<template>
  <div class="user">
    <h1>This is a User page</h1>
    <b-container class="mx-0 mw-100 bg-secondary" >
      <b-row>
        <b-col cols="3">
          <b-list-group>
            <b-list-group-item to= "/user/data" variant="dark" exact-active-class="active">Data</b-list-group-item>
            <b-list-group-item to= "/user/setting" variant="dark" exact-active-class="active">Setting</b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col>
           <router-view name="userContent"></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'User',
  beforeCreate(){
    console.log("UC")
  }
}
</script>
<style scoped>
.user {
  height: 100%;
  color: var(--light);
}
</style>