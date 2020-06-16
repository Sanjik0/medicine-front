<template>
  <div>
    <div class="auth-form-wrapper">
      <md-card-content>
        <div class="md-layout register-form">
          <h3>Sign In</h3>
          <div class="md-layout-item">
            <md-field>
              <label>Email</label>
              <md-input v-model="loginData.email" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item">
            <md-field>
              <label>Password</label>
              <md-input v-model="loginData.password" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item text-center">
            <md-button @click="login" class="md-raised md-success"
              >Login</md-button
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
    loginData: {
      email: "",
      password: ""
    }
  }),
  methods: {
    login() {
      const loginData = this.$axios.post("user/login", this.loginData);
      console.log(loginData);
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
