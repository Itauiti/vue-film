<template>
  <div class="container">
    <h2 class="title">Фильмы</h2>
    <input
      id="filteredByName"
      class="radio"
      type="radio"
      name="filteredByName"
      value="filteredByName"
      v-model="filter"
    />
    <label class="label" for="filteredByName">Отсортировать по названию</label>
    <input
      id="filteredByYear"
      class="radio"
      type="radio"
      name="filteredByYear"
      value="filteredByYear"
      v-model="filter"
    />
    <label class="label" for="filteredByYear">Отсортировать по году</label>
    <hr class="line" />
    <Loader v-if="loading" />
    <div v-if="filter === 'filteredByName'">
      <Card v-for="post in sortByName" :key="post.id" v-bind:post="post" v-bind:isBoxShadow="true"/>
    </div>
    <div v-else-if="filter === 'filteredByYear'">
      <Card v-for="post in sortByYear" :key="post.id" v-bind:post="post" v-bind:isBoxShadow="true"/>
    </div>
    <div v-else>
      <Card v-for="post in allPosts" :key="post.id" v-bind:post="post" v-bind:isBoxShadow="true"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Card from "../components/Card.vue";
import Loader from "../components/Loader.vue";

export default {
  data() {
    return {
      loading: true,
      filter: "all",
      errored: false,
    };
  },
  computed: {
    ...mapGetters(["allPosts", "sortByName", "sortByYear"]),
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
      setTimeout(() => {
      this.fetchPosts();
      this.loading = false;
      }, 200)
    },
  },
  components: {
    Card,
    Loader,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";

.title {
  size: 32px;
  margin-bottom: 18px;
  font-weight: 500;
}

.radio {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.label {
  color: $light-gray;
  margin-right: 34px;
}

.radio + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

.radio + label::before {
  content: "";
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid $light-gray;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 75%;
}

.radio:checked + label::before {
  border-color: $light-red;
  background-color: $light-red;
  background-image: url('data:image/svg+xml,\
    <svg width="15" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">\
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.33317 9.16624L0.166504 4.99958L1.3415 3.82458L4.33317 6.80791L10.6582 0.48291L11.8332 1.66624L4.33317 9.16624Z" fill="white"/>\
    </svg>'
  );
}

</style>