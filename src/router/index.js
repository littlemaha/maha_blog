import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home.vue');
const EditBlog = () => import('../views/EditBlog.vue');

Vue.use(VueRouter);

const routes =[
    {
       path: '',
       redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
	{
	  path: '/editblog',
	  component: EditBlog
	},
	
]
	
	const router = new VueRouter({
	  routes,
	  mode:'history'
	})
	
	export default router