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
//,post,,patch
import * as req from '../axios/request';
export default {
    name:'DbTable',
    props:{
        table:{
            default:"user"
        },
        parent_url:{
            default:"/"
        },
        fields:{
            default:()=>[],
        }
    },
    data(){
        return{
            objs:[],
            
        }
    },
    async created(){
        await this.fetch()
        if(this.fields.length == 0){
            if(this.objs && this.objs.length != 0){
                Object.keys(this.objs['0']).forEach((key)=>{
                    this.fields.push({key:key,label: key,class:'col-md'})
                })
            }
        }   
    },
    destroyed(){
        console.log(`destoy ${this.table}`)
    },
    methods:{
        async fetch(){
            try {
                        
                let result = await req.get(`${this.parent_url}${this.table}`);
                this.objs = result.data
            } catch (error) {
                this.objs.splice(0)
                console.log(error.msg)
                alert(error.msg)
            }  
        },
        async search(url,params_data){
            try{
                /*let url =`/${this.table}`
                if(child_path!="")
                {
                    url+=child_path
                }*/
                let result = await req.get(url, params_data)
                this.refresh(result.data)
                if(result.msg){
                    console.log(result.msg)
                }
            }catch(e){
                alert(e.msg)
            }
        },
        async add(url,post_data){
            try{
                /*let url =`/${this.table}`
                if(child_path!="")
                {
                    url+=child_path
                }*/

                let result = await req.post(url, post_data)
                this.refresh(result.data)
                if(result.msg){
                    console.log(result.msg)
                }
            }catch(e){

                alert(e.msg)
            }
        },
        async del(url,params_data){
            try{
                /*let url =`/${this.table}`
                if(child_path!="")
                {
                    url+=child_path
                }*/
                let result = await req.del(url, params_data)
                console.log("%")
                console.log(result)
                console.log("$")
                this.refresh(result.data)
                if(result.msg){
                    console.log(result.msg)
                }
            }catch(e){
                alert(e.msg)
            }
        },
        async update(url,post_data){
            try{
                /*let url =`/${this.table}`
                if(child_path!="")
                {
                    url+=child_path
                }*/
                let result = await req.patch(url, post_data)
                this.refresh(result.data)
                if(result.msg){
                    console.log(result.msg)
                }
            }catch(e){
                alert(e.msg)
            }
        },
        async update_detail(url,post_data){
            try{

                let result = await req.patch(`/order/${url}`, post_data)
                this.refresh(result.data)
                if(result.msg){
                    console.log(result.msg)
                }
            }catch(e){
                
                alert(e.msg)
            }
        },
        refresh(table_data){
            
            console.log(this.fields)
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