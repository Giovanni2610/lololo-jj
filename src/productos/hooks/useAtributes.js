import { useEffect, useReducer } from "react"
import { addAtributeReducer } from "../reducer/addAtributeReducer"

export const useAtributes = () => {

  const initialState = []

  const init = () => {
    return []
  }

  const [atribute, dispatch] = useReducer(addAtributeReducer, initialState, init)

  const handleNewAtribute = (atribute) => {
    const action = {
      type: '[ATRIBUTE] Add Atribute',
      payload: atribute,
    }

    dispatch(action)
  }

  const handleDeleteAtribute = (name) => {
    const action = {
      type: '[ATRIBUTE] Delete Atribute',
      payload: name,
    }

    dispatch(action)
  }

  return {
    atribute,
    handleNewAtribute,
    handleDeleteAtribute,
  }
} 
