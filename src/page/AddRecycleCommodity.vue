<template>
    <div id="add">
        <el-form label-width="120px" label-position="left" :model="ViewData.params" :rules="ViewData.rules"
                 ref="ViewData.params">
            <el-row>
                <el-col :span="24">
                    <el-form-item label="商品名称" prop="commodityName">
                        <el-input v-model="ViewData.params.commodityName" placeholder="商品名称"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="收集人" prop="collectorNo">
                        <el-select v-model="ViewData.params.collectorNo" placeholder="请选择收集人">
                            <el-option v-for="item in ViewData.collector"
                                       :key="item.collectorNo"
                                       :label="item.username"
                                       :value="item.collectorNo">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="回收日期" prop="recycleTime">
                        <el-date-picker
                            v-model="ViewData.params.recycleTime"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="商品类型" prop="commodityType">
                        <el-select v-model="ViewData.params.commodityType" placeholder="请选择商品类型">
                            <el-option v-for="item in ViewData.commodityTypes"
                                       :key="item.id"
                                       :label="item.name"
                                       :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="商品回收价格" prop="recyclePrice">
                        <el-input v-model="ViewData.params.recyclePrice" placeholder="商品回收价格"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="商品出售价格" prop="expectSellPrice">
                        <el-input v-model="ViewData.params.expectSellPrice" placeholder="商品出售价格"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="备注" prop="remark">
                        <el-input type="textarea" v-model="ViewData.params.remark" placeholder="备注"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <!--图片上传-->
            <el-row>
                <el-col :span="24">
                    <el-form-item label="商品头像">
                        <el-upload
                            action="http://localhost:8083/oss/common/upload"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-success="handleSuccess"
                            :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="商品详情">
                        <el-upload
                            action="http://localhost:8083/oss/common/upload"
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-success="handleDetailSuccess"
                            :on-remove="handleDetailRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12" style="text-align: center">
                    <el-button type="primary" @click="createCommodity('ViewData.params')">立即创建</el-button>
                </el-col>
                <el-col :span="12" style="text-align: center">
                    <el-button @click="resetRecycleCommodity('ViewData.params')">取消</el-button>
                </el-col>
            </el-row>
        </el-form>

        <el-dialog :visible.sync="ViewData.dialogVisible">
            <img width="100%" :src="ViewData.dialogImageUrl" alt="">
        </el-dialog>
    </div>
</template>

<script>
    // import {getAllRecycleCollector, getAllCommodityType} from '../mock/mock-api';
    import {insertRecycleCommodity, getAllRecycleCollector, getAllCommodityType} from '../mock/api';

    export default {
        components: {
            insertRecycleCommodity, getAllRecycleCollector, getAllCommodityType
        },
        name: "AddRecycleCommodity",
        data() {
            const params = {
                commodityName: '',          // 商品名称
                collectorNo: '',            // 收集人编号
                commodityPicture: '',       // 商品图片头链接
                imgUrl: [],                 // 商品图片详情链接
                commodityType: '',          // 商品类型
                recycleTime: '',            // 回收时间
                recyclePrice: '',           // 回收价格
                expectSellPrice: '',        // 出售价格
                remark: '',                 // 备注
            };
            const ViewData = {
                rules: {
                    commodityName: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    collectorNo: [
                        {required: true, message: '请选择收集人', trigger: 'change'}
                    ],
                    recycleTime: [
                        {type: 'date', required: true, message: '请选择回收日期', trigger: 'change'}
                    ],
                    commodityType: [
                        {required: true, message: '请选择商品类型', trigger: 'change'}
                    ],
                    recyclePrice: [
                        {required: true, message: '请输入回收价格', trigger: 'blur'}
                    ],
                    expectSellPrice: [
                        {required: true, message: '请输入期望出售价格', trigger: 'blur'}
                    ],

                    remark: [
                        {required: true, message: '请输入备注', trigger: 'blur'}
                    ]
                },
                dialogImageUrl: '',         // 需要展示的URL
                dialogVisible: false,       // 是否要展示
                collector: [],              // 收集人列表
                commodityTypes: [],         // 商品类型列表
                params: params              // 请求参数
            };
            return {
                ViewData: ViewData
            };
        },
        mounted() {
            getAllRecycleCollector()
                .then(res => {
                    this.ViewData.collector = res.data;
                })
                .catch(err => {
                    console.log(err);
                });
            getAllCommodityType()
                .then(res => {
                    this.ViewData.commodityTypes = res.data;
                })
                .catch(err => {
                    console.log(err);
                })
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(1);
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.ViewData.dialogVisible = true;
                this.ViewData.dialogImageUrl = file.response.data;
            },
            handleSuccess(response, file, fileList) {
                this.ViewData.params.commodityPicture = response.data;
            },
            // 图片详情处理
            handleDetailSuccess(response) {
                this.ViewData.params.imgUrl.push(response.data)
            },
            handleDetailRemove(file, fileList) {
                this.ViewData.params.imgUrl.splice(this.ViewData.params.imgUrl.indexOf(file.response.data), 1);
                console.log(file);
                console.log(fileList)
            },
            // 提交插入数据
            createCommodity(commodityInfo) {
                this.$refs[commodityInfo].validate((valid) => {
                    if (valid) {
                        insertRecycleCommodity(this.ViewData.params)
                            .then(res => {
                                console.log(res);
                                this.$notify({title: '成功', message: '插入成功', type: 'success'});
                            })
                            .catch(err => {
                                console.log(err);
                                this.$notify.error({title: '错误', message: '请正确输入'});
                            });
                    } else {
                        this.$notify.warning({title: '错误', message: '请正确输入', type: 'warning'});
                        return false;
                    }
                });
            },
            resetRecycleCommodity(commodityInfo) {
                this.$refs[commodityInfo].resetFields();
            },
        }
    }
</script>

<style scoped>
    #add {
    }
</style>
