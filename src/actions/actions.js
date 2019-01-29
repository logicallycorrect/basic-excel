import * as variables from './../variables'


export function initialGrid (initialArray){
    return {
      type: variables.INITIAL_GRID,
      value: initialArray,
    }
}

export function updateCell (id, key, value){
    return {
      type: variables.UPDATE_CELL,
      id, key, value
    }
}

export function checkCell (value,key,id){
    return {
      type: variables.CHECK_CELL,
      value,
      key,
      id
    }
}

export function calculation (id, key, value){
  return {
    type: variables.UPDATE_CELL,
    id, key, value
  }
}

