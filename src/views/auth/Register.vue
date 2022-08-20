<template>
  <v-container>
    <!--    <v-layout row wrap>-->
    <v-flex xs12 sm8 offset-sm2 align-center justify-center>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Sign up</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-container>
            <form>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                      label="Name"
                      name="name"
                      type="text"
                      v-model="name"
                      prepend-icon="mdi-account"
                      :error="errors.name"
                      :error-messages="errors.name"
                      required
                  >
                  </v-text-field>

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
                      prepend-icon="mdi-lock"
                      :error="errors.password"
                      :error-messages="errors.password"
                      required

                  >
                  </v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                </v-flex>
              </v-layout>
              <v-layout row xs12>
                <v-flex>
                  <v-btn flat block color="primary"
                         @click.prevent="SendRegisterRequest">
                    Sign up
                  </v-btn>
                </v-flex>
              </v-layout>
            </form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
    <!--    </v-layout>-->
  </v-container>
</template>
<script>
import {RegisterRequest} from "@/requests/auth";

export default {
  name: "Register",

  data: () => ({
    'name': null,
    'email': null,
    'password': null,
    errors:{
      name: null,
      email: null,
      password: null,
    }
  }),

  methods: {
    SendRegisterRequest() {
      const formData = {
        'name': this.name,
        'email': this.email,
        'password': this.password
      }
      RegisterRequest(formData).then(res => {
        this.$router.push('/login');
      }).catch(err => {
        if (err.response.status === 422) {
          this.errors = err.response.data.errors;
        }
      })
    }
  }
}
</script>

<style scoped>

</style>