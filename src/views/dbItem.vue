<template>
    <div>
        <db-table 
            :table="table" 
            :ref="table" 
            :key="table">
        </db-table>
        <div class="d-flex justify-content-around" >
            <db-add 
                @update= "update"
                :table= "table"
                :option_label="options.add.label"
                :option_data="options.add.data"
            >
            </db-add>
            <db-del 
                @update= "update"
                :table= "table"
                :option_label="options.del.label"
                :option_data="options.del.data">
            </db-del>
            <db-del-all @update= "update"></db-del-all>
            <db-search 
                @update= "update"
                :table= "table"
                :option_label="options.search.label"
                :option_data="options.search.data"
            ></db-search>
            <db-update 
                @update= "update"
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
                            /*option:
                            {
                                text: "ID", 
                                value:"id"//isSelect
                            },*/
                            num_type:true
                        },
                        /*{   
                            label:"Delete Name",
                            key:"name",
                            value:"",
                            like:"true",
                            option:
                            {
                                text: "Name", 
                                value:"name"
                            }
                            
                        },*/
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
        update(table,data){
            this.$refs[table].update(data)
        },
        isTable(table){
            console.log(this.$route.params.table == table)
            return this.$route.params.table == table
        }
    }
}
</script>
<style scoped>
.nav-link{
    color: var(--light);
}
</style>