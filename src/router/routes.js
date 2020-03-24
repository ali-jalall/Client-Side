import Home from '@/pages/Home';
import Products from '@/pages/Products';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
]

export default routes;