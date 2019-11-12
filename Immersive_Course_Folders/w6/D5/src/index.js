const DomNodeCollection = require('./dom_node_collection');

const funcs = [];
let docStatus = false;

window.$l = (arg) => {
    switch (typeof arg) {
    case 'object': 
        return new DomNodeCollection([arg]);
    case 'function':
        if(docStatus === false) {
            funcs.push(arg);
        } else {
           return arg();
        }
    case 'string':
        const elmts = document.querySelectorAll(arg);
        const nodeColl = Array.from(elmts);
        return new DomNodeCollection(nodeColl);
    }
 }

 $l.extend = (...arg) => {
    let ans = arg[0];
    for(let i = 1; i < arg.length; i++) {
        const neededKeys = Object.keys(arg[i]);
        neededKeys.forEach(ky => { ans[ky] = arg[i][ky]; })
    }

     arg.forEach(obj => {
        let neededKeys = Object.keys(ans);
        neededKeys.forEach(ky => obj[ky] = ans[ky]);
        });

     return arg;    
 }

toQueryString = (obj) => {
    let result = "";
    for (const prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            result += `${prop}=${obj[prop]}&`;
        }
    }
    return result.substring(0, result.length - 1);
};

 $l.ajax = (blk) => {
    const reqObj = new XMLHttpRequest();
    
    const deFlt = {
        dataType: 'application/x-www-form-urlencoded; charset=UTF-8',
        data: {},
        url: "",
        method: "GET",
        success: () => {},
        error: () => {}
    }

    const reqArg = $l.extend(deFlt, blk);
    reqArg.method = blk.method.toUpperCase();


    if(reqArg.method === "GET") { reqArg.url += `?${toQueryString(reqArg.url)}`; }

    reqObj.open(reqArg.method, reqArg.url, true)
    reqObj.onload = (evt) => {
        if(reqObj.status === 200) {
            reqArg.success(reqObj.response);
        } else {
            reqArg.error(reqObj.response);
        }
    };

    resObj.send(JSON.stringify(reqArg.data));
 }


 document.addEventListener("DOMContentLoaded", () => {
     docStatus = true;
    funcs.forEach(func => { func(); })
})


// Make a defaults object.Check the jQuery ajax API document to get a sense of what the defaults should be.
// Provide defaults for success, error, url, method, data, and contentType.
// Merge the options onto the defaults
// Review this reading to learn how to implement an AJAX request using the native JavaScript API.
// It's actually quite easy!
// Using the options supplied by the user, make the request.
// Be sure to deliver the proper response to the success / error callback.
// This response should be an object(use JSON.parse) and not a string.