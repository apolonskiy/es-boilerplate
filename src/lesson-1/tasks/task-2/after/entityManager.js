/**
 * Created by andriipolonskyi on 09.11.17.
 */

export default class Entity {
    object;
    constructor(x) {
        this.object = x
    }
    getEntity(){
        console.log("Add Entity "+this.object.firstName);
        console.log(this.object);
        return this.object
    }
}
