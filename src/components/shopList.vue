<template>
<div class= "shopList">
    <h1>ShopList</h1>
    <b-table 
    hover 
    responsive
    :items= "shopItems" 
    :fields= "fields" 
    dark head-variant="light" 
    table-variant="secondary"
    tbody-tr-class="d-flex row-cols-auto"
    thead-tr-class="d-flex row-cols-auto"
    class="text-center"
    style="font-size:1.5rem"
    >
    <template #cell(item_num)='current_item'>
        <b-form-input 
        type="number" 
        class="input" 
        v-model.number.lazy="current_item.item.item_num" 
        @change="(input)=>{if(Number(input)<=0)current_item.item.item_num=1}"></b-form-input>
    </template>
    <template #cell(button)='current_item'>
        <div class="d-flex justify-content-around" >
            <b-button 
                class="delBtn" 
                @click="delItem(current_item.item,current_item.index)">
                Del
            </b-button>
            <b-button 
                class="addBtn" 
                @click="addItem(current_item.item)">
                Add
            </b-button>
        </div>
    </template>

    </b-table>
    <h4>Total {{sub}}</h4>
    <b-button @click='reset'>Reset</b-button>
    <b-button @click='submit'>Submit</b-button>
</div>
</template>
<script>
import {post} from "../axios/request"

export default {
    name:'shopList',
    data(){
        return{
            shopItems:[],
            fields:[
                {
                    key:'item_name',
                    label:'name',
                    class:'col'
                    
                },
                {
                    key:'item_price',
                    label:'content',
                    class: "col"
                    
                },
                {
                    key:'item_num',
                    label:'num',
                    class: "col-2"

                },
                {
                    key:'button',
                    label:'Option',
                    class: "col"
                    
                }
            ],
        }
    },
    beforeCreate(){
        //this.items = await getItems();    
        this.$eventbus.$on('addMessage',(adding_item)=>{this.addToShopList(adding_item)})
        //console.log("C")
    },

    beforeDestroy(){
        
        this.$eventbus.$off('addMessage',(adding_item)=>{this.addToShopList(adding_item)})
        //console.log("D")
    },
    computed:{
        sub(){
            let total = 0;
            this.shopItems.forEach((item) => {
                total += (item.item_price * item.num)
            });
            return(total)
        }
        
    },
    methods:{
        addToShopList(adding_item){
            let item = this.shopItems.find((availableItem)=>{
                return availableItem.item_id==adding_item.item_id
            })
            if(item){
                item.item_num+=adding_item.add_num;
            }else{
                let add_item = {...adding_item};
                this.$set(add_item,'item_num',add_item.add_num)
                delete add_item.add_num
                this.shopItems.push(add_item)
            }
            
        },        
        addItem(item){
            item.item_num++
            //console.log(this.num)

        },
        delItem(item,index){
            //console.log(index)
            //item.num=0
            this.shopItems.splice(index,1)

        },
        reset(){
            this.shopItems.splice(0)
        },
        async submit(){
            try {
                let data = {user_id:2,order_data:[...this.shopItems]}

                let res = await post('/order',data);
                console.log(res)
                this.reset()
            } catch (error) {
                console.log(error)
            }
            
        },
    }
    
}
</script>
<style scoped>
.input, .addBtn, .delBtn{
     text-align:center;
     font-size: 1.5rem;
}

</style>