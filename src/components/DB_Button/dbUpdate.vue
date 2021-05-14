<template>
    <div>
        <b-button v-b-modal.update size="lg" variant="success">UPDATE</b-button>
        <b-modal id="update" title="UPDATE ITEM" >
            <b-form>
                <modal-form 
                    :ref="table" 
                    :option_label="option_label" 
                    :option_data="option_data">
                </modal-form>
                <!--<b-form-group label="Item ID">
                    <b-form-input trim v-model="item_id"></b-form-input>
                </b-form-group>
            </b-form>
            <b-form>
                <b-form-group label="New Name" >
                    <b-form-input trim v-model="new_name"></b-form-input>
                </b-form-group>
                <b-form-group label="New Price" >
                    <b-form-input trim v-model="new_price"></b-form-input>
                </b-form-group>-->
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
import ModalForm from './ModalForm.vue'
export default {
  components: { ModalForm },
    name:"dbUpdate",
    props:{
        table:{
            default:"item"
        },
        option_label:{
            default:"Update Item"
        },
        option_data:{
            default:
            [
                {   
                    label:"Item Name",
                    key:"name",
                    value:"",
                },
                {   
                    label:"Item Price",
                    key:"price",
                    value:"",
                    num_type:true    
                }
            ]
        }
            
    },
    data(){
        return{
            
            
        }
    },
    methods:{
        update_table(data){
            this.$emit("update", this.table,data)
        },
        async update(){
            try{
                /*let data={
                    "item_id":this.item_id,
                    "new_name":this.new_name,
                    "new_price":this.new_price
                }*/
                let post_data= this.$refs[this.table].extract_form()
                let result = await update(this.table,post_data)
                this.update_table(result.data)
                if(result.msg){
                    alert(result.msg)
                }
            }catch(e){
                alert(e.msg)
            }                
            this.$bvModal.hide('update')
            this.$refs[this.table].reset_form()
        }
    }
}
</script>
<style scoped>

</style>