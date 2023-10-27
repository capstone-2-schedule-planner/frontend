<template>
    <div class="home">
        <section class="hero">
            <div class="hero-text container">
                <h4>Vue Responsive Nav Menu</h4>
                <hr />
                <h2>
                With Vue <br />
                Animations
                </h2>
                <hr />
            </div>
        </section>
        <div class="semester-card">
            <h3>Fall</h3>
            <div 
                class = "drop-zone"
                @drop = "onDrop($event, 1)"
                @dragenter.prevent
                @dragover.prevent
            >
                <div 
                v-for="course in getList(1)" 
                :key="course.id" 
                class="drag-el"
                draggable="true"
                @dragstart="startDrag($event, course)"
                >
                {{ course.name }}
                </div>
            </div>
        </div>
        <div class="semester-card">
            <h3>Spring</h3>
            <div 
                class = "drop-zone"
                @drop = "onDrop($event, 2)"
                @dragenter.prevent
                @dragover.prevent
            >
                <div 
                v-for="course in getList(2)" 
                :key="course.id" 
                class="drag-el"
                draggable="true"
                @dragstart="startDrag($event, course)"
                >
                {{ course.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"

export default {
    name: "Home",
    components: {},
    setup() {
    const courses = ref([
      { id: 0, name: "CS1200", list:1 },
      { id: 1, name: "CS1500", list:1 },
      { id: 2, name: "CS1570", list:2 },
    ])

    const getList = (list) => {
      return courses.value.filter((course => course.list == list))
    }

    const startDrag = (event, course) => {
      console.log(course)
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('courseID', course.id)
    }

    const onDrop = (event, list) => {
      const  courseID = event.dataTransfer.getData('courseID')
      const course = courses.value.find((course) => course.id == courseID)
      course.list = list

    }

    return {
      getList,
      startDrag,
      onDrop,
    }
  },
  };
</script>
  
<style lang="scss" scoped>
    .drop-zone {
    width: 400px;
    margin: 50px auto;
    background-color: #ecf0f1;
    padding: 10px;
    min-height: 10px;
    }

    .drag-el {
    background-color: #3498db;
    padding: 5px;
    color: white;
    margin-bottom: 10px;
    }
    .drag-el:nth-last-of-type(1) {
    margin-bottom: 0px;
    }

    .semester-card {
    width: 500px;
    float:left
    }

  .hero {
    background-image: url("../assets/sandt.png");
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
  }
</style>