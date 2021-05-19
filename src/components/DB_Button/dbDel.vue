<template>
    <div>
        <b-button v-b-modal.del size="lg" variant="danger">DELETE</b-button>
        <b-modal id="del" :title= "`DEL ${table.toUpperCase()}`" >
            <b-form>
                <modal-form 
                    :ref="table" 
                    :option_label="option_label" 
                    :option_data="option_data">
                </modal-form>
            </b-form>
            <template #modal-footer= "{cancel}">
            <b-button @click="del" variant="success">Submit</b-button>
            <b-button variant="danger" @click="cancel()">Cancel</b-button>
            </template>
        </b-modal>
    </div>
</template>
<script>
//import {del} from '../../api/CRUD_API'
import ModalForm from './ModalForm.vue'
export default {
  components: { ModalForm },
    name:"dbDel",
    props:{
        table:{
            default:"item"
        },
        option_label:{
            default:"Delete By"
        },
        option_data:{
            default:
            [
                {   
                    label:"Item ID",
                    key:"id",
                    value:"",
                    num_type:true
                },
                {   
                    label:"Delete Name",
                    key:"name",
                    value:"",
                    like:"true",
                    option:
                    {
                        text: "Name", 
                        value:"name"
                    }
                    
                },
            ]
        }
    },
            
    data(){
        return{
            
            
        }
    },
    created(){
    },
    methods:{
        del(){
            let form_data= this.$refs[this.table].extract_form()
            console.log(":"+form_data)
            this.$emit("del",this.table,form_data)
                /*let result = await del(this.table,post_data)
                this.update_table(result.data)
                if(result.msg){
                    alert(result.msg)
                }*/
            this.$bvModal.hide('del')
            this.$refs[this.table].reset_form()
        },
        
    }
}
</script>
<style scoped>

</style>