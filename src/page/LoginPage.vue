<template>
    <div id="login">
        <el-form label-width="120px" label-position="left" :model="VIEW.params" :rules="VIEW.rules"
                 ref="VIEW.params">
            <el-row>
                <el-col :span="8">
                    <el-form-item label="用户名称" prop="username">
                        <el-input v-model="VIEW.params.username" placeholder="用户名称"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="用户密码" prop="password">
                        <el-input v-model="VIEW.params.password" type="password" placeholder="用户密码"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4" style="text-align: center">
                    <el-button type="primary" @click="authentication('VIEW.params')">登陆</el-button>
                </el-col>
                <el-col :span="4" style="text-align: center">
                    <el-button @click="clear('VIEW.params')">取消</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
    import {login} from '../mock/api';

    export default {
        components: {
            login
        },
        name: "LoginPage",
        data() {
            const params = {
                username: '',
                password: ''
            };
            const VIEW = {
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                    ]
                },
                params: params
            };
            return {
                VIEW: VIEW
            }
        },
        methods: {
            authentication(params) {
                console.log(this.VIEW.params);
                this.$refs[params].validate((valid) => {
                    if (valid) {
                        login(this.VIEW.params.username, this.VIEW.params.password).then(res => {
                            console.log(res);
                            if (res.code === 100001) {
                                this.$notify.success("登陆成功");
                            } else {
                                this.$notify.error({title: '错误', message: res.msg});
                            }
                        }).catch(err => {
                            this.$notify.error({title: '错误', message: err});
                        });
                    } else {
                        this.$notify.error({title: '错误', message: '请正确输入'});
                    }
                });
            },

            clear(params) {
                this.$refs[params].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>
