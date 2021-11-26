<template lang="pug">
.modal-backdrop
  .modal
    .header
      | Placeholder
    hr
    .description
      | Placeholder
    hr
    .buttons
      .close(@click="close")
        | x
      .deleteTask(@click="deleteTask")
        | close task

</template>

<script>
export default {
  name: 'tasksModal',

  methods: {
    close () {
      this.$emit('close')
    },
    deleteTask () {
      alert('This button not work')
    }
  }
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
}

hr {
  border: none;
  background-color: #000000;
  color: #000000;
  height: 2px;
}

.header {
  display: flex;
  font-family: Helvetica;
  font-size: 20px;
  padding: 30px;
}

.description {
  padding: 30px;
}

.buttons {
  display: flex;
}

.close {
  cursor: pointer;
  font-size: 20px;
  padding: 20px;
}

.deleteTask{
  padding: 20px;
  font-size: 14px;
  cursor: pointer;
  align-self: center;
}
</style>
