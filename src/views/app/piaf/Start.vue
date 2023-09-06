<template>
<div>
  <b-row>
    <b-colxx xxs="12">
      <piaf-breadcrumb :heading="$t('menu.start')"/>
      <div class="separator mb-5"></div>
    </b-colxx>
  </b-row>
  <b-row>
    <b-colxx xxs="12">
        <b-card class="mb-4" :title="$t('menu.start')" >
          {{ JSON.stringify(user) }}
        </b-card>
    </b-colxx>
  </b-row>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  data: () => ({
    user: {},
  }),
  mounted() {
    this.getUser()
  },
  methods: {
    ...mapActions(["signOut"]),
    async getUser() {
      try {
        const res = await this.$api({
          url: 'auth/me',
          method: 'post'
        })
        this.user = res.data
      } catch (err) {
        if ([401].includes(err.response.status)) {
          this.signOut().then(() => this.$router.push('/user/login'))
          
          this.$notify("error", "Unaunticated", err.response.data.status, {
            duration: 3000,
            permanent: false
          });
        }
        console.error(err.response)
      }
    }
  }
}
</script>
