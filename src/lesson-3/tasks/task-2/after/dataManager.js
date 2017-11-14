/**
 * Created by andriipolonskyi on 13.11.2017.
 */
import validator from '../after/validator';

const data = [];

export const getEntities = () => data;

export const getEntityById = function(id){
    if (typeof id !=='number'){
        throw new Error('id should be a number');
    }

    const entity = data.filter(function(current){
        return current.id == id;
    });

    const result = entity;

    return result;
}

export const addEntity = (entity)=>{
    validator(entity);

    return data.push(entity);

}

export const getCount = ()=>{
    const result = data.length;
    return  result;
}


export const getFirstEntity = () =>{
    const result = data[0] ;

    return  result;
}

export const getLastEntity = () =>{
    const result = data[data.length-1];

    return result;
}

export const filter = function(callback){
    if(typeof callback !== 'function'){
        throw new Error ('callback should be a function');
    }

    const entities = data.filter(callback);
    return entities;
}
