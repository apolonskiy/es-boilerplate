/**
 * Created by andriipolonskyi on 17.11.2017.
 */

export const Entity=function(obj){
    this.id = obj.id;
    this.firstName = obj.firstName;
    this.surName = obj.surName;
    this.lastName = obj.lastName;
    this.sex = obj.sex;
};


export const talk ={
    sayAge(){
        if (typeof  this.age === 'undefined')
            console.log(`hm undefined? Lets fix it...`);
        else   console.log(`I'm ${this.age} years old, success!`);
    },
    say () {
        console.log("Lets start our homework");
    }
};


export const age ={
    fixAge(age){

        if (typeof  age === 'undefined')
            console.log(`hm undefined? Lets fix it...`);
        else{
            this.age = age;
            console.log(`I'm now ${age} years old, let's check it...`);
        }
    }
};

