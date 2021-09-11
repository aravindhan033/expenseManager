
import { combineReducers } from 'redux'
import categoryReducer from "./categoryReducer"
import categoryExpenseReducer from "./categoryExpenseReducer"
const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  category: categoryReducer,
  categoryExpense: categoryExpenseReducer,
  
})

export default rootReducer
