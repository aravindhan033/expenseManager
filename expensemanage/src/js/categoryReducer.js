const initialState = {category_item:[]}

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case 'category/add': {      
      let items=state.category_item;
      items.push({ id: action.payload.id, category_name: action.payload.category_name, });
      return {
        ...state,
        category_item:[...items],
      }
    }
    case 'category/addAll': {   
      let items=state.category_item;
        return {
          ...state,
          category_item:[...items,...action.payload],
        }        
      }        
    default:
      return state
  }
}
