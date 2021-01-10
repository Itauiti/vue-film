<template>
  <div class="header">
    <h1 class="header__title">#movienow</h1>
  </div>
</template>

<style lang="scss">
@import "../styles/base.scss";

.header {
  background-color: $red;
  color: $black;
  box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.28);
  padding: 36px 16px 16px;
  display: flex;
}

.header__title {
  margin: 0 auto;
  font-size: 32px;
  font-weight: 900;
  letter-spacing: 0.21em;
  text-transform: uppercase;
}
</style>