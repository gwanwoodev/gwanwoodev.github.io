class InfiniteScroll {
    constructor (path, wrapperId) {
        if (path === undefined || wrapperId === undefined) throw Error ('no parameter.');
        this.path = path;
        this.pNum = 2;
        this.wNode = document.querySelector("."+wrapperId);
        this.wrapperId = wrapperId;
        this.enable = true;

        this.detectScroll();
    }

    detectScroll() {
        window.onscroll = (ev) => {
            if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) 
                this.getNewPost();
        };    
    }
    getNewPost() {
        if (this.enable === false) return false;
        this.enable = false;

        fetch(`${location.origin + this.path + this.pNum}/index.html`).then(response => {
            if(response.status === 200) {
                return response.text();
            }else {
                throw new Error("DONE");
            }
        }).then(responseText => {
            const childItems = this.getChildItemsByAjaxHTML(responseText);
            this.appendNewItems(childItems);
            this.pNum++;
            return this.enable = true;
        }).catch(e => {
            console.log(e);
        });

        /*
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                if (xmlhttp.status == 200) {
                    const childItems = this.getChildItemsByAjaxHTML(xmlhttp.responseText);
                    this.appendNewItems(childItems);
                    this.pNum++;
                }
                return this.enable = true;
            }
        }
        xmlhttp.open("GET", `${location.origin + this.path + this.pNum}/index.html`, true);
        xmlhttp.send();*/
    }

    getChildItemsByAjaxHTML(HTMLText) {
        const newHTML = document.createElement('html');
        newHTML.innerHTML = HTMLText;
        const childItems = newHTML.querySelectorAll(`.${this.wrapperId} > *`);
        return childItems;
    }

    appendNewItems(items) {
        items.forEach(item => {
            this.wNode.appendChild(item);
        });
    }
}