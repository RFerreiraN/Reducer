import React, { act } from 'react'

export const ListaTareas = () => {

  //Estado Inicial 

  const initialState = [{
    id : new Date().getTime(),
    tarea : 'Aprender Reducer',
    finalizada : false
  }]

  // Estados Modificados

  const nuevaTarea = {
    id: new Date().getTime(),
    tarea: 'Aprender Hook useReduce',
    finalizada: false
  }

  const tareaModificada = {
    id: new Date().getTime(),
    tarea : 'Aplicar Reducer',
    finalizada : false
  }


  // Acciones

    const agregarTarea = {
      type : '[TAREAS] Agregar Tarea',
      payload : nuevaTarea
    }

    const modificarTarea = {
      type : '[TAREAS] Modificar Tarea',
      payload : tareaModificada
    }

    const eliminarTarea = {
      type : '[TAREAS] Eliminar Tarea',
    }

  // Reducer

  const TareaReducer = (state = initialState, action = {}) => {
      switch (action.type) {
        case '[TAREAS] Agregar Tarea':
           return [...state, action.payload]
        
        case '[TAREAS] Modificar Tarea':
            return [...state, action.payload]
        
        case '[TAREAS] Eliminar Tarea':
            return []
        default:
         return state;
      }
  }

console.log(TareaReducer(initialState, eliminarTarea))


  return (
    <>
      <h1>useReducer</h1>
      <hr />
      
    </>
  )
}
