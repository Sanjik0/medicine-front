<template>
  <div>
    <div class="auth-form-wrapper">
      <md-card-content>
        <div class="md-layout register-form">
          <h3>REGISTRATION</h3>
          <div class="md-layout-item">
            <md-field>
              <label>Email</label>
              <md-input v-model="registerData.email" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item">
            <md-field>
              <label>Name</label>
              <md-input v-model="registerData.name" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item">
            <md-field>
              <label>Password</label>
              <md-input
                v-model="registerData.password"
                type="password"
              ></md-input>
            </md-field>
          </div>
          <div class="md-layout-item text-center">
            <md-button @click="register" class="md-raised md-success"
              >Register</md-button
            >
          </div>
        </div>
      </md-card-content>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    registerData: {
      email: "",
      name: "",
      password: ""
    }
  }),
  methods: {
    register() {
      const registerData = this.$axios.post("user/register", this.registerData);
      console.log(registerData);
    }
  }
};
</script>

<style lang="scss" scoped>
.auth-form-wrapper {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  h3 {
    text-align: center;
  }
  .register-form {
    max-width: 35rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
}
</style>
