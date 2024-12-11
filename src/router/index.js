import Vue from 'vue';
import VueRouter from 'vue-router';
import PeopleList from '../components/PeopleList.vue';
import PeopleDetail from '../components/PeopleDetail.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'people-list',
            component: PeopleList,
        },
        {
            path: '/people/:id',
            name: 'people-detail',
            component: PeopleDetail,
            props: true,
        },
    ],
});
