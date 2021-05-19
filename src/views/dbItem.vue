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
                :table= "table" >
            </db-del-all>
            <db-search 
                @search = "search_event"
       
                :table= "table"
                :option_label="options.search.label"
                :option_data="options.search.data"
            ></db-search>
            <db-update 
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
            table:"item",
            parent_url : "/",
            options:{
                add:{
                    label:"Item Info",
                    data:
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
                },
                del:{
                    label:"Delete By",
                    data:
                    [
                        {   
                            label:"Item ID",
                            key:"id",
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
                            label:"Item ID",
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
                            label:"Item Name",
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
                            label:"Item Price",
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
                },
                update:{
                    lable:"Update Item",
                    data:
                    [
                        {   
                            label:"Item ID",
                            key:"id",
                            value:"",
                        },
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
            }

            
        }
    },
    methods:{
        add_event(table,data){
            let url = `/${this.table}`
            this.$refs[table].add(url,data)
        },
        del_event(table,params){
            let url = `/${this.table}`
            this.$refs[table].del(url,params)
        },
        search_event(table,params){
            let url = `/${this.table}`
            this.$refs[table].search(url,params)
        },
        update_event(table,data){
            let url = `/${this.table}`
            this.$refs[table].update(url,data)
        }
    }
}
</script>
<style scoped>
.nav-link{
    color: var(--light);
}
</style>