/**
 * Created by andriipolonskyi on 10.11.17.
 */
export function findString(text, pattern) {
    // let k = pattern.flags;    //Решение без LastIndex.
    // let i = pattern.source;
    // return text.split(new RegExp(i,k)).length-1

    let count = 0;   // Не судите строго, но с этой липучкой "y" вообще непонятно как работать. Пришлось indexOf() применить и такую штуку
    let n = pattern.source; // придумать с while. за то щитает сколь угодно много совпадений и правильно :)
    if(text.includes(pattern.source)) {

        let ind = text.indexOf(n);

        while (ind != -1) {
            ind = checkExec(text, pattern, ind, n);
            count++;
        }
        return `Number of stings '${n}' in specified text is equal to # ${count} #`;
    } else {
        return `There are no strings '${n}' in specified text`
    }
}
 function  checkExec(text,pattern,ind,n) {
     pattern.lastIndex=ind;
     let sticky = pattern.exec(text);
     ind = text.indexOf(n, pattern.lastIndex);
     return ind;
 }


