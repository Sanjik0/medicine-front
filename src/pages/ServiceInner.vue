<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-60"
      >
        <div class="md-layout-item">
          <md-field>
            <label>Name</label>
            <md-input type="text" v-model="service.main.name"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item">
          <md-field>
            <label>Description</label>
            <md-textarea
              type="text"
              v-model="service.main.description"
            ></md-textarea>
          </md-field>
        </div>
        <app-cropper :file.sync="service.main.image" :aspectRatio="10 / 5" />
      </div>

      <div
        class="example-block md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-60"
      >
        <h3>Example</h3>

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
        ></vue-upload-multiple-image>
        <div class="md-layout-item">
          <md-field>
            <label>Description</label>
            <md-textarea
              type="text"
              v-model="service.example.exampleDescription"
            ></md-textarea>
          </md-field>
        </div>
        <div class="md-layout-item">
          <md-button @click="createService" class="md-raised md-success"
            >Create service</md-button
          >
        </div>
      </div>

      <div
        class="services-table md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-60"
        v-if="services.length"
      >
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>DELETE</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(serv, index) in services" :key="index">
              <td>{{ serv.main.main.name }}</td>
              <td>
                <button @click="removeServe(serv.main._id)">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import AppCropper from "@/components/AppCropper.vue";
import VueUploadMultipleImage from "vue-upload-multiple-image";

export default {
  components: {
    AppCropper,
    VueUploadMultipleImage
  },
  data: () => ({
    service: {
      main: {
        name: "",
        description: "",
        image: {
          file: null,
          b64: ""
        }
      },
      example: {
        exampleImages: [],
        exampleDescription: ""
      }
    },
    myImages: [],
    services: []
  }),
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log("data", formData, index, fileList);
      this.service.example.exampleImages = fileList;
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
    async createService() {
      this.service.main.image = this.service.main.image.b64;
      const service = await this.$axios.post("/service", this.service);
      console.log(service);
    },
    async removeServe(id) {
      const service = await this.$axios.delete(`service/${id}`);
      console.log(service);
    }
  },
  async created() {
    const services = await this.$axios.get("services");
    this.services = services.data;
  }
};
</script>

<style lang="scss" scoped>
.example-block {
  border-top: 1px solid #ccc;
  padding-top: 1rem;
  margin-top: 2rem;
  h3 {
    margin-top: 0;
    font-weight: bolder;
  }
}
.services-table {
  margin-top: 1.5rem;
  table {
    width: 100%;
    border: 1px solid #ccc;
    th,
    td {
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      padding: 0.5rem;
      &:last-child {
        border-right: 0;
        width: 30%;
        text-align: center;
      }
      button {
        background: red;
        border: 0;
        padding: 0.5rem 1rem;
        border-radius: 0.3125rem;
        color: #fff;
        cursor: pointer;
      }
    }
    tr {
      &:last-child {
        td {
          border-bottom: 0;
        }
      }
    }
  }
}
</style>
