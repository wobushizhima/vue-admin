import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import ue from './views/editor/editor';

import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '学术成果列表',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            // { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: '学术成果列表' },

        ]
    },
    {
        path: '/',
        component: Home,
        name: '关于我们',
        iconCls: 'fa fa-id-card-o',
        children: [
            {path: '/editor', component: ue, name: '内容', class: 'fa-plug'}
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;