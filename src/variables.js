
export const DISPLAY_DATA = 'DISPLAY_DATA';
export const INITIAL_GRID = 'INITIAL_GRID';
export const UPDATE_CELL = 'UPDATE_CELL';
export const CHECK_CELL = 'CHECK_CELL';
export const CALCULATION = 'CALCULATION';

export const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


export function gridCreate(columnArray) {
    let tempArr = [];
    for(let i=0; i<columnArray.length; i++) {   
        for(let j=0; j<columnArray.length; j++) {
       
            // for 1st cell    
          if(i == 0 && j == 0) {
            tempArr.push({
              key : 'Main',
              value : ''
          });
          }

          // for columns
         else if(i == 0) {
            tempArr.push({
              key : columnArray[j],
              value : ''
          });
          }

          // for rows
         else if(j == 0) {
            tempArr.push({
              key : i,
              value : ''
          });
          }
  
          else {
          tempArr.push({
              key : columnArray[j]+i,
              value : ''
          }) 
        }
      } }
      return tempArr;
}