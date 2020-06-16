<template>
  <div class="wrapper">
    <div class="body" :style="{ 'padding-bottom': 100 / aspectRatio + '%' }">
      <div class="content" v-if="file.b64">
        <div class="result">
          <img class="result__img" :src="file.b64" alt="" />
        </div>
      </div>
      <div v-else class="main content">
        <Cropper
          classname="cropper"
          :src="img"
          ref="cropper"
          :stencil-props="{ aspectRatio }"
          :checkCrossOrigin="false"
        />
        <label v-if="!img" class="label">
          <div class="upload">Загрузить фото</div>
          <input
            @change="upload($event.target.files[0])"
            class="input"
            type="file"
            accept="image/*"
          />
        </label>
      </div>
    </div>
    <div v-if="file.b64" class="actions">
      <div @click="edit" class="actions__btn">
        редактировать
      </div>
    </div>
    <div v-if="img && !file.b64" class="actions">
      <div @click="cancel" class="actions__btn">
        отменить
      </div>
      <div @click="save" class="actions__btn">
        сохранить
      </div>
    </div>
  </div>
</template>

<script>
import { Cropper } from "vue-advanced-cropper";
import "vue-croppa/dist/vue-croppa.css";

const toBase64 = file =>
  new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
  });

const initialResult = {
  b64: "",
  file: null
};
export default {
  props: {
    file: Object,
    aspectRatio: Number,
    loading: Boolean,
    limit: Number
  },
  components: {
    Cropper
  },
  data: () => ({
    img: "",
    result: { ...initialResult },
    coordinates: null,
    message: ""
  }),
  methods: {
    async upload(file) {
      const SIZE_BY_MB = file.size / 1024 / 1024;
      if (SIZE_BY_MB > this.limit) {
        this.message = "Загрузите файл меньше ${this.limit} mb";
        return;
      }
      this.img = await toBase64(file);
    },
    save() {
      const { coordinates, canvas } = this.$refs.cropper.getResult();
      this.coordinates = coordinates;
      const result = {};
      result.b64 = canvas.toDataURL();
      canvas.toBlob(blob => {
        result.file = blob;
        this.$emit("update:file", result);
        this.$emit("save");
      });
    },
    cancel() {
      this.img = "";
      this.$emit("update:file", initialResult);
    },
    edit() {
      if (this.loading) return;
      if (!this.img) {
        this.img = this.file.b64;
      }
      this.$emit("update:file", initialResult);
      this.$nextTick(() => this.$refs.cropper.setCoordinates(this.coordinates));
    }
  }
};
</script>

<style lang="scss" scoped>
.body {
  position: relative;
  width: 100%;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.main {
  background: #d4d4d4;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #bbbbbb;
  }
}

.label {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.upload {
  margin: auto;
}

.input {
  display: none;
}

.actions {
  padding: 0.5rem 0;
  background: #2b454e;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  padding-right: 2rem;

  &__btn {
    margin: 0 1rem;
    cursor: pointer;
  }
}

.result {
  height: 100%;
  position: relative;

  &__img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    // object-fit: cover;
  }
}
</style>
