// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`


};
function mondayWork(activity ='go to the office') {
    return `This Monday, I will ${activity}.`
};
function wrapAdjective(param = "*") {
    let str = "You are "
    let str2 = "||a dedicated programmer||!"
    let str3 = "*a hard worker*!"
        return function() {
            let special = param
            if (special === "*") {
                return `${str}${str3}`
            }else if (special === "||") {
                return `${str}${str2}`
            }else return `${str}"special`
        }

};