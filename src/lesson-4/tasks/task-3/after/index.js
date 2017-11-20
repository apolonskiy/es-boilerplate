/**
 * Created by andriipolonskyi on 15.11.2017.
 */
'use scrict';

export const getInfo = ({arr0, arr1 = [], arr2 = []} = dataFunc) =>{

    const array =[...arr0, ...arr1 , ...arr2]
    const max = Math.max(...array)
    const min = Math.min(...array);
    const length = array.length;
    return {
        length,
        max,
        min
    }

}




