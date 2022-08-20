<template>
  <v-container>
    <v-row justify="center" content="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>
            <h4>Create New Thread</h4>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                  label="title"
                  name="title"
                  type="text"
                  outlined
              >
              </v-text-field>

              <v-textarea
                  label="text"
                  name="body"
                  type="text"
                  value=""
                  outlined
              >
              </v-textarea>

              <v-select
                  v-model="formData.channel"
                  :items="channels"
                  item-text="name"
                  item-value="id"
                  label="channel"
                  outlined
              >
              </v-select>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn ripple color="blue" dark class="ml-2">
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {channelsListRequest} from "@/requests/channels";

export default {
  name: "CreateThread",
  data: () => ({
    formData: {
      title: null,
      content: null,
      channel: null,
    },
    channels: null,
  }),

  methods: {
    fetchChannelsList() {
      channelsListRequest().then(res => {
        this.channels = res.data
      })
    }
  },
  mounted() {
    this.fetchChannelsList();
  },
}
</script>

<style scoped>

</style>