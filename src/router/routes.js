import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Product from "@/pages/Product";
import Signup from "@/pages/Signup";
import Login from "@/pages/Login";
import Cart from "@/components/Cart";
import Layout from '@/components/Layout/Layout'
import Contact from '@/pages/Contact';
import About from '@/pages/About';

import TypographyPage from '@/pages/Typography/Typography';

// Tables
import TablesBasicPage from '@/pages/Tables/Basic';

// Main
import AnalyticsPage from '@/pages/Dashboard/Dashboard';


// Ui
import IconsPage from '@/pages/Icons/Icons';
import NotificationsPage from '@/pages/Notifications/Notifications';


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: {
      guest: true
    }
  },
  {
    path: "/contact",
    name: "Contact Us",
    component: Contact,
    meta: {
      guest: true
    }
  },
  {
    path: "/about",
    name: "About Us",
    component: About,
    meta: {
      guest: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: ":category",
        name: "Category",
        component: Products
      }
    ]
  },
  {
    path: "/p/:id",
    name: "Product",
    component: Product
  },
  {
    path: '/app',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'AnalyticsPage',
        component: AnalyticsPage,
      },
      {
        path: 'inventory',
        name: 'Inventory',
        children: [
          {
            path: 'addnewproduct',
            name: 'Add Product',
            component: TypographyPage,
          },
          {
            path: 'productslist',
            name: 'Products List',
            component: TypographyPage,
          },
          {
            path: 'addcategory',
            name: 'Add Category',
            component: TypographyPage,
          },
          {
            path: 'categorieslist',
            name: 'Categories List',
            component: TypographyPage,
          },
        ]
      },
      {
        path: 'ordermanagment',
        name: 'Order Managment',
        component: TypographyPage,
        children: [
          {
            path: 'addneworder',
            name: 'Add Order',
            component: TypographyPage,
          },
          {
            path: 'orderslist',
            name: 'Orders List',
            component: TypographyPage,
          },
          {
            path: 'shippingpage',
            name: 'Shipping Page',
            component: TypographyPage,
          },
        ]
      },
      {
        path: 'customers',
        name: 'Customers Page',
        component: IconsPage,
        children: [
          {
            path: 'addnewcustomer',
            name: 'Add Customer',
            component: TypographyPage,
          },
          {
            path: 'customerslist',
            name: 'Customers List',
            component: TypographyPage,
          },
          {
            path: 'cutomersgroup',
            name: 'Customers Group',
            component: TypographyPage,
          },
        ]
      },
      {
        path: 'notifications',
        name: 'NotificationsPage',
        component: NotificationsPage,
      },
      {
        path: 'tables',
        name: 'TablesBasicPage',
        component: TablesBasicPage,
      }
    ],
  },
];

export default routes;
