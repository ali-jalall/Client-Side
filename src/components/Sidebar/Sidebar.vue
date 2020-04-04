<template>
  <nav
    :class="{ sidebar: true, sidebarStatic, sidebarOpened }"
    @mouseenter="sidebarMouseEnter"
    @mouseleave="sidebarMouseLeave"
  >
    <header class="logo">
      <router-link to="/app">
        <span class="text-warning">Motu</span> App
      </router-link>
    </header>
    <ul class="nav">
      <NavLink
        :activeItem="activeItem"
        header="Dashboard"
        link="/app/dashboard"
        iconName="flaticon-home"
        index="dashboard"
        isHeader
      />
      <NavLink
        :activeItem="activeItem"
        header="Inventory"
        link="/app/inventory"
        iconName="flaticon-folder-19"
        index="inventory"
        isHeader
        :childrenLinks="[
          { header: 'Add New Product', link: '/app/inventory/addnewproduct' },
          { header: 'Products List', link: '/app/inventory/productslist' },
          { header: 'Add New Category', link: '/app/inventory/addcategory' },
          { header: 'Categories List', link: '/app/inventory/categorieslist' }
        ]"
      />
      <NavLink
        :activeItem="activeItem"
        header="Order Management"
        link="/app/ordermanagment"
        iconName="flaticon-list"
        index="ordermanagment"
        isHeader
        :childrenLinks="[
          { header: 'Add New Order', link: '/app/ordermanagment/addneworder' },
          { header: 'Orders List', link: '/app/ordermanagment/orderslist' },
          { header: 'Shipping Page', link: '/app/ordermanagment/shippingpage' },
        ]"
      />
      <NavLink
        :activeItem="activeItem"
        header="Customers"
        link="/app/customers"
        iconName="flaticon-users"
        index="customers"
        isHeader
        :childrenLinks="[
          { header: 'Add New Customer', link: '/app/customers/addnewcustomer' },
          { header: 'Customers List', link: '/app/customers/customerslist' },
          { header: 'Customers Group', link: '/app/customers/cutomersgroup' },
        ]"
      />
    </ul>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex";
import isScreen from "../../core/screenHelper.js";
import NavLink from "./NavLink/NavLink";

export default {
  name: "Sidebar",
  components: { NavLink },
  data() {
    return {
      alerts: [
        {
          id: 0,
          title: "Sales Report",
          value: 15,
          footer: "Calculating x-axis bias... 65%",
          color: "info"
        },
        {
          id: 1,
          title: "Personal Responsibility",
          value: 20,
          footer: "Provide required notes",
          color: "danger"
        }
      ]
    };
  },
  methods: {
    ...mapActions("layout", ["changeSidebarActive", "switchSidebar"]),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split("/");
      paths.pop();
      this.changeSidebarActive(paths.join("/"));
    },
    sidebarMouseEnter() {
      if (!this.sidebarStatic && (isScreen("lg") || isScreen("xl"))) {
        this.switchSidebar(false);
        this.setActiveByRoute();
      }
    },
    sidebarMouseLeave() {
      if (!this.sidebarStatic && (isScreen("lg") || isScreen("xl"))) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      }
    }
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState("layout", {
      sidebarStatic: state => state.sidebarStatic,
      sidebarOpened: state => !state.sidebarClose,
      activeItem: state => state.sidebarActiveElement
    })
  }
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped />
