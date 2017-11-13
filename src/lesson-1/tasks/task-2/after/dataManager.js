/**
 * Created by andriipolonskyi on 09.11.17.
 */

let entityCollection = [];

export function addEntity(x) {
    console.log("Add " +x.firstName + " Entity to Collection");
    entityCollection.push(x);
}

export function getEntities(){
        return entityCollection;
}

export function getCount(){
        console.log("Length of Collection with Entities: " + entityCollection.length);
        return entityCollection.length;
}

export function getEntityById(n){
    console.log(entityCollection[n]);
    return entityCollection[n];
}

export function getFirstEntity(){
    console.log(entityCollection[0]);
    return entityCollection[0];
}

export function getLastEntity(){
    console.log(entityCollection[entityCollection.length-1]);
    return entityCollection[entityCollection.length -1];
}
