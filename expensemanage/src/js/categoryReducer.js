const initialState = []

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'category/add': {      
      return [
        ...state,
        {
          id: action.payload.id,
          category_name: action.payload.category_name,          
        },
      ]
    }
    case 'category/addAll': {      
        return [
          ...state,
          ...action.payload,
        ]
      }
    case 'category/get': {
      return state.map((category) => {
        if (category.id !== action.payload.id) {
          return todo
        }        
      })
    }
    case 'category/getAll': {      
      return state;
    }   
    default:
      return state
  }
}
