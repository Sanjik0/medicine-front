<template>
  <div class="content">
    <div class="md-layout">
      <router-link
        class="service-card md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-25"
        v-for="(serv, index) in services"
        :key="index"
        tag="div"
        :to="'service-detail?id=' + serv.main._id"
      >
        <div class="card-img">
          <img :src="serv.main.main.image" alt="" />
        </div>
        <h4>{{ serv.main.main.name }}</h4>
        <p>{{ serv.main.main.description }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    services: []
  }),
  async created() {
    if (!sessionStorage.token) {
      this.$router.push("/login");
    }

    const services = await this.$axios.get("services");
    this.services = services.data;
  }
};
</script>

<style lang="scss" scoped>
.service-card {
  cursor: pointer;
  background: #fff;
  padding: 1.25rem;
  border-radius: 0.5rem;
  margin-left: 1.5rem;
  transition: 0.5s ease-in-out;
  h4 {
    font-weight: bolder;
  }
  p {
    margin-bottom: 0;
  }
  &:hover {
    -webkit-box-shadow: 0px 0px 14px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 14px -5px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 14px -5px rgba(0, 0, 0, 0.75);
    transition: 0.5s ease-in-out;
  }
}
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
      background: #2cc990;
      &:hover {
        transition: 0.3s ease-in-out;
        background: #fff;
        border: 0.0625rem solid #2cc990;
        color: #000;
      }
    }
  }
}
</style>
