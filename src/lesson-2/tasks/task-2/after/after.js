/**
 * Created by andriipolonskyi on 10.11.17.
 */
export function tag(literals, ...substitutions) {

    let result = '';
    for (let i = 0; i < substitutions.length; i++) {

    result += literals[i] + `${substitutions[i].amount}, and it will be paid in ${substitutions[i].currency}!`;


    }
    return result;
}


