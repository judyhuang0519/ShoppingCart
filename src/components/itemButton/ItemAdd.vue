<template>
    <div>
        <b-button v-b-modal.add>ADD</b-button>
        <b-modal id="add" title="ADD ITEM" >
            <b-form>
                <b-form-group label="Item Name" >
                    <b-form-input trim v-model="item_name"></b-form-input>
                </b-form-group>
                <b-form-group label="Item Price" >
                    <b-form-input trim v-model.number="item_price"></b-form-input>
                </b-form-group>
            </b-form>
            <template #modal-footer= "{cancel}">
            <b-button @click="add" variant="success">Submit</b-button>
            <b-button variant="danger" @click="cancel()">Cancel</b-button>
            </template>
        </b-modal>
    </div>
</template>
<script>
import {add} from '../../api/CRUD_API'
export default {
    name:"itemAdd",
    props:{
        table:{
            default:"item"
        }
    },
    data(){
        return{
            item_name:"",
            item_price:"",
            //table:"user"

        }
    },
    methods:{
        update_table(data){
            this.$emit("update", this.table,data)
        },
        async add(){
            try{

                /*for(let key in this.data){
                    console.log("#")
                    
                }*/
                let data ={
                    "item_name" : this.item_name,
                    "item_price" : this.item_price
                }
                let result = await add(this.table, data)
                this.$bvModal.hide('add')
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