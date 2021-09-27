const initialState = {categoryDetails:{},categoryExpenseItem:[]};

export default function categoryExpenseReducer(state = initialState, action) {
  switch (action.type) {
    case 'categoryExpense/add': {      
      let items=state.categoryExpenseItem;
      items.unshift(action.payload);
      return {
        ...state,
        categoryExpenseItem:[...items],
      }
    }
    case 'categoryExpense/addAll': {      
        return action.payload
      }        
    case 'categoryExpense/clear': {      
      return [];
    }   
    default:
      return state
  }
}
