import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import EmptyLayout from "@/pages/Layout/EmptyLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Service from "@/pages/Service.vue";
import Register from "@/pages/Register.vue";
import Login from "@/pages/Login.vue";
import ServiceInner from "@/pages/ServiceInner.vue";
import ServiceDetail from "@/pages/ServiceDetail.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "service",
        name: "Service",
        component: Service
      },
      {
        path: "service-inner",
        name: "Service",
        component: ServiceInner
      },
      {
        path: "service-detail",
        name: "Service more",
        component: ServiceDetail
      }
    ]
  },
  {
    path: "/",
    component: EmptyLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "register",
        name: "Register",
        component: Register
      },
      {
        path: "login",
        name: "Login",
        component: Login
      }
    ]
  }
];

export default routes;
