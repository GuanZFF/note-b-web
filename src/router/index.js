import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import AddRecycleCommodity from '../page/AddRecycleCommodity';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/add',
            name: 'addCommodity',
            component: AddRecycleCommodity
        }
    ]
})
