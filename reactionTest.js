
var observer = new MutationObserver(mutationsList => {
    for(let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            let currentClassState = mutation.target.classList;
            let cur = currentClassState[0];
            if(cur == "view-go" || cur == "view-result"){
                var clickEvent = document.createEvent ('MouseEvents');
                clickEvent.initEvent ("mousedown", true, true);
                temp1.dispatchEvent (clickEvent);
            }
        }
    }
});
observer.observe(temp1, { attributes: true });
