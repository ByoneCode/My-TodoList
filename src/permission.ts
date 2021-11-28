import router from '/@/router'
import store from '/@/store'
import { getUserInfo } from '/@/api/user'

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {

  const hasToken = localStorage.getItem('token')
  
  if (hasToken) {
    if(to.path === '/login') {
      next({ path: '/' })
    }else{
      const isNull = Object.keys(store.state.userInfo).length
      if(isNull > 0){
        next()
      }else{
        try {
          const { data } = await getUserInfo()
          store.commit('setUserInfo',data.items)
          next()
        } catch (error ) {
          localStorage.removeItem('token');
          console.log(error || 'Token Error');
          next('/login')
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next('/login')
    }
  }
})