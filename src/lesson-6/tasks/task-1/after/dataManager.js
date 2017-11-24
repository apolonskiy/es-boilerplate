/**
 * Created by andriipolonskyi on 13.11.2017.
 */
'use strict'
import validator from '../after/validator';


const data = [];

export const addEntity = (entity) => {
    validator(entity);

    return data.push(entity);

};

export const getEntityTotalviews = (array, callback) =>{
    let result = 0;
    if(!(Array.isArray(array))){
        if(typeof callback ==='function'){
            for(let i=0;i<=data.length-1;i++){
                data[i].social.forEach((item)=>{
                    result+=item.views;
                })
            }
            return callback(result);
        }else if(typeof callback ==='undefined') {
            for (let i = 0; i <= data.length - 1; i++) {
                data[i].social.forEach((item) => {
                    result += item.views;

                })
            }
        }
        return result;
    } else if (Array.isArray(array) && typeof callback ==='undefined'){
            array.forEach(itemRequired=>{
                if (typeof itemRequired=== 'number') {
                    for(let i=0;i<=data.length-1;i++) {
                        const q = data[i].social.find(item => {
                            return item.id == itemRequired;
                        });
                        if(typeof q !== 'undefined'){
                            result += q.views;
                        }else{
                            continue;
                        }
                    }
                }else if (typeof itemRequired=== 'string') {
                    for(let i=0;i<=data.length-1;i++)
                    {
                        const q = data[i].social.find(item => {
                            return item.title == itemRequired;
                        });
                        if(typeof q !== 'undefined'){
                            result += q.views;
                        }else{
                            continue;
                        }
                    }
                }else {
                    throw new Error ("No items met given requiements in array");

                }
            });
        return result;
    }
};

export const getEntitiesSortedByPopularity = () =>{

    let resultArray = data.sort((item1, item2) => {
        let sumViews1 = 0;
        let sumViews2 = 0;
        item1.social.forEach(itemInner=>{
            sumViews1+=itemInner.views;
            // item1.social[item1.social.length -1].sumViews=sumViews;
        });
        item2.social.forEach(itemInner=>{
            sumViews2+=itemInner.views;
            // item2.social[item1.social.length -1].sumViews=sumViews;
        });
        return sumViews1 - sumViews2;
    });
    console.log(resultArray)
};


