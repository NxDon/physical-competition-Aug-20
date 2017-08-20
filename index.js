/*
判断一个字符串中出现次数最多的字符，并统计次数
例如：str = ‘abcsbaddbizdbas’,输出：{b：4}
例如：str = ‘aaaaabbdbdbb’，输出：{a：5，b：5}*/

let findMaxNum = function (objArr) {
    let max = 0;
    objArr.forEach((elem) => {
        max = elem.count > max ? elem.count : max;
    });
    return max;
};

let getResultObject = function (objArr) {
    let max = findMaxNum(objArr);
    let result = {};
    for (let i = 0; i < objArr.length; i++) {
        if (objArr[i].count === max) {
            Object.defineProperty(result, objArr[i].key, {
                value: max,
                enumerable: true//为了通过Object.keys访问
            });
        }
    }
    return result;
};

function splitToArr(str) {
    let collection = str.split('');
    var objArr = [];
    collection.forEach(function (elem) {
        objArr.forEach((obj,index) => {
            if (elem == obj.key) {
                obj.count += 1;
                return;
            }
        });
        objArr.push({
            key: elem,
            count: 1,
        })
    });
    return objArr;
}

function formatObjToStr(obj) {
    let result = [];
    Object.keys(obj).forEach((attr) => {
        result.push(`${attr}:${obj[attr]}`)
    });
    return `{${result.join(',')}}`;
}

function getMostCharCount(str) {
    let arr = splitToArr(str);
    let result = getResultObject(arr);
    return formatObjToStr(result);

}

console.log("getMostCharCount(aaaaabbdbdbb):")
console.log(getMostCharCount('aaaaabbdbdbb'))


