const DOMNodeCollection = require('./dom_node_collec');

document.addEventListener("DOMContentLoaded", () => {
    window.$l = (arg) => { 
        const elmts = document.querySelectorAll(arg);
        const nodeColl = Array.from(elmts);
        return new DOMNodeCollection(nodeColl);
     }
})