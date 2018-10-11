import Vue from 'vue'
import Router from 'vue-router'
import lunbo from '@/components/lunbo'
import course from '@/components/navbar/course'
import gongkaike from '@/components/navbar/gongkaike'
import neibujiaocai from '@/components/navbar/neibujiaocai'
import oldboy from '@/components/navbar/oldboy'
import qingke from '@/components/navbar/qingke'
import xuewei from '@/components/navbar/xuewei'
import zhineng from '@/components/navbar/zhineng'
import login from '@/components/login'
import course_detail from "@/components/course_detail"
import my_shopping_car from "@/components/usercenter/my_shopping_car"


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: lunbo
    },
    {
      path: "/course",
      component: course
    },
    {
      path: "/qingke",
      component: qingke
    },
    {
      path: "/xuewei",
      component: xuewei
    },
    {
      path: "/zhineng",
      component: zhineng
    },
    {
      path: "/gongkaike",
      component: gongkaike
    },
    {
      path: "/neibujiaocai",
      component: neibujiaocai
    },
    {
      path: "/oldboy",
      component: oldboy
    },
    {
      path: "/login",
      component: login,
    },
    {
      path: "/course_detail/:id",
      name: "detail",
      component: course_detail
    },
    {
      path: "/shopping_car",
      component: my_shopping_car,
      meta:{
        required_login:true
      }
    }
  ],
})

