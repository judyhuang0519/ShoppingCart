<template>
    <div>
        <b-button v-b-modal.add size="lg" variant="primary">ADD</b-button>
        <b-modal id="add" :title= "`ADD ${table.toUpperCase()}`" >
            <b-form>
                <modal-form 
                    :ref="table" 
                    :option_label="option_label" 
                    :option_data="option_data">
                </modal-form>
                <!--<template v-for= "(data) in option_data" >
                    <b-form-group :label= "data.lable" :key= "data.key" >
                        <template v-if= "data.num_type">
                            <b-form-input type="number" trim v-model.number= "data.value" ></b-form-input>
                        </template>
                        <template v-else>                                
                            <b-form-input trim v-model= "data.value"></b-form-input>
                        </template>
                    </b-form-group>
                </template>-->
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
import ModalForm from './ModalForm.vue'
export default {
  components: { ModalForm },
    name:"dbAdd",
    props:{
        table:{
            default:"item"
        },
        option_label:{
            default:"Add New Item"
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
        async add(){
            try{
                let post_data=this.$refs[this.table].extract_form()
                let result = await add(this.table, post_data)
                this.update_table(result.data)
                if(result.msg){
                    alert(result.msg)
                }
            }catch(e){
                alert(e.msg)
            }
            this.$bvModal.hide('add')
            this.$refs[this.table].reset_form()
        },
    }
}
</script>
<style scoped>

</style>