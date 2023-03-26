
export const addAtributeReducer = ( initialState = [], action ) => {
  switch( action.type ) {
    case '[ATRIBUTE] Add Atribute':
      return [ ...initialState, action.payload ]    
    case '[ATRIBUTE] Remove Atribute':
      return initialState.filter( a => a.name !== action.payload )
    default: 
      return initialState
  }
}
