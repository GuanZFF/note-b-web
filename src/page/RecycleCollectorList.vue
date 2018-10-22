<template>
    <div id="recycleCollectorList">
        <el-table :data="ViewData.collectorList" border style="width: 100%">
            <el-table-column fixed prop="id" label="序号" type="index" width="50"></el-table-column>
            <el-table-column prop="collectorNo" label="收集人编号" width="150"></el-table-column>
            <el-table-column prop="username" label="收集人姓名" width="120"></el-table-column>
            <el-table-column prop="sexDesc" label="收集人性别" width="100"></el-table-column>
            <el-table-column prop="wechatNo" label="微信号" width="120"></el-table-column>
            <el-table-column prop="statusDesc" label="收集人状态" width="120"></el-table-column>
            <el-table-column prop="phone" label="收集人手机号" width="120"></el-table-column>
            <el-table-column prop="address" label="收集人地址" width="120"></el-table-column>
            <el-table-column prop="remark" label="类型备注"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="handleDelete(scope.row.collectorNo)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import {getAllRecycleCollector, deleteCollector} from '../mock/api';

    export default {
        components: {
            getAllRecycleCollector
        },
        name: "RecycleCollectorList",
        data() {
            const collectorList = [];
            const ViewData = {
                collectorList: collectorList
            };
            return {
                ViewData: ViewData
            };
        },
        mounted() {
            this.loadCollectorList();
        },
        methods: {
            loadCollectorList() {
                getAllRecycleCollector().then(res => {
                    if (res.code === 200) {
                        this.ViewData.collectorList = res.data;
                    } else {
                        this.$notify.error({title: '错误', message: res.msg});
                    }
                }).catch(err => {
                    this.$notify.error({title: '错误', message: err.msg});
                })
            },
            handleDelete(collectorNo) {
                deleteCollector(collectorNo).then(res => {
                    if (res.code === 200) {
                        this.loadCollectorList();
                    } else {
                        this.$notify.error({title: '错误', message: res.msg});
                    }
                }).catch(err => {
                    this.$notify.error({title: '错误', message: err.msg});
                })
            }
        }
    }
</script>

<style scoped>

</style>
