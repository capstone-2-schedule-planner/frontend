<template>
  <div class="home">
    <section class="hero">
      <div class="hero-text container">
        <h4>Introducing</h4>
        <hr />
        <h2>Joe'SS++</h2>
        <hr />
        <router-link to="/Scheduler">
          <v-btn>Get Started</v-btn>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.hero {
  background-image: url('../assets/sandt.png');
  background-attachment: fixed;
  position: relative;
  height: 100vh;
  background-size: 100% 100%;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .hero-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;

    h4 {
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 4px;
    }

    h2 {
      font-size: 50px;
      @media (min-width: 550px) {
        font-size: 80px;
      }
    }

    hr:nth-child(2) {
      max-width: 365px;
      margin-bottom: 16px;
    }
    hr:nth-child(4) {
      height: 6px;
      background-color: #fff;
      border: none;
      max-width: 85px;
      margin-top: 16px;
    }
  }
  .v-btn {
    max-width: 250px;
    height: 50px;
    margin-top: 16px;
    font-size: 25px;
  }
}
</style>
