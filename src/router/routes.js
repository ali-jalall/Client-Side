import Home from '@/pages/Home';
import Products from '@/pages/Products';
import Product from '@/pages/Product';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
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