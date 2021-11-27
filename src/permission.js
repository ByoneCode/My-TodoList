import {useRouter} from 'router'

const router = useRouter()
const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {

  const hasToken = localStorage.getItem('token')

  if (hasToken) {
    if (to.path === '/login') {
      next('/')
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login`)
    }
  }
})