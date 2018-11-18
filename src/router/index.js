import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import AddRecycleCommodity from '../page/AddRecycleCommodity';
import RecycleCommodityList from '../page/RecycleCommodityList';
import RecycleCollectorList from '../page/RecycleCollectorList';
import AddRecycleCollector from '../page/AddRecycleCollector';
import CommodityTypeList from '../page/CommodityTypeList';
import AddCommodityType from '../page/AddCommodityType';
import LoginPage from '../page/LoginPage';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'LoginPage',
            component: LoginPage
        },
        {
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/insert',
            name: 'AddRecycleCommodity',
            component: AddRecycleCommodity
        },
        {
            path: '/commodityList',
            name: 'RecycleCommodityList',
            component: RecycleCommodityList
        },
        {
            path: '/addCollector',
            name: 'AddRecycleCollector',
            component: AddRecycleCollector
        },
        {
            path: '/recycleCollectorList',
            name: 'RecycleCollectorList',
            component: RecycleCollectorList
        },
        {
            path: '/commodityTypeList',
            name: 'CommodityTypeList',
            component: CommodityTypeList
        },
        {
            path: '/addCommodityType',
            name: 'AddCommodityType',
            component: AddCommodityType
        }
    ]
})
