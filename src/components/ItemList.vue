<template>
<div>
    <b-table 
    hover 
    :items= "items" 
    :fields="fields" 
    dark head-variant="light" 
    table-variant="secondary"
    >
    <template #cell(addButton)>
        <b-button @click="add">Add</b-button>
    </template>
    </b-table>
{{num}}
</div>
</template>
<script>
export default {
    name:'ItemList',
    data(){
        return{
            num:1,
            fields:[
                {
                    key:'id',
                    label:'name'
                },
                {
                    key:'text',
                    label:'content'
                },
                {
                    key:'addButton',
                    label:'addbutton'
                }
            ],
            items:[
                {
                    id:'01',
                    text:'a'
                },
                {
                    id:'01',
                    text:'a'
                },
                {
                    id:'01',
                    text:'a'
                }
            ]
        }
    },
    methods:{
        add(){
            this.num++
            //console.log(this.num)

        }
    }
}
</script>
<style>

</style>