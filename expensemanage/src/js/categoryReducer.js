const initialState = []

export default function categoryReducer(state = initialState, action) {
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
    case 'category/getSelected': {
      return state.map((category) => {
        if (category.id !== action.payload.id) {
          return category
        }        
      })
    }
    case 'category/selected': {      
        return state.map((category) => {
            if (category.id !== action.payload.id) {
              return category
            }        
          })
    }   
    default:
      return state
  }
}
