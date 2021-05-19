<template>
<div>
    <b-table 
    hover 
    :items= "items" 
    :fields="fields" 
    dark head-variant="light" 
    table-variant="secondary"
    tbody-tr-class="d-flex row-cols-auto"
    thead-tr-class="d-flex row-cols-auto"
    class="text-center"
    style="font-size:1.5rem"
    >
    <template #cell(addNum)='current_item'>
        <b-form-input type="number" class="input" v-model.number.lazy="current_item.item.add_num" @change="(input)=>{if(Number(input)<=0)current_item.item.add_num=1}"></b-form-input>
    </template>
    <template #cell(addButton)='current_item'>
        <div class="d-flex justify-content-around" >
            <b-button class="addBtn" @click="addToShopList(current_item.item)">Add</b-button>
        </div>
    </template>
    </b-table>
</div>
</template>
<script>
//import * as item from '@/api/ItemsAPI'
import * as req from '../axios/request'
export default {
    name:'ItemList',
    data(){
        return{
            items:[],
            //num:1,
            fields:[
                {
                    key:'item_name',
                    label:'Name',
                    class:'col'
                },
                {
                    key:'item_price',
                    label:'Price',
                    class:'col'
                },
                {
                    key:'addNum',
                    label:'addNum',
                    class: "col-2"
                },
                {
                    key:'addButton',
                    label:'addbutton',
                    class: "col"
                }
            ]

        }
    },
    async created(){
        try {
            let result = await req.get(`/item`);
            this.items = result.data
            this.items.forEach(element => {this.$set(element,'add_num',1)
            });
            console.log(typeof(this.items))
            console.log(this.items)
        } catch (error) {
            console.log(error)
        }  
    },
   destroyed(){
       console.log("iD")
   },
        
    methods:{
        addToShopList(current_item){
            this.$eventbus.$emit('addMessage',{...current_item})
            //this.$emit('addMessage',{...current_item})
        },

    }
    
}
</script>
<style scoped>
.input,.addBtn{
     text-align:center;
     font-size: 1.5rem
}
</style>