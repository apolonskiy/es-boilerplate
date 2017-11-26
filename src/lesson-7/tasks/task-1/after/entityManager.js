/**
 * Created by andriipolonskyi on 13.11.2017.
 */
import validator from '../after/validator'

const Entity = function(obj){
        validator(obj);

        this.firstName= obj.firstName;
        this.lastName= obj.lastName;
        this.age= obj.age;
        this.sex= obj.sex;

};

Entity.prototype.getEntity = function() {
    return {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
        sex: this.sex
    }
};

export default Entity;
