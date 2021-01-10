<template>
  <div class="card" v-bind:class="{ boxshadow: isBoxShadow}">
    <div class="card__img-container">
      <img class="card__img" :src="post.poster" alt="Постер фильма" />
    </div>
    <div class="card__text-container">
      <router-link :to="{ name: 'film', params: {id: post.id }}" class="card__title">
        {{ post.title }}
      </router-link>
      <div class="card__rectangle" v-if="post.collapse.duration !== null">
        <p class="card__rectangle-text">{{ post.collapse.duration[0] }}</p>
        <svg class="card__rectangle-icon" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 0V2H12V0H4V2H2V0H0V18H2V16H4V18H12V16H14V18H16V0H14ZM4 14H2V12H4V14ZM4 10H2V8H4V10ZM4 6H2V4H4V6ZM10 16H6V2H10V16ZM14 14H12V12H14V14ZM14 10H12V8H14V10ZM14 6H12V4H14V6Z" fill="#FA2828" fill-opacity="0.98"/>
        </svg>
      </div>
      <p class="card__subtitle">
        {{ post.year }},
        <span class="card__subtitle" v-for="(genre, i) in post.genres" :key="i">
          {{ genre }}
          <span v-if="i+1 < post.genres.length">, </span>
        </span>
      </p>
      <p class="card__subtitle" v-if="post.directors !== null">
        Режиссёр: 
      <span class="card__subtitle" v-for="(dir, i) in post.directors" :key="i">
        {{ dir }}
        <span v-if="i+1 < post.directors.length">, </span>
      </span>
      </p>
      <div>
        <p class="card__subtitle" v-if="post.actors !== null">
          Актёры: 
          <span class="card__text" v-for="(actor, i) in post.actors" :key="i">
            {{ actor }}
            <span v-if="i+1 < post.actors.length">, </span>
          </span>
        </p>
      </div>
      <p v-if="post.description !== null">{{post.description}}</p>
      
      <p class="card__text"></p>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    isBoxShadow: {
      type: Boolean,
      required: true,
    },
    post: {
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "../styles/base.scss";

.boxshadow {
  &:hover {
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.35);
  }
}

.card {
  display: flex;
  background-color: $dark-gray;
  margin: 12px 0 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.card__rectangle {
  position: absolute;
  top: 32px;
  right: -10px;
  padding: 9px 28px 9px 18px;
  background-color: $light-gray;
  transform: skew(-20deg, 0deg);
  display: flex;
  align-items: center;
}

.card__rectangle-text {
  color: $black;
  font-size: 12px;
  transform: skew(20deg, 0deg);
  font-weight: 900;
}

.card__rectangle-icon {
  transform: skew(20deg, 0deg);
  margin-left: 12px;
}

.card__img-container {
 min-width: 168px;
 background-color: $light-gray;
 display: flex;
}

.card__img {
  width: 112px;
  object-fit: cover;
  min-height: 168px;
  margin: auto;
}

.card__text-container {
  padding: 32px 32px 32px 24px;
}

.card__title {
  font-size: 36px;
  font-weight: 500;
  color: $white;
  text-decoration: none;
}

.card__subtitle {
  color: $gray;
  text-transform: uppercase;
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 12px;
  font-weight: 500;
}

.card__text {
  padding-top: 6px;
  color: white;
  font-weight: normal;
  text-transform: none;
}

</style>