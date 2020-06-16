<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <p>Profile</p>
      </sidebar-link>
      <sidebar-link to="/service">
        <md-icon>settings</md-icon>
        <p>Services</p>
      </sidebar-link>
      <sidebar-link to="/service-inner">
        <md-icon>add</md-icon>
        <p>Add Service</p>
      </sidebar-link>
      <button class="exit-btn" @click="exit">
        Exit
      </button>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg")
    };
  },
  methods: {
    exit() {
      sessionStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.exit-btn {
  width: 100%;
  max-width: 12rem;
  margin: 0 auto;
  cursor: pointer;
  padding: 0.7rem 1rem;
  border-radius: 0.25rem;
  border: 0;
  background: red;
  color: #fff;
  margin-top: 0.7rem;
  &:hover {
    transition: 0.5s ease-in-out;
    background: #fff;
    color: red;
  }
}
</style>
