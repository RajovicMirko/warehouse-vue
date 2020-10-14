import Error404 from '../pages/Error404'
import SignIn from '../pages/SignIn'
import Layout from 'layouts/MainLayout'
import Home from '../pages'
import Warehouses from '../pages/Warehouse/Warehouses'
import Stocks from '../pages/Stock/Stocks'
import Users from '../pages/User/Users'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: 'signin', component: SignIn },
      { path: '', component: Home },
      { path: 'warehouses', component: Warehouses },
      { path: 'stocks', component: Stocks },
      { path: 'users', component: Users }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: Error404
  }
]

export default routes
