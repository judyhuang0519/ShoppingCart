<template>
    <div>   
    <b-form-group :label= "option_label">
        <b-form-checkbox-group 
            v-if= "options.length!=0"
            v-model= "data_mode" 
            :options= "options">
        </b-form-checkbox-group>
    </b-form-group>
    <template v-for="(data) in option_data" >
        <template v-if="data.child_option">
            <modal-form 
                :option_label= "data.label" 
                :option_data = "data.child_option" 
                v-show= "isSelect(data)" 
                :key= "data.key" >
            </modal-form>
        </template>
        <template v-else>
            <b-form-group :label= "data.label" v-show= "isSelect(data)" :key="data.key" >
                <template v-if="data.num_type">
                    <b-form-input type="number" trim v-model.number= "data.value"></b-form-input>
                </template>
                <template v-else>
                    <template v-if= "data.like">
                        <b-form-radio v-model= "data.like" value= "true">Like</b-form-radio>
                        <b-form-radio v-model= "data.like" value= "false">Exact</b-form-radio>
                    </template>
                    <b-form-input trim v-model= "data.value"></b-form-input>
                </template>
            </b-form-group>
        </template>
    </template>
    </div>
</template>
<script>
export default {
    name:"ModalForm",
    props:{
        option_label:{
            default:"Search By",
        },       
        option_data:{
            type:Array,
            default:()=>
            [
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
                                option:
                                {
                                    text: "Min", 
                                    value:"mix"//isSelect
                                },
                                num_type:true
                            },
                            {   
                                label:"Max",
                                key:"max",
                                value:"",
                                option:
                                {
                                    text: "Max", 
                                    value:"max"//isSelect
                                },
                                num_type:true
                            },
                    ]
                },
            ]
        },
    },
    destroyed(){
        console.log("DDD")
    },
    data(){
        return{
            data_mode:[],
            options:[],

        }
    },
    created(){
        this.option_data.forEach((data)=>{
            if(data.option){
                this.options.push(data.option)
            }
            
        })
    },
    methods:{        
        isSelect(data){
            if(data.option){
                return this.data_mode.includes(data.option.value)
            }else{
                return true
            }
            
        },
        extract_form(){
            let post_data={}
            this.extract(this.option_data,post_data)
            return post_data
        },
        reset_form(){
            this.reset(this.option_data)
        },
        extract(option_data, post_data){
            option_data.forEach((data)=>{
                if(data.child_option){
                    this.extract(data.child_option, post_data)
                }else{
                    if( data.value!="" && data.value){
                        if((data.like) && (data.like=="true"))
                        {
                            post_data[`${data.key}_like`] = data.value
                        }else{
                            post_data[data.key] = data.value
                        }
                    }
                }
            })
        },
        reset(option_data){
            option_data.forEach((data)=>{
                if(data.child_option){
                    this.reset(data.child_option)
                }else{
                    data.value=""
                }
            })
        }
    }
}
</script>
<style scoped>

</style>