<template>
  <v-container>
    <!--    <v-layout row wrap>-->
    <v-flex xs12 sm8 offset-sm2 align-center justify-center>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Sign in</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-container>

            <form>
              <v-layout row>
                <v-flex xs12>

                  <v-text-field
                      label="Email"
                      name="email"
                      type="email"
                      v-model="email"
                      prepend-icon="mdi-email"
                      :error="errors.email"
                      :error-messages="errors.email"
                      required
                  >
                  </v-text-field>

                  <v-text-field
                      label="Password"
                      name="password"
                      type="password"
                      v-model="password"
                      :error="errors.password"
                      :error-messages="errors.password"
                      prepend-icon="mdi-lock"
                      required
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                </v-flex>
              </v-layout>
              <v-layout row md6>
                <v-flex>
                  <v-btn flat block color="blue" class="text-decoration-none white--text"
                         @click.prevent="SendLoginRequest">
                    Sign in
                  </v-btn>
                  <br>
                  <v-btn color="#116635">
                    <router-link to="/register" class="text-decoration-none white--text">
                      Sign up
                    </router-link>
                  </v-btn>
                </v-flex>
              </v-layout>
            </form>
              <div class="text-center mt-3" v-show="isLoading">
                <v-progress-circular
                    indeterminate
                    color="primary"
                ></v-progress-circular>
              </div>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
    <!--    </v-layout>-->
  </v-container>
</template>
<script>

import {LoginRequest} from "@/requests/auth";

export default {
  name: "login",
  data: () => ({
    isLoading: false,
    email: null,
    password: null,
    errors: {
      email: null,
      password: null,
    }
  }),

  methods: {
    SendLoginRequest() {
      this.isLoading = true;
      const formData = {
        'email': this.email,
        'password': this.password
      }
      LoginRequest(formData).then(res=>{
          this.isLoading=false;
          localStorage.setItem('isAuth' , 'true');
          this.$router.push('/');
      }).catch(err => {
        if (err.response.status === 422) {
          this.errors = err.response.data.errors;
          this.isLoading=false;
        }
      })
    }
  }
}


</script>


<style scoped>

</style>