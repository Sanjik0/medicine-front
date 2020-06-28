<template>
  <div>
    <div class="content">
      <div class="md-layout">
        <div
          class="service-detail md-layout-item md-medium-size-100 md-xsmall-size-100"
        >
          <div class="service">
            <div class="card-img">
              <img :src="service.main.image" alt="" />
            </div>
            <div class="card-info">
              <h3>{{ service.main.name }}</h3>
              <p>{{ service.main.description }}</p>
            </div>
          </div>
          <div class="service-example">
            <h3>Example</h3>
            <p>{{ service.example.exampleDescription }}</p>
            <div class="example-images">
              <div
                class="example-img"
                v-for="(img, index) in service.example.exampleImages"
                :key="index"
              >
                <img :src="img.path" />
              </div>
            </div>
          </div>
          <div class="service-example">
            <h3>Functional</h3>

            <div class="x-ray-block">
              <vue-upload-multiple-image
                @upload-success="uploadImageSuccess"
                @before-remove="beforeRemove"
                @edit-image="editImage"
                :data-images="myImages"
                idUpload="myIdUpload"
                editUpload="myIdEdit"
                :dragText="'Нажмите для загрузки картинки'"
                :browseText="null"
                :primaryText="null"
                :markIsPrimaryText="null"
                :maxImage="1"
              ></vue-upload-multiple-image>

              <div v-if="neuronResults.length" class="result">
                <h3>Result</h3>
                <p v-for="(neuron, index) in neuronResults" :key="index">
                  {{ index + 1 }}) {{ neuron }}
                </p>
                <span
                  class="neuron-res"
                  :class="{ negative: result == 'Negative' }"
                >
                  {{ result }}
                </span>
              </div>
            </div>

            <md-button @click="sendImage" class="md-raised md-success"
              >check</md-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueUploadMultipleImage from "vue-upload-multiple-image";

export default {
  data: () => ({
    service: {
      main: {
        _id: 1,
        image:
          "https://www.belpressa.ru/media/filer_public/37/aa/37aab313-6a24-4d43-bf99-9975f7246d03/1cee90bfda11cd2c108f0d3749d1f5a4.jpg.640x480_q75_upscale.jpg",
        name: "Распознавание раковых клеток",
        description: "Распознавание раковых клеток при помощи нейронных сетей"
      },
      example: {
        exampleDescription: "Чтобы получить результаты, загрузите картинку",
        exampleImages: [
          {
            path:
              "https://www.belpressa.ru/media/filer_public/37/aa/37aab313-6a24-4d43-bf99-9975f7246d03/1cee90bfda11cd2c108f0d3749d1f5a4.jpg.640x480_q75_upscale.jpg"
          },
          {
            path:
              "https://www.belpressa.ru/media/filer_public/37/aa/37aab313-6a24-4d43-bf99-9975f7246d03/1cee90bfda11cd2c108f0d3749d1f5a4.jpg.640x480_q75_upscale.jpg"
          }
        ]
      }
    },
    myImages: [],
    neuronResults: [],
    result: "",
    functionalImage: {
      image: ""
    }
  }),
  components: {
    VueUploadMultipleImage
  },
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log("data", formData, index, fileList);
      this.myImages = fileList;
    },
    beforeRemove(index, done, fileList) {
      console.log("index", index, fileList);
      var r = confirm("remove image");
      if (r == true) {
        done();
      } else {
      }
    },
    editImage(formData, index, fileList) {
      console.log("edit data", formData, index, fileList);
    },
    async sendImage() {
      this.functionalImage.image = this.myImages[0].path;
      const functional = await this.$axios.post(
        `service/${this.$route.query.id}/${this.$route.query.id}`,
        this.functionalImage
      );
      this.neuronResults = functional.data.result;
      this.result =
        this.neuronResults[0] > this.neuronResults[1] ? "Negative" : "Positive";
    }
  },
  async created() {
    // const service = await this.$axios.get(`service/${this.$route.query.id}`);
    // this.service = service.data;
    // console.log(this.service);
  }
};
</script>

<style lang="scss" scoped>
.x-ray-block {
  display: flex;
  .result {
    margin-left: 2rem;
    padding: 1.25rem;
    background: #fff;
    width: 100%;
    max-width: 40rem;
    h3 {
      margin-top: 0;
      border-bottom: 1px solid #000;
    }
    .neuron-res {
      font-size: 2rem;
      font-weight: bolder;
      display: block;
      color: red;
      margin-top: 1rem;
      &.negative {
        color: green;
      }
    }
  }
}

.service-detail {
  padding: 0 2rem;
  .service {
    display: flex;
    .card-img {
      width: 50%;
    }
    .card-info {
      padding-left: 2rem;
      h3 {
        font-weight: bolder;
        color: #000;
        font-size: 1.5rem;
      }
    }
  }
  .service-example {
    h3 {
      color: #000;
    }
    .example-images {
      display: flex;
      margin-top: 1rem;
      .example-img {
        max-width: 10rem;
        margin-right: 1rem;
        padding: 1rem;
        background: #fff;
        border-radius: 0.5rem;
      }
    }
  }
}
</style>
