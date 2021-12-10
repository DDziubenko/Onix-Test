<template lang="pug" xmlns:v-bind="">
.content_box
  form.addForm(onsubmit="return false" action="/")
    input(required v-model="newtask.taskname" placeholder="Name")
    textarea(required cols="40" rows="3" v-model="newtask.taskdescription" placeholder="Description")
    .radioArea
      input(required type="radio" name="status" value="todo" checked v-model="newtask.status")/
      p ToDo
      input(required type="radio" name="status" value="inprogress" v-model="newtask.status")/
      p In progress
      input(required type="radio" name="status" value="done" v-model="newtask.status")/
      p Done

    input(id="addTask" type="submit" value="Add task" @click="onSubmit")
    transition(name="fade")
      .container(v-if="tasks.length")
        .content(v-for='(element, index) in tasks' :key="index" :class="{ newTs : index===0 }")
          h1.task_name(@click='showModal') {{element.taskname}}
          .delete(@click='onDelete(index)') x
  tasks-modal(v-show='isModalVisible' @close='closeModal')

</template>

<script lang="ts">

import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
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
      v$: useVuelidate(),
      isCreated: false,
      isModalVisible: false,
      tasks: [] as TasksInterface[],
      newtask: {
        taskname: '',
        taskdescription: '',
        isNew: true,
        status: 'todo'
      } as TasksInterface
    }
  },
  validations () {
    return {
      newtask: {
        taskname: { required },
        taskdescription: { required }
      }
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
      this.v$.$validate()
      if (!this.v$.$error) {
        this.tasks.unshift(Object.assign(this.newtask))
        this.newtask = {
          taskname: '',
          taskdescription: '',
          isNew: true,
          status: 'todo'
        }
      }
    },
    onDelete (index: number) {
      this.tasks.splice(index, 1)
    }
  },
  created () {
    setTimeout(() => {
      this.tasks = [
        {
          taskname: '1',
          taskdescription: '1',
          isNew: false,
          status: 'inprogress'
        },
        {
          taskname: '2',
          taskdescription: '1',
          isNew: false,
          status: 'inprogress'
        },
        {
          taskname: '3',
          taskdescription: '1',
          isNew: false,
          status: 'inprogress'
        },
        {
          taskname: '4',
          taskdescription: '1',
          isNew: false,
          status: 'inprogress'
        }
      ] as TasksInterface[]
    }, 500)
    setTimeout(() => {
      this.isCreated = true
    }, 1000)
  }
})
</script>

<style scoped lang="scss">
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

.radioArea {
  display: flex;
  font-family: Helvetica;
  font-size: 14px;
}

.radioArea p {
  padding-top: 12px;
}

.newTs {
  border: 1px #ffffff solid;
  animation: blink 3s;
  animation-iteration-count: 3;
}
@keyframes blink {
  50% {border-color: #9B9B9B} }

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;

  ::v-deep .content {
    transition: all 2s ease;
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 1;

  ::v-deep .content {
    transform: scale(1.2);
  }
}
</style>
