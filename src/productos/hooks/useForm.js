import { useState } from "react"

// Va a manejar el formulario para añadir nuevos productos
export const useForm = (initialForm={}) => {

  const [formState, setformState] = useState(initialForm)
  const [name, setname] = useState()
  const [atributevalue, setatributevalue] = useState()

  const onInputChange = ({target}) => {
    const {name, value} = target
    setformState(
      {
        ...formState,
        [ name ]: value
      }
    )
    if(name === 'nombre') {
      setname(value)
    }

    if(name === 'atributo') {
      setatributevalue(value)
    }

  }

 const onResetForm = () => {
    setname('')
    setatributevalue('')
  }

  return {
    ...formState,
    onInputChange,
    onResetForm,
    name, 
    atributevalue
  }
}
