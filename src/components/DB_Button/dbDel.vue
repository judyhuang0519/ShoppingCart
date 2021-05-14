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
import {del} from '../../api/CRUD_API'
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
                    /*option:
                    {
                        text: "ID", 
                        value:"id"//isSelect
                    },*/
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
        update_table(data){
            this.$emit("update", this.table,data)
        },
        async del(){
            try{
                let post_data= this.$refs[this.table].extract_form()
                let result = await del(this.table,post_data)
                this.update_table(result.data)
                if(result.msg){
                    alert(result.msg)
                }
            }catch(e){
                alert(e.msg)
            }
            this.$bvModal.hide('del')
            this.$refs[this.table].reset_form()
        },
        
    }
}
</script>
<style scoped>

</style>