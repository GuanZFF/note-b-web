<template>
    <div id="addCommodityType">
        <el-form label-width="120px" label-position="left" :model="View.Params" :rules="View.rules" ref="View.Params">
            <el-row>
                <el-col :span="24">
                    <el-form-item label="类型名称" prop="name">
                        <el-input v-model="View.Params.name" placeholder="类型名称"></el-input>
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
                <el-col :span="12" style="text-align: center">
                    <el-button type="primary" @click="createType('View.Params')">立即创建</el-button>
                </el-col>
                <el-col :span="12" style="text-align: center">
                    <el-button @click="reset('View.Params')">重置</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
    import {insertCommodityType} from '../mock/api';

    export default {
        components: {
            insertCommodityType
        },
        name: "AddCommodityType",
        data() {
            const Params = {
                name: '',
                remark: ''
            };
            const View = {
                Params: Params,
                rules: {
                    name: [
                        {required: true, message: '请输入类型名称', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    remark: [
                        {required: true, message: '请输入备注', trigger: 'blur'}
                    ]
                }
            };
            return {
                View: View
            }
        },
        methods: {
            createType(params) {
                this.$refs[params].validate((valid) => {
                    if (valid) {
                        insertCommodityType(this.View.Params).then(res => {
                            console.log(res);
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
            }
        }
    }
</script>

<style scoped>

</style>
