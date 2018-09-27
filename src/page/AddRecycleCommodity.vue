<template>
    <div id="add">
        <el-form label-width="100px" label-position="left" :model="ViewData.ruleForm" :rules="ViewData.rules" ref="ViewData.ruleForm">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="商品名称" prop="name">
                        <el-input v-model="ViewData.ruleForm.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="活动名称" prop="name">
                        <el-input v-model="ViewData.ruleForm.name"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

        </el-form>
    </div>
</template>

<script>
    import {insertRecycleCommodity} from '../mock/mock-api';
    import COS from 'cos-js-sdk-v5';

    export default {
        components: {
            insertRecycleCommodity,
            COS
        },
        name: "AddRecycleCommodity",
        data() {
            const ViewData = {
                ruleForm: {
                    name: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ]
                },
                test: '数据'
            };
            return {
                ViewData: ViewData
            };
        },
        mounted() {
            insertRecycleCommodity(1)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
        },
        methods: {
            uploadFile() {
                let cos = new COS();
                console.log("123");
            }
        }
    }
</script>

<style scoped>

</style>
