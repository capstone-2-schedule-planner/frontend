<template>
  <div class="home">
    <section class="hero">
      <div class="hero-text container">
        <h4>About Us</h4>
        <hr />
        <h4>Front End</h4>
        <div class="team-members">
          <div v-for="(member, index) in teamMembers" :key="member.name" class="team-member">
            <h4 v-if="index === 4">Back End</h4>
            <h4 v-if="index === 5"><br /></h4>
            <h4 v-if="index === 6"><br /></h4>
            <img :src="member.image" alt="" />
            <h5>{{ member.name }}</h5>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      teamMembers: [
        {
          name: 'Declan',
          image: '/assets/Declan.png'
        },
        {
          name: 'Nick',
          image: '../assets/Nick.png'
        },
        {
          name: 'Sam',
          image: '../assets/Sam.png'
        },
        {
          name: 'Thomas',
          image: '../assets/Thomas.png'
        },
        {
          name: 'Ryan',
          image: '../assets/Ryan.png'
        },
        {
          name: 'Payton',
          image: '../assets/Payton.png'
        },
        {
          name: 'Nathan',
          image: '../assets/Nathan.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.drop-zone {
  width: 400px;
  margin: 50px auto;
  background-color: #ecf0f1;
  padding: 10px;
  min-height: 10px;
}

.hero {
  background-image: url('../assets/sandt.png');
  background-attachment: fixed;
  position: relative;
  height: 100vh;

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
      font-size: 30px;
      padding-bottom: 4px;
    }
  }
}

.team {
  padding: 50px 0;
}

.team-members {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-flow: row wrap;
  margin-left: -20px;

  .team-member {
    margin: 20px;
    text-align: center;
    flex-basis: calc(25% - 40px);
    max-width: calc(25% - 40px);

    img {
      width: 100%;
      height: auto;
      max-width: 150px;
      border-radius: 50%;
    }
  }
}

.hero {
  background-image: url('../assets/sandt.png');
  background-attachment: fixed;
  position: relative;
  height: 100vh;

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
    padding-right: 100px;

    h4 {
      text-transform: uppercase;
      font-size: 30px;
      padding-bottom: 4px;
    }

    h5 {
      text-transform: uppercase;
      font-size: 20px;
    }
  }
}

@media (max-width: 768px) {
  .team-members {
    justify-content: center;

    .team-member {
      flex-basis: calc(33.33% - 40px);
      max-width: calc(33.33% - 40px);
    }
  }
}

@media (max-width: 576px) {
  .team-members {
    justify-content: center;

    .team-member {
      flex-basis: calc(50% - 40px);
      max-width: calc(50% - 40px);
    }
  }
}
</style>
