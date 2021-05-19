<template>
    <div>
        <b-button v-b-modal.search size="lg" variant="info">SEARCH</b-button>
        <b-modal id="search" :title= "`SEARCH ${table.toUpperCase()}`" >
            <b-form>
                <modal-form 
                    :ref="table" 
                    :option_label="option_label" 
                    :option_data="option_data">
                </modal-form>
            </b-form>
            <template #modal-footer= "{cancel}">
            <b-button @click="search" variant="success">Submit</b-button>
            <b-button @click="cancel()" variant="danger" >Cancel</b-button>
            </template>
        </b-modal>
    </div>
</template>
<script>
//import {search} from '../../api/CRUD_API'
import ModalForm from './ModalForm.vue'
export default {
  components: { ModalForm },
    name:"dbSearch",
    props:{
        table:{
            default:"item"
        },
        option_label:{
            default:"Search By", 
        },    
        option_data:{
            default:[
                {   
                    label:"Search ID",
                    key:"id",
                    value:"",
                    option:
                    {
                        text: "ID", 
                        value:"id"//isSelect
                    },
                    num_type:true
                },
                {   
                    label:"Search Name",
                    key:"name",
                    value:"",
                    like:"true",
                    option:
                    {
                        text: "Name", 
                        value:"name"
                    }
                },
                {   
                    label:"Search Price",
                    key:"price",
                    option:
                    {
                        text: "Price", 
                        value:"price"
                    },
                    child_option:[
                        {   
                            label:"Min",
                            key:"min",
                            value:"",
                            num_type:true,
                            option:
                            {
                                text: "Min", 
                                value:"mix"//isSelect
                            }
                        },
                        {   
                            label:"Max",
                            key:"max",
                            value:"",
                            num_type:true,
                            option:
                            {
                                text: "Max", 
                                value:"max"//isSelect
                            },
                        },
                    ]
                },
            ]  
        }   
            
    },
    data(){
        return{
        }
    },
    methods:{
        search(){
            let form_data=this.$refs[this.table].extract_form()
            
            this.$emit("search",this.table,form_data)
            this.$bvModal.hide('search')
            console.log("!")
            this.$refs[this.table].reset_form()
        },
    }
}
</script>
<style scoped>

</style>