<template lang="pug" xmlns:v-bind="">
.content_box
  form.addForm(onsubmit="return false" action="/")
    input(required v-model="newtask.taskname" placeholder="Name")
    textarea(required cols="40" rows="3" v-model="newtask.taskdescription" placeholder="Description")
    input(id="addTask" type="submit" value="Add task" @click="onSubmit")
  transition-group(name="list" duratation="10000")
    .content( :class="{ cShow : isMounted }" v-for='(element, index) in tasks' :key='index')
      h1.task_name(@click='showModal') {{element.taskname}}
      .delete(@click='onDelete(index)') x
  tasks-modal(v-show='isModalVisible' @close='closeModal')

</template>

<script lang="ts">

import tasksModal from '../components/modals/tasksModal.vue'
import { TasksInterface } from '../types/tasksInterface'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'tasks',
  components: {
    tasksModal
  },
  data () {
    return {
      isMounted: false,
      isModalVisible: false,
      tasks: [] as TasksInterface[],
      newtask: {
        taskname: '',
        taskdescription: ''
      } as TasksInterface
    }
  },
  methods: {
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    },
    onSubmit () {
      this.tasks.push(this.newtask)
      this.newtask = {
        taskname: '',
        taskdescription: ''
      }
    },
    onDelete (index: number) {
      this.tasks.splice(index, 1)
    }
  },
  mounted () {
    setTimeout(() => {
      this.tasks = [
        {
          taskname: '1',
          taskdescription: '1'
        },
        {
          taskname: '2',
          taskdescription: '1'
        },
        {
          taskname: '3',
          taskdescription: '1'
        },
        {
          taskname: '4',
          taskdescription: '1'
        }
      ]
    }, 500)
    setTimeout(() => {
      this.isMounted = true
    }, 1000)
  }
})
</script>

<style scoped>
.content_box {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 730px;
  background-color: #FFFFFF;
  border-radius: 8px;
  margin: 30px auto;
  padding: 30px 10px;
}

.content {
  display: flex;
  position: relative;
  min-height: 60px;
  background-color: #F7F6F3;
  border-radius: 8px;
  margin: 30px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0;
  transition: all 1s ease;
}

.task_name {
  font-size: 20px;
  line-height: 24px;
}

.addForm {
  display: flex;
  flex-direction: column;
}

.addForm input {
  margin: 10px;
  background-color: #4AAE9B;
  border-radius: 8px;
  min-height: 20px;
}

#addTask {
  min-height: 40px;
  width: 60px;
  align-self: center;
}

.delete {
  display: flex;
  height: 20px;
  width: 20px;
  margin: 10px;
  border-radius: 100%;
  background-color: #FF0000;
  right: 0;
  position: absolute;
  font-size: 10px;
  font-family: Helvetica;
  color: #EAEAEA;
  justify-content: center;
  align-items: center;
}

.cShow {
  animation: cShow 2s;
  opacity: 1;
}
@keyframes cShow {
  0% {transform: scale(1)}
  50% { transform: scale(1.2)}
  100% { transform: scale(1)}
}
</style>
