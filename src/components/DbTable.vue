<template>
<div>
    <b-table 
    hover 
    :items= "objs" 
    :fields="fields" 
    dark head-variant="light" 
    table-variant="secondary"
    tbody-tr-class="d-flex row-cols-auto"
    thead-tr-class="d-flex row-cols-auto"
    class="text-center"
    style="font-size:1.5rem"
    >
    </b-table>
</div>
</template>
<script>
//import * as item from "../api/ItemsAPI"
import {fetch} from '../api/CRUD_API'
export default {
    name:'DbTable',
    props:{
        table:{
            default:"user"
        }
    },
    data(){
        return{
            objs:[],
            fields:[],
        }
    },
    created(){
        this.fetch_data()
    },
    methods:{
        async fetch_data(){
            //console.log("fff")
            try {        

                let result = await fetch(this.table);
                this.objs = result.data
                if(this.fields.length == 0){
                    if(this.objs && this.objs.length != 0){
                        Object.keys(this.objs['0']).forEach((key)=>{
                            this.fields.push({key:key,label: key,class:'col'})
                        })
                    }
                }   
            } catch (error) {
                console.log("Qeq")
                this.fields.splice(0)
                this.objs.splice(0)
                console.log(error.msg)
                alert(error.msg)
            }  
        },
        update(table_data){
            this.objs=table_data;    
        }

    }
    
}
</script>
<style scoped>
.input,.addBtn{
     text-align:center;
     font-size: 1.5rem
}
</style>