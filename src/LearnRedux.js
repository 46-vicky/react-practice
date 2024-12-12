import React from 'react'
import store from './store/store'
import { addTask, removeTask, taskComplted } from './store/task'

const LearnRedux = () => {
    store.dispatch(addTask("Task 1"));
    console.log(store.getState())
    store.dispatch(addTask("Task 2"));
    console.log(store.getState());
    store.dispatch(removeTask(1));
    console.log(store.getState());
    store.dispatch(taskComplted(2));
    console.log(store.getState())
  return (
    <div>LearnRedux</div>
  )
}

export default LearnRedux