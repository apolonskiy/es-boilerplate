/**
 * Created by andriipolonskyi on 13.11.2017.
 */
import validator from '../after/validator';


export function DataManager() {
    const data = new Map();
    let idCounter = 0;

  DataManager.prototype.getEntities = function() {

      return data.values();
  };

    DataManager.prototype.getEntityById = function(id){
      if (typeof id !== 'number') {
          throw new Error('id should be a number');
      }
    const result = data.get(`id${id}`);
    return result;
  };

    DataManager.prototype.add = function(entity) {
    validator(entity);
    let result = data.set(`id${idCounter}`, entity);
    idCounter++;
    return result;
  };

    DataManager.prototype.getCount = function() {
    const result = data.size;
    return  result;
  };

    DataManager.prototype.getFirstEntity = function() {
    const result = data.get('id0') ;
    return  result;
  };

    DataManager.prototype.getLastEntity = function() {
    const result = data.get(`id${data.size-1}`);
    return result;
  };
  //
    DataManager.prototype.filter = function(callback){
    if(typeof callback !== 'function'){
        throw new Error ('callback should be a function');
    }
    let tempData = new Map();
    data.forEach(value => {
        if (callback(value)==true){
            tempData.set(value);
        }
    })
    return tempData.keys();
  };

};




