<template>
    <div id="list">
        <!--表格信息-->
        <el-table :data="ViewData.commodityList" border style="width: 100%">
            <el-table-column prop="commodityNo" label="商品编号" width="180"></el-table-column>
            <el-table-column prop="commodityName" label="商品名称" width="180"></el-table-column>
            <el-table-column prop="recycleTime" label="回收时间" width="180"></el-table-column>
            <el-table-column prop="recyclePrice" label="回收价格" width="180"></el-table-column>
            <el-table-column prop="expectSellPrice" label="期望出售价格" width="180"></el-table-column>
            <el-table-column prop="collectorNo" label="出售人编号" width="180"></el-table-column>
            <el-table-column prop="collectorName" label="出售人" width="180"></el-table-column>
            <el-table-column prop="commodityStatusDesc" label="商品状态"></el-table-column>
            <el-table-column fixed="right" label="操作" width="130">
                <template slot-scope="scope">
                    <el-button @click="handleStart(scope.row)" type="text" size="small">启用</el-button>
                    <el-button @click="handleStop(scope.row)" type="text" size="small">停用</el-button>
                    <el-button @click="handleDetail(scope.row)" type="text" size="small">详情</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!--分页信息-->
        <el-pagination
            background
            layout="prev, pager, next"
            :total="ViewData.Page.total"
            :page-size="ViewData.Page.pageSize"
            @current-change="changePage"
            style="text-align: right;margin-top: 15px">
        </el-pagination>

        <!--详情弹窗-->
        <el-dialog
            title="商品详情"
            :visible.sync="ViewData.dialogVisible"
            width="30%"
            :before-close="handleClose">
            <RecycleCommodityDetail :commodityNo="ViewData.dialogCommodityNo"/>
        </el-dialog>
    </div>
</template>

<script>
    import {getRecycleCommodity, updateCommodityToStart, updateCommodityToStop} from '../mock/api';
    import RecycleCommodityDetail from './RecycleCommodityDetail';

    export default {
        components: {
            getRecycleCommodity, updateCommodityToStart, updateCommodityToStop, RecycleCommodityDetail
        },
        name: "RecycleCommodityList",
        data() {
            const CommodityStatus = {
                INIT: 0,            // 商品初始值
                START: 1,           // 商品启动
                STOP: 2             // 商品停止
            };
            const Page = {
                total: 0,           // 总行数
                pageSize: 10,       // 页大小
                pageNum: 1          // 当前页
            };
            const ViewData = {
                commodityList: [],
                Page: Page,
                CommodityStatus: CommodityStatus,
                dialogVisible: false,
                dialogCommodityNo: ''
            };
            return {
                ViewData: ViewData
            }
        },
        mounted() {
            this.loadCommodityInfo();
        },
        methods: {
            handleStart(commodityInfo) {
                if (this.ViewData.CommodityStatus.INIT !== commodityInfo.commodityStatus) {
                    this.$notify({title: '警告', message: '初始状态才能更新', type: 'warning'});
                    return;
                }
                updateCommodityToStart(commodityInfo.commodityNo)
                    .then(res => {
                        if (res.code === 200) {
                            this.$notify({title: '成功', message: '更新成功', type: 'success'});
                            this.loadCommodityInfo();
                        } else {
                            this.$notify.error({title: '错误', message: res.msg});
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            handleStop(commodityInfo) {
                if (this.ViewData.CommodityStatus.START !== commodityInfo.commodityStatus) {
                    this.$notify({title: '警告', message: '启动状态才能更新', type: 'warning'});
                    return;
                }
                updateCommodityToStop(commodityInfo.commodityNo)
                    .then(res => {
                        if (res.code === 200) {
                            this.$notify({title: '成功', message: '更新成功', type: 'success'});
                            this.loadCommodityInfo();
                        } else {
                            this.$notify.error({title: '错误', message: res.msg});
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            handleDetail(commodityInfo) {
                console.log('111');
                this.ViewData.dialogCommodityNo = commodityInfo.commodityNo;
                this.ViewData.dialogVisible = true;
            },
            changePage(page) {
                this.ViewData.Page.pageNum = page;
                this.loadCommodityInfo();
            },
            loadCommodityInfo() {
                getRecycleCommodity(this.ViewData.Page.pageNum, this.ViewData.Page.pageSize)
                    .then(res => {
                        console.log(res);
                        this.ViewData.commodityList = res.data.list;
                        this.ViewData.Page.total = res.data.count;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            handleClose() {
                this.ViewData.dialogVisible = false;
                console.log('------');
            }
        }
    }
</script>

<style scoped>

</style>
