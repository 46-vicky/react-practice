// ===Action Type====

const ADD_TASK = "add_task";
const REMOVE_TASK = "remove_task";
const TASK_COMPLETED = "task_completed";

export const addTask = (task)=>{
    return {type:ADD_TASK, payload:{task:task}}
}
export const removeTask = (id)=>{
    return {type:REMOVE_TASK, payload:{id:id}}
}
export const taskComplted = (id)=>{
    return {type:TASK_COMPLETED, payload:{id:id}}
}

let id = 0;

export default function reducer(state=[],action){
    switch(action.type){
        case ADD_TASK:
            return [...state,{
                id:++id,
                task : action.payload.task,
                completed : false,
            }];
        case REMOVE_TASK:
            return state.filter((task)=>task.id !== action.payload.id);
        case TASK_COMPLETED:
            return state.map((task)=> task.id === action.payload.id ? {...task,completed:true} : task);
        default :
        return state;
    }
}