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


 document.addEventListener("DOMContentLoaded", () => {
     docStatus = true;
    funcs.forEach(func => { func(); })
})
