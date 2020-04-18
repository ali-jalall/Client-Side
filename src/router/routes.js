import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Product from "@/pages/Product";
import Signup from "@/pages/Signup";
import Login from "@/pages/Login";
import Cart from "@/components/Cart";
import Layout from '@/components/Layout/Layout'
import Contact from '@/pages/Contact';
import About from '@/pages/About';
import Checkout from '@/pages/Checkout';
import ProfilePage from '@/pages/ProfilePage';

// Main
import AnalyticsPage from '@/pages/Dashboard/Dashboard';



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
import Order from '../pages/Dashboard/OrderManagement/Order';


// Customers
import Customers from '../pages/Dashboard/Customers/Customers'
import AddCustomer from '../pages/Dashboard/Customers/components/AddCustomers'
import CustomersList from '../pages/Dashboard/Customers/components/CustomersList'
import CustomersGroup from '../pages/Dashboard/Customers/components/CustomersGroup'
import Customer from '../pages/Dashboard/Customers/Customer'

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
    path: "/signup",
    name: "Signup",
    component: Signup,
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
    path: "/u/:id",
    name: "UserProfile",
    component: ProfilePage
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },

  // Admin Dashboard
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
          {
            path: ':id',
            name: 'Order',
            component: Order
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
            component: AddCustomer,
          },
          {
            path: 'customerslist',
            name: 'Customers List',
            component: CustomersList,
          },
          {
            path: 'cutomersgroup',
            name: 'Customers Group',
            component: CustomersGroup,
          },
          {
            path: ':id',
            name: 'Customers Profile',
            component: Customer,
          },
        ]
      },
    ],
  },
];

export default routes;
