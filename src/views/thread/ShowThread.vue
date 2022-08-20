<template>
  <v-container>
    <v-row justify="center" content="center">
      <v-col cols="12" md="6">

        <v-card>
          <v-card-title>
            <router-link to="/thread/laravel+slug" class="text-decoration-none black--text">
              <h4>Laravel Error</h4>
            </router-link>
          </v-card-title>

          <v-card-text>
            <v-row>
              <v-col>
                <p>Ehsan Zarei</p>
              </v-col>
              <v-col>
                <p class="text-right">11/11/76</p>
              </v-col>
            </v-row>
            <p>this thread very good this thread very good this thread very good this thread very good this thread very
              good this thread very good this thread very good this thread very goodthis thread very good this thread
              very good this thread very good this thread very good this thread very good this thread very good this
              thread very good this thread very good</p>
          </v-card-text>
        </v-card>
        <br>
        <v-row>
          <v-col>
            <h2>Replies:</h2>
          </v-col>
          <v-col class="text-right">
            <v-btn ripple to="#" color="orange" small>
              Reply
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title>
                <v-row>
                  <v-avatar color="teal" size="36" class="ma-7">
                    <span class="white--text headline">Ez</span>
                  </v-avatar>
                  <v-col class="grey--text">
                    <h6>Ehsan Zarei <br>25/4/1400 20:20</h6>
                  </v-col>
                  <v-card-text>
                    <p>
                      this site created with api laravel and vuetify
                      this site created with api laravel and vuetify
                      this site created with api laravel and vuetify
                    </p>
                  </v-card-text>

                </v-row>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>

      </v-col>
    </v-row>


  </v-container>
</template>

<script>
export default {
  name: "ShowThread"
}
</script>

<style scoped>

</style>