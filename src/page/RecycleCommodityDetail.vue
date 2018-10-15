<template>
    <div id="detail">
        <span>{{ViewData.CommodityInfo.commodityNo}}</span>
        <span>{{ViewData.CommodityInfo.commodityName}}</span>
    </div>
</template>

<script>
    import {getCommodityDetail} from '../mock/api';

    export default {
        props: {
            commodityNo: String
        },
        name: "RecycleCommodityDetail",
        data() {
            const CommodityInfo = {
                commodityNo: this.commodityNo,
                commodityName: ''
            };
            const ViewData = {
                CommodityInfo: CommodityInfo
            };
            return {
                ViewData: ViewData
            };
        },
        mounted() {
            this.getRecycleCommodityDetail();
        },
        watch: {
            'commodityNo': function () {
                this.getRecycleCommodityDetail();
            }
        },
        methods: {
            getRecycleCommodityDetail() {
                getCommodityDetail(this.commodityNo).then(res => {
                    if (res.code === 200) {
                        this.ViewData.CommodityInfo = res.data;
                    } else {
                        this.$notify.error({title: '错误', message: res.msg});
                    }
                }).catch(err => {
                    console.log(err);
                })
            }
        }
    };
</script>

<style scoped>

</style>
