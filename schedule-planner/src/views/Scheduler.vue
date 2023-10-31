<template>
  <div class="margin"></div>
  <v-container fluid>
    <div class="wrapper">
      <div class="wrapper-box">
        <div id="box">
          <div class="scroll-box">
            <v-card v-for="n in csCourses.length" :key="n">
              <h3>{{ semesterTitle(n) }}</h3>
              <draggable v-model="csCourses[n - 1]" item-key="id" group="a">
                <template #item="{ element: course }">
                  <v-card
                    @click="
                      () => {
                        this.courseInfoDialog = true
                        this.courseInfo = course
                      }
                    "
                  >
                    <div class="one-line">
                      <span>{{ course.name }}</span>
                      <v-icon
                        icon="mdi-delete"
                        margin-left="auto"
                        @click="deleteCourse(n - 1, course.id)"
                      />
                    </div>
                  </v-card>
                </template>

                <template #footer>
                  <v-btn
                    color="primary"
                    @click="
                      () => {
                        this.semesterIndex = n - 1
                        this.addCourseDialog = true
                      }
                    "
                    >Add</v-btn
                  >
                  <v-btn
                    v-bind="props"
                    @click="
                      () => {
                        this.semesterIndex = n - 1
                        this.deleteSemesterDialog = true
                      }
                    "
                  >
                    Delete
                  </v-btn>
                </template>
              </draggable>
            </v-card>
            <v-card
              @click="this.csCourses.push([])"
              class="d-flex align-center justify-center"
              color="#f1f1f1"
              width="180px"
              outlined
            >
              <v-icon icon="mdi-plus" />
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </v-container>
  <v-dialog v-model="addCourseDialog" transition="dialog-bottom-transition" width="750px">
    <template v-slot:default="{ dialogActive }">
      <v-card>
        <v-toolbar color="primary" title="Add a Course"></v-toolbar>
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
          <v-btn color="primary" @click="handleAdd">Add Course</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
  <v-dialog v-model="deleteSemesterDialog" transition="dialog-bottom-transition" width="800">
    <v-card>
      <v-card-text>
        <span class="text-h6">Are you sure you want to delete this Semester?</span>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="text" @click="deleteSemesterDialog = false"> Cancel </v-btn>
        <v-btn color="red-darken-1" variant="text" @click="deleteSemester"> Delete </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-dialog v-model="courseInfoDialog" width="auto">
    <v-card>
      <v-card-title>
        {{ this.courseInfo.name }}
      </v-card-title>
      <v-card-text> Data data data </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="this.courseInfoDialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import draggable from 'vuedraggable'
import { data } from '../../class_data.js'

let id = 41
export default {
  name: 'Scheduler',
  components: {
    draggable
  },
  methods: {
    deleteCourse(listIndex, courseId) {
      let course = this.csCourses[listIndex].find((obj) => obj.id === courseId)
      let courseIndex = this.csCourses[listIndex].indexOf(course)
      this.csCourses[listIndex].splice(courseIndex, 1)
    },
    deleteSemester() {
      this.csCourses.splice(this.semesterIndex, 1)
      this.deleteSemesterDialog = false
    },
    semesterTitle(index) {
      let title = ''
      if (index % 2 == 0) {
        title = title + 'Spring '
      } else {
        title = title + 'Fall '
      }
      title = title + (2024 + Math.floor(index / 2))
      return title
    },
    handleAdd() {
      this.csCourses[this.semesterIndex].push({ id: id, name: this.searchContent })
      id++
      this.searchContent = null
      this.addCourseDialog = false
    },
    async getData() {
      try {
        const response = await this.$http.get('http://jsonplaceholder.typicode.com/posts')
        // JSON responses are automatically parsed.
        this.posts = response.data
      } catch (error) {
        console.log(error)
      }
    }
  },
  data() {
    return {
      class_data: data,

      csCourses: [
        [
          { id: 0, name: 'FRENG1100' },
          { id: 1, name: 'COMPSSCI1500' },
          { id: 2, name: 'CHEM1310' },
          { id: 3, name: 'CHEM1319' },
          { id: 4, name: 'MATH1214' }
        ],
        [
          { id: 5, name: 'ENGLISH1120' },
          { id: 6, name: 'COMPSSCI1200' },
          { id: 7, name: 'COMPSSCI1570' },
          { id: 8, name: 'COMPSSCI1580' },
          { id: 9, name: 'MATH1215' },
          { id: 10, name: 'ENGLISH1160' },
          { id: 11, name: 'PSYCH1101' }
        ],
        [
          { id: 12, name: 'COMPSSCI1575' },
          { id: 13, name: 'COMPSSCI1585' },
          { id: 14, name: 'COMPENG2210' },
          { id: 15, name: 'PHYSICS1135' },
          { id: 16, name: 'STATS3113' },
          { id: 17, name: 'COMPSSCI3800' }
        ],
        [
          { id: 18, name: 'COMPSSCI2200' },
          { id: 19, name: 'COMPSSCI2500' },
          { id: 20, name: 'COMPENG3150' },
          { id: 21, name: 'PHYSICS2135' }
        ],
        [
          { id: 22, name: 'COMPSCI2300' },
          { id: 23, name: 'COMPSCI3610' },
          { id: 24, name: 'MATH3108' },
          { id: 25, name: 'ECON1100' },
          { id: 26, name: 'PHILOS3235' }
        ],
        [
          { id: 27, name: 'COMPSCI3500' },
          { id: 28, name: 'COMPSCI3402' },
          { id: 29, name: 'COMPSCI5400' },
          { id: 30, name: 'CHEM1310' },
          { id: 31, name: 'SP&MS1185' }
        ],
        [
          { id: 32, name: 'COMPSCI4090' },
          { id: 33, name: 'COMPSCI4610' },
          { id: 34, name: 'COMPSCI5300' },
          { id: 35, name: 'MECHENG1720' }
        ],
        [
          { id: 36, name: 'COMPSCI4091' },
          { id: 37, name: 'COMPSCI5601' },
          { id: 38, name: 'POLSCI1200' },
          { id: 39, name: 'HISTORY1300' },
          { id: 40, name: 'PHILOS1175' }
        ]
      ],
      addCourseDialog: false,
      deleteSemesterDialog: false,
      courseInfoDialog: false,
      courseInfo: null,
      semesterIndex: 0,
      searchContent: null,
      posts: []
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.wrapper-box {
  width: 80vw;
  min-height: 500px;
  overflow: auto;
  border: 1px solid black;
}
#box {
  width: 100vw;
  height: auto;
  position: relative;
}
.scroll-box {
  display: flex;
  flex-direction: row; /* Horizontal layout */
  overflow-x: auto; /* Horizontal scroll */
  white-space: nowrap; /* Prevent wrapping of elements */
}
.margin {
  height: 100px;
}

.v-card {
  align-items: center;
  padding: 10px;
  margin: 10px;
  width: auto;
}

.add-button {
  flex: 1;
  margin-right: 10px;
}

.one-line {
  display: flex;
  justify-content: space-between;
}

.delete-button {
  flex: 1;
  padding: 2;
  margin-left: 10px;
}
</style>
