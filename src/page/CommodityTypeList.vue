<template>
    <div id="commodityTypeList">
        <el-table :data="ViewData.commodityTypeList" border style="width: 100%">
            <el-table-column fixed prop="id" label="序号" width="150"></el-table-column>
            <el-table-column prop="name" label="类型名称" width="120"></el-table-column>
            <el-table-column prop="remark" label="类型备注"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="handleDelete(scope.row.id)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import {getAllCommodityType, deleteCommodityType} from '../mock/api';

    export default {
        components: {
            getAllCommodityType, deleteCommodityType
        },
        name: "CommodityTypeList",
        data() {
            const commodityTypeList = [];
            const ViewData = {
                commodityTypeList: commodityTypeList
            };
            return {
                ViewData: ViewData
            };
        },
        mounted() {
            this.loadCommodityType();
        },
        methods: {
            loadCommodityType() {
                getAllCommodityType().then(res => {
                    console.log(res);
                    if (res.code === 200) {
                        this.ViewData.commodityTypeList = res.data;
                    } else {
                        this.$notify.error({title: '错误', message: res.msg});
                    }
                }).catch(err => {
                    this.$notify.error({title: '错误', message: err.msg});
                })
            },
            handleDelete(id) {
                deleteCommodityType(id).then(res => {
                    if (res.code === 200) {
                        this.$notify({title: '错误', message: "删除成功", type: 'success'});
                        this.loadCommodityType();
                    } else {
                        this.$notify.error({title: '错误', message: res.msg});
                    }
                }).catch(err => {
                    this.$notify.error({title: '错误', message: err.msg});
                });
            }
        }
    }
</script>

<style scoped>

</style>
