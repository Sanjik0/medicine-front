<template>
  <div class="sidebar" :data-color="sidebarItemColor" :style="sidebarStyle">
    <div class="logo">
      <a href="#" class="simple-text logo-mini">
        <div class="logo-img">
          <i
            style="color: #000 !important; margin-top: 0.32rem;"
            class="material-icons"
            >adb</i
          >
        </div>
      </a>

      <a target="_blank" class="simple-text logo-normal">
        {{ title }}
      </a>
    </div>
    <div class="sidebar-wrapper">
      <slot name="content"></slot>
      <md-list class="nav">
        <slot>
          <sidebar-link
            v-for="(link, index) in sidebarLinks"
            :key="link.name + index"
            :to="link.path"
            :link="link"
          >
          </sidebar-link>
        </slot>
      </md-list>
    </div>
  </div>
</template>
<script>
import SidebarLink from "./SidebarLink.vue";

export default {
  components: {
    SidebarLink
  },
  props: {
    title: {
      type: String,
      default: "Deka Front"
    },
    imgLogo: {
      type: String,
      default: require("@/assets/img/vue-logo.png")
    },
    sidebarItemColor: {
      type: String,
      default: "green",
      validator: value => {
        let acceptedValues = ["", "purple", "blue", "green", "orange", "red"];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    sidebarLinks: {
      type: Array,
      default: () => []
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  provide() {
    return {
      autoClose: this.autoClose
    };
  },
  computed: {
    sidebarStyle() {
      return {
        backgroundColor: "#2c3e50"
      };
    }
  }
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 991px) {
  .nav-mobile-menu {
    display: none;
  }
}
</style>
