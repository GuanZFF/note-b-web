<template>
    <div id="app">
        <el-container>
            <el-aside width="15%">
                <el-button id="header">商品循环系统</el-button>
                <el-menu background-color="#333" text-color="#fff" active-text-color="#814c43">
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <span>商品列表</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span>用户列表</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-menu"></i>
                        <span>系统设置</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-header>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            const ViewData = {};
            return ViewData;
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f2f2f2;
        height: 100%;
    }

    #header {
        margin: 15px 0;
        background-color: hsla(0,0%,100%,.4);
        color: #fff;
        border: 0;
        padding: 12px 40px;
    }

    .el-container {
        height: 100%;
    }

    .el-aside {
        text-align: center;
        background-color: #333;
    }

    .el-header {
        background-color: white;
        text-align: center;
        height: fit-content;
        padding-top: 25px;
    }

    .el-main {
        margin: 15px;
        background-color: white;
    }

    .el-menu {
        border: 0;
    }

    .el-menu-item {
        text-align: left;
        font-size: 15px;
    }
</style>
