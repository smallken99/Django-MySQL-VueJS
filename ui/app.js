const routes=[
    {path:'/home',component:home},
    {path:'/employee',component:employee},
    {path:'/department',component:department}
]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })

// 5. Create and mount the root instance.
const app = Vue.createApp({})

app.use(router)

app.mount('#app')
