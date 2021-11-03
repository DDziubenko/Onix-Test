<template lang="pug">
.content_box
  .content(v-for='(element, index) in tasks' :key='index')
    h1.task_name(@click='showModal') {{element.taskName}}
  tasks-modal(v-show='isModalVisible' @close='closeModal')

</template>

<script>

import tasksModal from '../components/modals/tasksModal.vue'

export default {
  name: 'tasks',
  components: {
    tasksModal
  },
  data () {
    return {
      isModalVisible: false,
      tasks: [
        {
          taskName: '123123123'
        },
        {
          taskName: '3333333333'
        },
        {
          taskName: '123123123'
        },
        {
          taskName: '123123123'
        },
        {
          taskName: '123123123'
        },
        {
          taskName: '123123123'
        },
        {
          taskName: '123123123'
        },
        {
          taskName: '123123123'
        },
        {
          taskName: '123123123'
        },
        {
          taskName: '123123123'
        }
      ]
    }
  },
  methods: {
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    }
  }
}
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
}

.task_name {
  font-size: 20px;
  line-height: 24px;
}

</style>
