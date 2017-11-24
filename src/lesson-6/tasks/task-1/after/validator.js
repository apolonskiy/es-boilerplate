/**
 * Created by andriipolonskyi on 13.11.2017.*/

export default function (obj) {
    if(typeof obj.id!=="number"){
        throw  new Error ("id is not a number");
    }
    if(typeof obj.firstName!=="string"){
        throw  new Error ("firstName is not a string");
    }
    if(typeof obj.lastName!=="string"){
        throw  new Error ("lastName is not a string");
    }
    if(typeof obj.age!=="number" && obj.age>0){
        throw  new Error ("age is not a number");
    }
    if(typeof obj.sex==="string" ){
        if(!(obj.sex=="male" || obj.sex==="female")){
            throw  new Error ("sex doesn't correspond with allowed values: 'male' or 'female'");
        }
    }else{
        throw  new Error ("sex is not a string");
    }
    if(!(Array.isArray(obj.social))){
        throw  new Error ("social is not an array");
    }
}
