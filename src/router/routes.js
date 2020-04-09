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
// import IconsPage from '@/pages/Icons/Icons';
import NotificationsPage from '@/pages/Notifications/Notifications';


// Dashboard

// Inventory Section
import Inventory from '@/pages/Dashboard/Inventory/Inventory';
import AddProduct from '@/pages/Dashboard/Inventory/components/AddProduct'
import ProductsList from '../pages/Dashboard/Inventory/components/ProductsList'
import CategoriesList from '../pages/Dashboard/Inventory/components/CategoriesList'
import AddCategory from '../pages/Dashboard/Inventory/components/AddCategory'


// Order Management
import OrderManagement from '../pages/Dashboard/OrderManagement/OrderManagement';
import AddOrder from '../pages/Dashboard/OrderManagement/components/AddOrder';
import OrdersList from '../pages/Dashboard/OrderManagement/components/OrdersList';
import Shipping from '../pages/Dashboard/OrderManagement/components/Shipping';


// Customers
import Customers from '../pages/Dashboard/Customers/Customers'
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
        name: 'Dashboard',
        component: AnalyticsPage,
      },
      {
        path: 'inventory',
        name: 'Inventory',
        component: Inventory,
        children: [
          {
            path: 'addnewproduct',
            name: 'AddProduct',
            component: AddProduct,
          },
          {
            path: 'productslist',
            name: 'ProductsList',
            component: ProductsList,
          },
          {
            path: 'addcategory',
            name: 'Add Category',
            component: AddCategory,
          },
          {
            path: 'categorieslist',
            name: 'Categories List',
            component: CategoriesList,
          },
        ]
      },
      {
        path: 'ordermanagement',
        name: 'Order Managment',
        component: OrderManagement,
        children: [
          {
            path: 'addneworder',
            name: 'Add Order',
            component: AddOrder,
          },
          {
            path: 'orderslist',
            name: 'Orders List',
            component: OrdersList,
          },
          {
            path: 'shippingpage',
            name: 'Shipping Page',
            component: Shipping,
          },
        ]
      },
      {
        path: 'customers',
        name: 'Customers Page',
        component: Customers,
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
