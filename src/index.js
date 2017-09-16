module.exports = function check(str, bracketsConfig) {
    let strArr = str.split('');
    let brOpeners = [];
    let brClosers = [];
    bracketsConfig.forEach(function(element) {
        brOpeners.push(element[0]);
        brClosers.push(element[1]);
    }, this);
    let checkingArr = [];
    strArr.forEach(function(element) {
        if (brOpeners.includes(element) && !brClosers.includes(element)) {
            checkingArr.push(element);
        }
        if (brClosers.includes(element)) {
            if (checkingArr[checkingArr.length - 1] == brOpeners[brClosers.indexOf(element)]) {
                checkingArr.pop();
            } else {
                checkingArr.push(element);
            }
        }
    }, this);
    return !checkingArr.join("");
}