<template>
<div>
    <div class="d-flex justify-content-between" >
        <div class="w-50">
            <db-table 
                class="w-100"
                :table="table"
                :parent_url="parent_url"  
                :ref="table" 
                :key="table">
            </db-table>
        </div>
        <div class="w-50">
            <db-table 
                table="detail"
                parent_url="/order/" 
                ref="detail" 
                key="detail">
            </db-table>
        </div>
    </div>
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

                :table= "table"  >

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
            table:"order",
            parent_url : "/",
            /*detail_field : [
            {key:"order_id",label:"order_id",class:"col-md"},
            {key:"item_id",label:"item_id",class:"col-md"},
            {key:"item_num",label:"item_num",class:"col-md"}],*/
            options:{
                add:{
                    label:"Order By",
                    data:
                    [
                        {   
                            label:"User ID",
                            key:"id",
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
                            label:"User ID",
                            key:"id",
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
                            key:"id",
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
            let url = `/${this.table}`
            this.$refs[table].add(url,data)
            this.$refs["detail"].fetch()
        },
        del_event(table,params){
            let url = `/${this.table}`
            this.$refs[table].del(url,params)
            this.$refs["detail"].fetch()
        },
        search_event(table,params){
            let url = `/${this.table}`
            this.$refs[table].search(url,params)
            this.$refs["detail"].fetch()
        },
        update_event(table,data){
            let url = `/${this.table}`
            this.$refs[table].update(url,data)
            this.$refs["detail"].fetch()
        }
    }
}
</script>
<style scoped>
.nav-link{
    color: var(--light);
}
</style>