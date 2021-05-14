<template>
    <div>
        <b-button v-b-modal.update>UPDATE</b-button>
        <b-modal id="update" title="UPDATE ITEM" >
            <b-form>
                <b-form-group label="Item ID">
                    <b-form-input trim v-model="item_id"></b-form-input>
                </b-form-group>
            </b-form>
            <b-form>
                <b-form-group label="New Name" >
                    <b-form-input trim v-model="new_name"></b-form-input>
                </b-form-group>
                <b-form-group label="New Price" >
                    <b-form-input trim v-model="new_price"></b-form-input>
                </b-form-group>
            </b-form>
            <template #modal-footer= "{cancel}">
            <b-button @click="update" variant="success">Submit</b-button>
            <b-button variant="danger" @click="cancel()">Cancel</b-button>
            </template>
        </b-modal>
    </div>
</template>
<script>
import {update} from '../../api/CRUD_API'
export default {
    name:"itemUpdate",
    props:{
        table:{
            default:"item"
        }
    },
    data(){
        return{
            /*data:{
                item_id:"",
                new_name:"",
                new_price:"",
            },*/
            item_id:"",
            new_name:"",
            new_price:"",
            //table:"user"
        }
    },
    methods:{
        update_table(data){
            this.$emit("update", this.table,data)
        },
        async update(){
            try{
                let data={
                    "item_id":this.item_id,
                    "new_name":this.new_name,
                    "new_price":this.new_price
                }
                let result = await update(this.table,data)
                this.$bvModal.hide('update')
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