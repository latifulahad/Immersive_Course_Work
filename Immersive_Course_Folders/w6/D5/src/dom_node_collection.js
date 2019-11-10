class DomNodeCollection {
    constructor(nds) {
        this.nodes = nds;
    }
    
    on(evtTitle, callB) {
        this.nodes.forEach(nd => {
            nd.addEventListener(evtTitle, callB);
            if (nd[`mainEvents-${evtTitle}`] === "undefined") { nd[`mainEvents-${evtTitle}`] = []; }
            nd[`mainEvents-${evtTitle}`].push(callB);
        });
    }

    off(evtTitle) {
        this.nodes.forEach(nd => {
            if (nd[`mainEvents-${evtTitle}`]) {
                nd[`mainEvents-${evtTitle}`].forEach(callB => {
                    nd.removeEventListener(evtTitle, callB);
                })
                nd[`mainEvents-${evtTitle}`] = [];
            }
        });
    }
    
    html(arg) {
        if(arg) {
            this.nodes.forEach(nd => { nd.innerHTML = arg; })
        } else {
            return this.nodes[0].innerHTML;
        }
    }

    empty() {
        this.nodes.forEach(nd => { nd.html = ""; })
    }

    append(arg) {
        this.nodes.forEach(nd => {
            arg.forEach(potenNd => { nd.innerHTML = potenNd.outerHMTL; })
        })
    }

    attr(atTitle, val) {
        if(typeof val === 'string') {
            this.nodes[0].setAttribute(atTitle, val);
        } else {
            return this.nodes[0].getAttribute(atTitle);
        }
    }

    addClass(arg) {
        this.nodes[0].className = arg; 
    }

    removeClass() {
        this.nodes[0].className = "";
    }

    children() {
        const ans = [];

        this.nodes.forEach(nd => {
            const potenNds = nd.children;
            potenNds.forEach(babeNd => { ans.push(babeNd); })
        })

        return new DomNodeCollection(ans);
    }

    parent() {
        const ans = [];
        this.nodes.forEach(nd => { ans.push(nd.parentElement); })
        return new DomNodeCollection(ans);
    }

    remove() {
        this.nodes.forEach(nd => { nd.parentElement.removeChild(nd); });
    }

}

module.exports = DomNodeCollection;
