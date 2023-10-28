<template>
    <div class="scheduler">
      <dragbox v-for="(semester, index) in semesterData" :key="index" :term="semester.term" :year="semester.year" :list-value="semester.listValue" />
    </div>
  </template>
  
  
  <script>
  import dragbox from '../components/dragbox.vue';
  import { ref, computed } from 'vue';
  
  export default {
    name: "Scheduler",
    components: {
      dragbox,
    },
    setup() {
      
      const semesterData = ref([])
  
      // Function to generate semester data
      const generateSemesterData = () => {
        const startingYear = 2024;
        const numberOfSemesters = 8; // Adjust this as needed
  
        for (let i = 0; i < numberOfSemesters; i++) {
          const year = startingYear + Math.floor(i / 2);
          const term = i % 2 === 0 ? 'Spring' : 'Fall';
          const listValue = i + 1;
  
          semesterData.value.push({
            term,
            year,
            listValue,
          })
        }
      };
  
      // Call the function to generate semester data
      generateSemesterData();

      return {
        semesterData,
      }
    
    },
  };
  </script>
  