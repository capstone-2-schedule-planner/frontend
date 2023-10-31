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
              :items="this.class_data.map(obj => obj.subject + ' ' + obj.catalog + ': ' + obj.title)"
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
import { data } from '../assets/class_data.js'

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
      title = title + (2024 +  Math.floor(index / 2))
      return title
    },
    handleAdd() {
      this.csCourses[this.semesterIndex].push({ id: id, name: this.searchContent.split(':')[0] })
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
          { id: 0, name: 'FRENG 1100' },
          { id: 1, name: 'COMP SCI 1500' },
          { id: 2, name: 'CHEM 1310' },
          { id: 3, name: 'CHEM 1319' },
          { id: 4, name: 'MATH 1214' }
        ],
        [
          { id: 5, name: 'ENGLISH 1120' },
          { id: 6, name: 'COMP SCI 1200' },
          { id: 7, name: 'COMP SCI 1570' },
          { id: 8, name: 'COMP SCI 1580' },
          { id: 9, name: 'MATH 1215' },
          { id: 10, name: 'ENGLISH 1160' },
          { id: 11, name: 'PSYCH 1101' }
        ],
        [
          { id: 12, name: 'COMP SCI 1575' },
          { id: 13, name: 'COMP SCI 1585' },
          { id: 14, name: 'COMP ENG 2210' },
          { id: 15, name: 'PHYSICS 1135' },
          { id: 16, name: 'STATS 3113' },
          { id: 17, name: 'COMP SCI 3800' }
        ],
        [
          { id: 18, name: 'COMP SCI 2200' },
          { id: 19, name: 'COMP SCI 2500' },
          { id: 20, name: 'COMP ENG 3150' },
          { id: 21, name: 'PHYSICS 2135' }
        ],
        [
          { id: 22, name: 'COMP SCI 2300' },
          { id: 23, name: 'COMP SCI 3610' },
          { id: 24, name: 'MATH 3108' },
          { id: 25, name: 'ECON 1100' },
          { id: 26, name: 'PHILOS 3235' }
        ],
        [
          { id: 27, name: 'COMP SCI 3500' },
          { id: 28, name: 'COMP SCI 3402' },
          { id: 29, name: 'COMP SCI 5400' },
          { id: 30, name: 'CHEM 1310' },
          { id: 31, name: 'SP&MS 1185' }
        ],
        [
          { id: 32, name: 'COMP SCI 4090' },
          { id: 33, name: 'COMP SCI 4610' },
          { id: 34, name: 'COMP SCI 5300' },
          { id: 35, name: 'MECHENG 1720' }
        ],
        [
          { id: 36, name: 'COMP SCI 4091' },
          { id: 37, name: 'COMP SCI 5601' },
          { id: 38, name: 'POLSCI 1200' },
          { id: 39, name: 'HISTORY 1300' },
          { id: 40, name: 'PHILOS 1175' }
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
