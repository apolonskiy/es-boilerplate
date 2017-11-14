/**
 * Created by andriipolonskyi on 13.11.2017.
 */

export default (num=10, delay=1000, cb=(val)=>val)=>{
    if (typeof cb !== 'function') {
        throw new Error('Callback must be function');
    }
    if (typeof  num !== 'number') {
        throw new Error('Number of repeats must be a number');
    }
    if (typeof  delay !== 'number') {
        throw new Error('Desired delay must be a number');
    }
    for (let i=0;i<num;i++){

            setTimeout(()=> {
                const val = cb(i);
                console.log(val);
            },i*delay)
    }

}




