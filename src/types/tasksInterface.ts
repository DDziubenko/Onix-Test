export interface TasksInterface {
  taskname: string
  taskdescription: string
  isNew: boolean
  status: 'todo' | 'inprogress' | 'done'
}
