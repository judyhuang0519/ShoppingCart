<template>
    <div>
        <b-button v-b-modal.search>SEARCH</b-button>
        <b-modal id="search" title="SEARCH ITEM" >
            <b-form>
                <b-form-group label="Search Item By">
                    <b-form-checkbox-group v-model="search_mode" :options="options"></b-form-checkbox-group>
                    <b-form-group v-show="isSelect('id')" label="ID" >
                    <b-form-input v-show="isSelect('id')"  trim v-model="id"></b-form-input>
                    </b-form-group>
                    <b-form-group v-show="isSelect('name')" label="Name">                        
                        <b-form-radio v-model="search_like" value="like">Like</b-form-radio>
                        <b-form-radio v-model="search_like" value="exact">Exact</b-form-radio>
                        <b-form-input v-show="search_like=='like'" trim v-model="name_like"></b-form-input>
                        <b-form-input v-show="search_like=='exact'" trim v-model="name"></b-form-input>
                    </b-form-group>
                    <b-form-group v-show="isSelect('price')" label="Price" >
                        <b-form-group  label="Min" >
                            <b-form-input type="number" trim v-model.number.lazy="min"></b-form-input>
                        </b-form-group>
                        
                        <b-form-group  label="Max" >
                            <b-form-input type="number" trim v-model.number.lazy="max"></b-form-input>
                        </b-form-group>
                    </b-form-group>
                </b-form-group>
            </b-form>
            <template #modal-footer= "{cancel}">
            <b-button @click="search" variant="success">Submit</b-button>
            <b-button variant="danger" @click="cancel()">Cancel</b-button>
            </template>
        </b-modal>
    </div>
</template>
<script>
import {search} from '../../api/CRUD_API'
export default {
    name:"itemSearch",
    props:{
        table:{
            default:"item"
        }
    },
    data(){
        return{
            search_mode:[],
            options:[
                {text:"ID",value:"id"},
                {text:"Name",value:"name"},
                {text:"Price",value:"price"}
            ],
            search_like:"like",
            id:"" ,
            name_like:"",
            name:"",
            min:"",
            max:""  ,
            query_string:""
        }
    },
    methods:{
        update_table(data){
            this.$emit("update", this.table,data)
        },
        isSelect(type){
            for(let i =0;i<this.search_mode.length;i++){
                if(this.search_mode[i]==type){
                    return true
                }
            }
            return false
        },
        async search(){
            try{
                let search_key = {
                    id:this.id,
                    name:this.name, 
                    name_like:this.name_like,
                    min:this.min, 
                    max:this.max
                }
                let keys=Object.keys(search_key)
                let insert_index = 0
                let op = "?"
                keys.forEach((key)=>{
                    if(search_key && search_key[key]!="")
                    {
                        this.query_string+=op
                        if(insert_index == 0){
                            op = "&"
                        }
                        this.query_string+=`${key}=${search_key[key]}`
                        insert_index++
                    }
                })
                console.log(this.query_string)
                let result = await search(this.table,this.query_string)
                this.$bvModal.hide('search')
                this.update_table(result)
            }catch(e){
                if(e.error){
                    console.log(e.error)
                }
                if(e.msg){
                    console.log(e.msg)
                }
            }
            this.reset()
        },
        reset(){
            this.id =""
            this.name=""
            this.min = ""
            this.max=""
            this.query_string=""

        }
    }
}
</script>
<style scoped>

</style>