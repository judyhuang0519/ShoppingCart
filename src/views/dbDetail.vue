<template>
    <div>
        <db-table 
            :table="table"
            :parent_url="parent_url"  
            :ref= "table" 
            :key="table">
        </db-table>

        <div class="d-flex justify-content-around" >
                <db-add 
                    @add = "add_event"
                     
                    :table= "table"
                    :option_label="options.add.label"
                    :option_data="options.add.data"
                >
                </db-add>
                <db-del 
                    @del = "del_event"
           
                    :table= "table"
                    :option_label="options.del.label"
                    :option_data="options.del.data">
                </db-del>
                <db-del-all 
                @del_all = "del_event"
                :table= "table"   >

                </db-del-all>
                <db-search 
                    @search = "search_event"
               
                    :table= "table"
                    :option_label="options.search.label"
                    :option_data="options.search.data"
                ></db-search>
                <db-update 
                    disabled
                    @update= "update_event"
                    :table= "table"
                    :option_label="options.update.label"
                    :option_data="options.update.data"
                >
                </db-update>
 
        </div>
    </div>
</template>
<script>


//import { delete } from 'vue/types/umd'
import DbTable from '../components/DbTable.vue'
import DbAdd from '../components/DB_Button/dbAdd.vue'
import DbDel from '../components/DB_Button/dbDel.vue'
import DbDelAll from '../components/DB_Button/dbDelAll.vue'
import DbSearch from '../components/DB_Button/dbSearch.vue'
import DbUpdate from '../components/DB_Button/dbUpdate.vue'

export default {
    components: { 
        DbTable,
        DbAdd,
        DbDel,
        DbDelAll,
        DbSearch,
        DbUpdate
    },
    data(){
        return{
            table:"detail",
            parent_url:"/order/",
            options:{
                add:{
                    label:"Add With",
                    data:
                    [
                        {   
                            label:"Order ID",
                            key:"order_id",
                            value:"",
                            num_type:true
                        },
                        {   
                            label:"Item ID",
                            key:"item_id",
                            value:"",
                            num_type:true
                        },
                        {   
                            label:"Item Num",
                            key:"item_num",
                            value:"",
                            num_type:true
                        }
                    ]
                },
                del:{
                    label:"Delete With",
                    data:
                    [
                        {   
                            label:"Order ID",
                            key:"order_id",
                            value:"",
                            num_type:true
                        },
                        {   
                            label:"Item ID",
                            key:"item_id",
                            value:"",
                            num_type:true
                        },
                    ]
                },
                search:{
                    label:"Search By",
                    data:   
                    [
                        {   
                            label:"Order ID",
                            key:"order_id",
                            value:"",
                            num_type:true
                        },
                        {   
                            label:"Item ID",
                            key:"item_id",
                            value:"",
                            num_type:true
                        }
                    ]
                },
                update:{
                    lable:"Update Order",
                    data:
                    [
                        {   
                            label:"Order ID",
                            key:"order_id",
                            value:"",
                        },
                        {   
                            label:"Item ID",
                            key:"item_id",
                            value:"",
                            num_type:true    
                        },
                        {
                            label:"Item Num",
                            key:"item_num",
                            value:"",
                            num_type:true 
                        }
                    ]
                }
            }

            
        }
    },
    methods:{     
        add_event(table,data){
            let url = `${this.parent_url}${data.order_id}`
            let add_details = [data]
            this.$refs[table].add(url,add_details)
        },
        del_event(table,params){
            let url
            if(params && params.order_id)
            {
                url = `${this.parent_url}${params.order_id}`
                delete params.order_id
            }else{
                url = `${this.parent_url}${this.table}`
            }
            //if(params.order_id){
                this.$refs[table].del(url,params)
            /*}else{
                this.$refs[table].del(`/order/detail`,params)
            }*/
            
        },
        search_event(table,params){
            let url
            if(params && params.order_id)
            {
                url = `${this.parent_url}${params.order_id}`
                delete params.order_id
            }else{
                url = `${this.parent_url}${this.table}`
            }
            //if(params.order_id){
                this.$refs[table].search(url,params)
        },
        update_event(table,data){
            let url = `${this.parent_url}${data.order_id}`
            let update_details = {...data}
            delete update_details.order_id
            update_details = [update_details]
            this.$refs[table].update(url,update_details)
        }
    }
}
</script>
<style scoped>
.nav-link{
    color: var(--light);
}
</style>