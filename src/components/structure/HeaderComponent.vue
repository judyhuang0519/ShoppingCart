<template>
    <div>
        <slot name="headerTitle"></slot>
        
        <slot name="navbar">
            No navbar
        </slot>
    </div>
</template>
<script>

export default {
  components: { },
    name:'HeaderComponent',
    props:{
        
    }
}
</script>
<style scoped>

</style>