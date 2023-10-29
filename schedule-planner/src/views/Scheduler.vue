<template>
  <div class="margin"></div>
  <v-container fluid>
    <v-row>
      <v-col v-for="n in csCourses.length" :key="n">
        <v-card>
          <h3>{{ semesterTitle(n) }}</h3>
          <draggable v-model="csCourses[n - 1]" item-key="id" group="a">
            <template #item="{ element: course }">
              <v-card>
                <div class="course-card">{{ course.name }}</div>
              </v-card>
            </template>

            <template #footer>
              <v-dialog
                v-model="dialogActive"
                transition="dialog-bottom-transition"
                width="60%"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="primary"
                    v-bind="props"
                    @click="this.semesterIndex=n-1"
                  >Add</v-btn>
                </template>
                <template v-slot:default="{ dialogActive }">
                  <v-card>
                    <v-toolbar
                      color="primary"
                      title="Add a Course"
                    ></v-toolbar>
                    <v-responsive width="350px">
                      <v-card-text>
                        <v-autocomplete
                          v-model="searchContent"
                          placeholder="Search for a Course"
                          :items="['garbage', 'hell', 'terrible', 'awful']" 
                          auto-select-first
                          rounded
                          density="comfortable"
                          variant="solo"
                        />
                      </v-card-text>
                    </v-responsive>
                    <v-card-actions class="justify-end">
                      <v-btn
                        color="primary"
                        @click="handleAdd"
                      >Add Course</v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </template>
          </draggable>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from 'vue'
import draggable from 'vuedraggable'
let id = 41
export default {
  name: 'Scheduler',
  components: {
    draggable
  },
  methods: {
    semesterTitle(index) {
      let title = '';
      if (index % 2 == 0) {
        title = title + 'Spring ';
      } else {
        title = title + 'Fall ';
      }
      title = title + (2024 + Math.floor(index / 2));
      return title;
    },
    handleAdd() {
      this.csCourses[this.semesterIndex].push({ id: id, name: this.searchContent});
      id++;
      this.searchContent= null;
      this.dialogActive = false;
    }
  },
  data() {
    return {
      csCourses: [
        [
          { id: 0, name: 'FRENG1100'},
          { id: 1, name: 'COMPSSCI1500'},
          { id: 2, name: 'CHEM1310'},
          { id: 3, name: 'CHEM1319'},
          { id: 4, name: 'MATH1214'}
        ],
        [
          { id: 5, name: 'ENGLISH1120'},
          { id: 6, name: 'COMPSSCI1200'},
          { id: 7, name: 'COMPSSCI1570'},
          { id: 8, name: 'COMPSSCI1580'},
          { id: 9, name: 'MATH1215'},
          { id: 10, name: 'ENGLISH1160'},
          { id: 11, name: 'PSYCH1101'}
        ],
        [
          { id: 12, name: 'COMPSSCI1575'},
          { id: 13, name: 'COMPSSCI1585'},
          { id: 14, name: 'COMPENG2210'},
          { id: 15, name: 'PHYSICS1135'},
          { id: 16, name: 'STATS3113'},
          { id: 17, name: 'COMPSSCI3800'}
        ],
        [
          { id: 18, name: 'COMPSSCI2200'},
          { id: 19, name: 'COMPSSCI2500'},
          { id: 20, name: 'COMPENG3150'},
          { id: 21, name: 'PHYSICS2135'}
        ],
        [
          { id: 22, name: 'COMPSCI2300'},
          { id: 23, name: 'COMPSCI3610'},
          { id: 24, name: 'MATH3108'},
          { id: 25, name: 'ECON1100'},
          { id: 26, name: 'PHILOS3235'}
        ],
        [
          { id: 27, name: 'COMPSCI3500'},
          { id: 28, name: 'COMPSCI3402'},
          { id: 29, name: 'COMPSCI5400'},
          { id: 30, name: 'CHEM1310'},
          { id: 31, name: 'SP&MS1185'}
        ],
        [
          { id: 32, name: 'COMPSCI4090'},
          { id: 33, name: 'COMPSCI4610'},
          { id: 34, name: 'COMPSCI5300'},
          { id: 35, name: 'MECHENG1720'}
        ],
        [
          { id: 36, name: 'COMPSCI4091'},
          { id: 37, name: 'COMPSCI5601'},
          { id: 38, name: 'POLSCI1200'},
          { id: 39, name: 'HISTORY1300'},
          { id: 40, name: 'PHILOS1175'}
        ]
      ],
      dialogActive: false,
      semesterIndex: 0,
      searchContent: null,
    }
  }
}
</script>

<style scoped>
.margin {
  height: 100px;
}

.v-card {
  align-items: center;
  padding: 10px;
  margin: 10px;
}
</style>
