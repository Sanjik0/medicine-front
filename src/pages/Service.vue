<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <router-link to="/instructions" class="service-item" tag="div"
          >Instructions</router-link
        >
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <router-link to="/example" class="service-item" tag="div"
          >Example</router-link
        >
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <router-link to="/service-inner" class="service-item" tag="div"
          >Service</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.md-layout {
  div {
    .service-item {
      cursor: pointer;
      min-height: 8rem;
      border-radius: 0.625rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 2rem;
      font-weight: bolder;
    }
    &:nth-child(1) {
      .service-item {
        background: #2cc990;
        &:hover {
          transition: 0.3s ease-in-out;
          background: #fff;
          border: 0.0625rem solid #2cc990;
          color: #000;
        }
      }
    }
    &:nth-child(2) {
      .service-item {
        background: #9684a3;
        &:hover {
          transition: 0.3s ease-in-out;
          background: #fff;
          border: 0.0625rem solid #9684a3;
          color: #000;
        }
      }
    }
    &:nth-child(3) {
      .service-item {
        background: #444b54;
        &:hover {
          transition: 0.3s ease-in-out;
          background: #fff;
          border: 0.0625rem solid #444b54;
          color: #000;
        }
      }
    }
  }
}
</style>
