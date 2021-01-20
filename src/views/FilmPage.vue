<template>
  <div class="container">
    <div class="back-to" v-on:click="goBack">
      <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.67 1.86998L9.9 0.0999756L0 9.99998L9.9 19.9L11.67 18.13L3.54 9.99998L11.67 1.86998Z" fill="#FF5252" fill-opacity="0.98"/>
       </svg>
      <span class="back-to__text">Назад к списку</span>
    </div>
    <hr class="line" />
    <Loader v-if="loading" />
    <Card v-bind:post="getById($route.params.id)" v-bind:isBoxShadow="false"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Card from "../components/Card.vue";
import Loader from "../components/Loader.vue";

export default {
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapGetters(["getById", "allPosts"]),
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    ...mapActions(["fetchPosts"]),
    async fetchData() {
      this.fetchPosts();
      this.loading = false;
    },
    // async fetchDataById() {
    //   this.fetchPost(this.$route.params.id);
    //   this.loading = false;
    // },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
  },
  components: {
    Card,
    Loader,
  },
};
</script>

<style lang="scss">
@import "../styles/base.scss";

.container {
  max-width: $maxWidth;
}

.back-to {
  color: $light-red;
  text-decoration: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.back-to__text {
  margin-left: 21px;
  display: inline-block;
  line-height: 18px;
  border-bottom: 1px solid;
}

</style>