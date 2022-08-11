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
                      >
                    </v-text-field>

                    <v-text-field
                      label="Email"
                        name="email"
                        type="email"
                      >
                    </v-text-field>

                    <v-text-field
                      label="Password"
                        name="password"
                        type="password"

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
                           @click.prevent="validateBeforeSubmit">
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
export default {
  name: "Register"
}
</script>

<style scoped>

</style>