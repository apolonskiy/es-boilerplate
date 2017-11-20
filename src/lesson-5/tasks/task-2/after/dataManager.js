/**
 * Created by andriipolonskyi on 13.11.2017.
 */
import validator from '../after/validator';


export function DataManager() {
    const data = [];
    const executor = {

        getEntities () {
            return data;
        },

        getEntityById(id){
            if (typeof id !== 'number') {
                throw new Error('id should be a number');
            }
            const entity = data.filter(function(current){
                return current.id == id;
            });

            const result = entity;

            return result;
        },
        add (entity) {
            validator(entity);

            return data.push(entity);
        },

        getCount () {
            const result = data.length;
            return  result;
        },

        getFirstEntity() {
            const result = data[0] ;

            return  result;
        },

        getLastEntity() {
            const result = data[data.length-1];

            return result;
        },

        filter(callback){
            if(typeof callback !== 'function'){
                throw new Error ('callback should be a function');
            }
            const entities = data.filter(callback);
            return entities;
        },
    };
    return executor;

  // DataManager.prototype.getEntities = function() {
  //     return data;
  // };
  //
  //   DataManager.prototype.getEntityById = function(id){
  //     if (typeof id !== 'number') {
  //         throw new Error('id should be a number');
  //     }
  //   const entity = data.filter(function(current){
  //       return current.id == id;
  //   });
  //
  //   const result = entity;
  //
  //   return result;
  // };
  //   DataManager.prototype.add = function(entity) {
  //   validator(entity);
  //
  //   return data.push(entity);
  // };
  //
  //   DataManager.prototype.getCount = function() {
  //   const result = data.length;
  //   return  result;
  // };
  //
  //   DataManager.prototype.getFirstEntity = function() {
  //   const result = data[0] ;
  //
  //   return  result;
  // };
  //
  //   DataManager.prototype.getLastEntity = function() {
  //   const result = data[data.length-1];
  //
  //   return result;
  // };
  //
  //   DataManager.prototype.filter = function(callback){
  //   if(typeof callback !== 'function'){
  //       throw new Error ('callback should be a function');
  //   }
  //   const entities = data.filter(callback);
  //   return entities;
  // };

};




