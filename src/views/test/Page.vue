<template>
  <div class="page">
    <h2>Hey</h2>
    <h1>Page : {{$route.params.pageName}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Page'
}
</script>
