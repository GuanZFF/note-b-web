<template>
    <div id="app">
        <el-container>
            <el-aside width="15%">
                <el-button id="header">商品循环系统</el-button>
                <el-menu background-color="#333" text-color="#fff" active-text-color="#814c43" @select="menuSelect">
                    <template v-for="item in ViewData.route">
                        <el-menu-item :key="item.index" :index="item.index">
                            <i class="el-icon-menu"></i>
                            <span>{{item.name}}</span>
                        </el-menu-item>
                    </template>
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
            const route = [
                {index: 'login', name: '登陆', link: '/login'},
                {index: 'commodityList', name: '商品列表', link: '/commodityList'},
                {index: 'insert', name: '插入商品', link: '/insert'},
                {index: 'recycleCollectorList', name: '收集人列表', link: '/recycleCollectorList'},
                {index: 'addCollector', name: '添加收集人', link: '/addCollector'},
                {index: 'commodityTypeList', name: '商品类型列表', link: '/commodityTypeList'},
                {index: 'addCommodityType', name: '添加商品类型', link: '/addCommodityType'},
            ];
            const ViewData = {
                route: route
            };
            return {
                ViewData: ViewData
            };
        },
        methods: {
            menuSelect(index) {
                this.ViewData.route.forEach(item => {
                    if (item.index === index) {
                        this.$router.push({path: item.link});
                    }
                });
            }
        }
    };
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
        margin: 15px 15px 0 15px;
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
