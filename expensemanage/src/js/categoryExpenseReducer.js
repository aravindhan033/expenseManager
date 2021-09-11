const initialState = []

export default function categoryExpenseReducer(state = initialState, action) {
  switch (action.type) {
    case 'categoryExpense/add': {      
      return [
        ...state,
        {
          id: action.payload.id,
          category_name: action.payload.category_name,          
        },
      ]
    }
    case 'categoryExpense/addAll': {      
        return [
          ...state,
          ...action.payload,
        ]
      }    
    case 'categoryExpense/getAll': {      
      return state;
    }   
    default:
      return state
  }
}
