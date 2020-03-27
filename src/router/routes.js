import Home from '@/pages/Home';
import Products from '@/pages/Products';
import Product from '@/pages/Product';
import Signup from '@/pages/Signup';
import Login from '@/pages/Login';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      guest: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: ':category',
        name: 'Category',
        component: Products
      }
    ]
  },
  {
    path: '/p/:id',
    name: 'Product',
    component: Product
  }
]

export default routes;