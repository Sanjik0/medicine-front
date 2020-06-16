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
          <p
            v-if="isActive"
            style="text-align: center; font-size: 1rem; font-weight: bolder"
          >
            Подтвердите электронную почту
          </p>
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
    },
    isActive: false
  }),
  methods: {
    async login() {
      const loginData = await this.$axios.post("user/login", this.loginData);
      sessionStorage.token = loginData.data.token;

      if (loginData.data.active == true) {
        this.$router.push("/dashboard");
      } else {
        this.isActive = true;
      }
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
