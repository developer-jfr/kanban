import { cardsAPI } from "../api/api"

export default function reducer(state = {
    tasks: [],
    OnHold: [],
    InProgress: [],
    NeedsReview: [],
    Approved: [],
  }, action) {
  
    switch (action.type) {
      case 'SET_TASKS': {
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        }
      }
      
      
      case 'GET_DATA_FULFILLED': {
        return {
          ...action.payload
        }
      }
      case 'ADD_TASK_ON-HOLD_FULFILLED': {
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
          OnHold: [...state.OnHold, action.payload]
        }
      }
      case 'ADD_TASK_IN-PROGRESS_FULFILLED': {
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
          InProgress: [...state.InProgress, action.payload]
        }
      }
      case 'ADD_TASK_NEEDS-REVIEW_FULFILLED': {
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
          NeedsReview: [...state.NeedsReview, action.payload]
        }
      }
      case 'ADD_TASK_APPROVED_FULFILLED': {
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
          Approved: [...state.Approved, action.payload]
        }
      }
      case 'DELETE_TASK_FULFILLED': {
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload),
          OnHold: state.OnHold.filter(task => task.id !== action.payload),
          InProgress: state.InProgress.filter(task => task.id !== action.payload),
          NeedsReview: state.NeedsReview.filter(task => task.id !== action.payload),
          Approved: state.Approved.filter(task => task.id !== action.payload)
        }
      }
      case 'MOVED_TASK_ONHOLD': {
        return {
          ...state,
          OnHold: action.payload
        }
      }
      case 'MOVED_TASK_INPROGRESS': {
        return {
          ...state,
          InProgress: action.payload
        }
      }
      case 'MOVED_TASK_NEEDSREVIEW': {
        return {
          ...state,
          NeedsReview: action.payload
        }
      }
      case 'MOVED_TASK_APPROVED': {
        return {
          ...state,
          Approved: action.payload
        }
      }
      case 'UPDATE_TASK_FULFILLED': {
        state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        }
      }

      default: {
        return state;
      }
    }
  }

export const getData = () => {
  return {
    type: 'GET_DATA',
    payload: 
      cardsAPI.getCards().then(res => {
        const tasks = res.data;
        const data = {
          tasks,
          OnHold: tasks.filter(task => task.row === '0'),
          InProgress: tasks.filter(task => task.row === '1'),
          NeedsReview: tasks.filter(task => task.row === '2'),
          Approved: tasks.filter(task => task.row === '3')
        }
        console.log(data)
        return data;
       

      })
  }
}


export function deleteTask(id) {

  return {
    type: 'DELETE_TASK',
    payload:
      cardsAPI.deleteTask(id)
  }
}


export function moveTaskInColumn(tasks, type) {

  return {
    type: `MOVED_TASK_${type.toUpperCase()}`,
    payload: tasks
  }
}

export function addTasks(body, type) {
  return {
    type,
    payload: 
      cardsAPI.createTask(body.row, body.text)
  }
}

export function updateTask(body, id) {
  return {
    type: 'UPDATE_TASK',
    payload: 
      cardsAPI.updateTask(id, body.row, body.seq_num, body.text)
  }
}
