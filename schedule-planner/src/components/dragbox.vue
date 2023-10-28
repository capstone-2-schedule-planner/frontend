<template>
    <div class="semester-card">
        <h3>{{ term + " " + year }}</h3>
        <div 
            class = "drop-zone"
            @drop = "onDrop($event, 1)"
            @dragenter.prevent
            @dragover.prevent
        >
            <div 
            v-for="course in getList(list)" 
            :key="course.id" 
            class="drag-el"
            draggable="true"
            @dragstart="startDrag($event, course)"
            >
            {{ course.name }}
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"

export default {
    props: {
        term: String,
        year: Number,
        list: Number,
    },
    name: "dragbox",
    components: {},
    setup() {
    const courses = ref([
      { id: 0, name: "FRENG1100", list:1 },
      { id: 1, name: "COMPSSCI1500", list:1 },
      { id: 2, name: "CHEM1310", list:1 },
      { id: 3, name: "CHEM1319", list:1 },
      { id: 4, name: "MATH1214", list:1 },
      { id: 5, name: "ENGLISH1120", list:1 },
      { id: 6, name: "COMPSSCI1200", list:2 },
      { id: 7, name: "COMPSSCI1570", list:2 },
      { id: 8, name: "COMPSSCI1580", list:2 },
      { id: 9, name: "MATH1215", list:2 },
      { id: 10, name: "ENGLISH1160", list:2 },
      { id: 11, name: "PSYCH1101", list:2 },
      { id: 12, name: "COMPSSCI1575", list:3 },
      { id: 13, name: "COMPSSCI1585", list:3 },
      { id: 14, name: "COMPENG2210", list:3 },
      { id: 15, name: "PHYSICS1135", list:3 },
      { id: 16, name: "STATS3113", list:3 },
      { id: 17, name: "COMPSSCI3800", list:3 },
      { id: 18, name: "COMPSSCI2200", list:4 },
      { id: 19, name: "COMPSSCI2500", list:4 },
      { id: 20, name: "COMPENG3150", list:4 },
      { id: 21, name: "PHYSICS2135", list:4 },
      { id: 22, name: "COMPSCI2300", list:5 },
      { id: 23, name: "COMPSCI3610", list:5 },
      { id: 24, name: "MATH3108", list:5 },
      { id: 25, name: "ECON1100", list:5 },
      { id: 26, name: "PHILOS3235", list:5 },
      { id: 27, name: "COMPSCI3500", list:6 },
      { id: 28, name: "COMPSCI3402", list:6 },
      { id: 29, name: "COMPSCI5400", list:6 },
      { id: 30, name: "CHEM1310", list:6 },
      { id: 31, name: "SP&MS1185", list:6 },
      { id: 32, name: "COMPSCI4090", list:7 },
      { id: 33, name: "COMPSCI4610", list:7 },
      { id: 34, name: "COMPSCI5300", list:7 },
      { id: 35, name: "MECHENG1720", list:7 },
      { id: 36, name: "COMPSCI4091", list:8 },
      { id: 37, name: "COMPSCI5601", list:8 },
      { id: 38, name: "POLSCI1200", list:8 },
      { id: 39, name: "HISTORY1300", list:8 },
      { id: 40, name: "PHILOS1175", list:8 },
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
</style>