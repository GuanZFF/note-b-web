<template>
    <div id="addRecycleCollector">
        <el-form label-width="120px" label-position="left" :model="View.Params" :rules="View.rules" ref="View.Params">
            <el-row>
                <el-col :span="24">
                    <el-form-item label="用户名称" prop="username">
                        <el-input v-model="View.Params.username" placeholder="用户名称"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="性别" prop="sex">
                        <el-select v-model="View.Params.sex" placeholder="请选择收集人性别">
                            <el-option v-for="item in View.sex"
                                       :key="item.code"
                                       :label="item.message"
                                       :value="item.code">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="手机号" prop="phone">
                        <el-input v-model="View.Params.phone" placeholder="手机号"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="地址" prop="address">
                        <el-input v-model="View.Params.address" placeholder="地址"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="微信号" prop="wechatNo">
                        <el-input v-model="View.Params.wechatNo" placeholder="微信号"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="备注" prop="remark">
                        <el-input type="textarea" v-model="View.Params.remark" placeholder="备注"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="头像" prop="avatar">
                        <el-upload
                            class="avatar-uploader"
                            :action=View.default_avatar
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                            <img v-if="View.Params.avatar" :src="View.Params.avatar" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12" style="text-align: center">
                    <el-button type="primary" @click="createCollector('View.Params')">立即创建</el-button>
                </el-col>
                <el-col :span="12" style="text-align: center">
                    <el-button @click="reset('View.Params')">重置</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
    import {insertCollector} from '../mock/api';
    import CONSTANT from '../lib/constant';

    export default {
        components: {
            insertCollector, CONSTANT
        },
        name: "AddRecycleCollector",
        data() {
            const Params = {
                username: '',
                sex: '',
                phone: '',
                address: '',
                wechatNo: '',
                remark: '',
                avatar: ''
            };
            const View = {
                default_avatar: CONSTANT.UPLOAD_URL,
                Params: Params,
                rules: {
                    username: [
                        {required: true, message: '请输入类型名称', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    sex: [
                        {required: true, message: '请选择收集人性别', trigger: 'change'}
                    ],
                    phone: [
                        { required: true, message: '请输入手机号', trigger: 'blur' },
                        { pattern: /^1[34578]\d{9}$/, message: '目前只支持中国大陆的手机号码' }
                    ],
                    address: [
                        {required: true, message: '请输入地址', trigger: 'blur'}
                    ],
                    wechatNo: [
                        {required: true, message: '请输入微信号', trigger: 'blur'}
                    ],
                    remark: [
                        {required: true, message: '请输入备注', trigger: 'blur'}
                    ],
                    avatar: [
                        {required: true, message: '头像不能为空', trigger: 'blur'}
                    ]
                },
                sex: [{code: 0, message: '男'}, {code: 1, message: '女'}],
            };
            return {
                View: View
            }
        },
        methods: {
            createCollector(params) {
                this.$refs[params].validate((valid) => {
                    if (valid) {
                        insertCollector(this.View.Params).then(res => {
                            if (res.code === 200) {
                                this.$notify({title: '成功', message: '插入成功', type: 'success'});
                            } else {
                                this.$notify.error({title: '错误', message: res.msg});
                            }
                        }).catch(err => {
                            this.$notify.error({title: '错误', message: err});
                        })
                    } else {
                        this.$notify.warning({title: '错误', message: '请正确输入', type: 'warning'});
                        return false;
                    }
                })
            },
            reset(params) {
                this.$refs[params].resetFields();
            },
            handleAvatarSuccess(res, file) {
                this.View.Params.avatar = res.data;
            },
            beforeAvatarUpload(file) {
                console.log(file);
            }
        }
    }
</script>

<style scoped>
    .avatar-uploader {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        width: 178px;
        height: 178px;
    }
    .avatar-uploader:hover {
        border-color: #409EFF;
        width: 178px;
        height: 178px;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>
