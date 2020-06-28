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
          <img :src="serv.main.image" alt="" />
        </div>
        <h4>{{ serv.main.name }}</h4>
        <p>{{ serv.main.description }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    services: [
      {
        main: {
          _id: 1,
          image:
            "https://www.belpressa.ru/media/filer_public/37/aa/37aab313-6a24-4d43-bf99-9975f7246d03/1cee90bfda11cd2c108f0d3749d1f5a4.jpg.640x480_q75_upscale.jpg",
          name: "Распознавание раковых клеток",
          description: "Распознавание раковых клеток при помощи нейронных сетей"
        }
      },
      {
        main: {
          _id: 1,
          image:
            "https://www.belpressa.ru/media/filer_public/37/aa/37aab313-6a24-4d43-bf99-9975f7246d03/1cee90bfda11cd2c108f0d3749d1f5a4.jpg.640x480_q75_upscale.jpg",
          name: "Распознавание раковых клеток",
          description: "Распознавание раковых клеток при помощи нейронных сетей"
        }
      },
      {
        main: {
          _id: 1,
          image:
            "https://www.belpressa.ru/media/filer_public/37/aa/37aab313-6a24-4d43-bf99-9975f7246d03/1cee90bfda11cd2c108f0d3749d1f5a4.jpg.640x480_q75_upscale.jpg",
          name: "Распознавание раковых клеток",
          description: "Распознавание раковых клеток при помощи нейронных сетей"
        }
      }
    ]
  }),
  async created() {}
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
