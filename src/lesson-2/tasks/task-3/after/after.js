/**
 * Created by andriipolonskyi on 10.11.17.
 */

export function format(string){
    let k =string.charCodeAt(0).toString(16);
    console.log(k);
    let n =string.charCodeAt(1).toString(16);
    console.log(n);
    return "\\u"+ k + "\\u" + n ;

}


