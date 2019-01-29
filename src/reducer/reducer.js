import * as variables from './../variables'

const initialState = {
    data :[]
}

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case variables.INITIAL_GRID :
            return {...state, data :[...action.value]};

            
        case variables.UPDATE_CELL :
            let temp = [...state.data];
            temp[action.id] = {
                key : action.key,
                value : action.value
            }
            return {...state, data :[...temp]};

        case variables.CHECK_CELL :

            let stateCopy = [...state.data];
            //console.log(action.value,action.key,action.id)

            let te = action.value.split('');
            let tempArr = [];

            for(let i=0;i<te.length;i+=3)
            {
                tempArr.push(te[i]+te[i+1]);
                tempArr.push(te[i+2])   
            }

            tempArr = tempArr.filter(v=>v)

            for(let i=0; i<tempArr.length; i+=2) {

                let obj = stateCopy.find(v => v.key == tempArr[i])
                tempArr[i] = obj.value;
            }

            stateCopy[action.id] = {
                key : action.key,
                value : eval(tempArr.join(''))
            }



           // console.log(eval(tempArr.join('')));



            // let temp2 = [...state.data];

            // let obj = temp2.find(v => v.key == action.value)
            // let index = temp2.indexOf(obj);
            
            // console.log(index);
            // temp2[action.id] = {
            //     key : action.key,
            //     value : temp2[index].value
            // }
            // console.log(temp2[index])
             return {...state, data :[...stateCopy]};

        default : return state;
    } // end of switch
} // end of reducer