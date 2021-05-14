<template>
  <div class="home">
    <h1>This is a home page</h1>
    <item-list></item-list>
  </div>
</template>

<script>
import ItemList from '../components/ItemList.vue'
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    ItemList
  }
}
</script>
<style scoped>
.home{
  height: 100%;
  color: var(--light);
}
</style>