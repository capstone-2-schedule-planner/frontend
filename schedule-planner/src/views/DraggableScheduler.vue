<template>
    <div class="margin"></div>
    <v-container fluid>
      <v-row>
        <v-col class="text-right">
          <v-btn color="primary" depressed @click="addCard"> Add Card </v-btn>
        </v-col>
      </v-row>
      <draggable v-model="csCourses" item-key="id" tag="ul">
            <template #item="{element: course}" >
                <v-card>
                    <li>{{ course.name }}</li>
                </v-card>
            </template>
        </draggable>
    </v-container>
  </template>
  
  <script>
  import {ref} from 'vue'
  import draggable from 'vuedraggable'
  export default {
    components: {
        draggable
    },  
    methods: {
      addCard() {
        const card = {
          title: 'New Card',
          tasks: [],
        }
  
        this.cards.push(card)
      },
    },
    setup() {
    const csCourses = ref([
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
    return {csCourses}
  },
  };
  </script>
  
<style>
.margin{
    height:100px;
}
</style>