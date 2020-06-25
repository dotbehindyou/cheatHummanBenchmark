var isStopped = false, remNode = null;

function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
 }

function getRemaining(){
    if(remNode == null){
        document.getElementsByClassName('e19owgy78')[0].querySelectorAll("h2").forEach(n => {
            if(!isNaN(n.innerText))
                remNode = n;
        });
        if(remNode == null)
            return 15;
    }
    return Number.parseInt(remNode.innerText);
}

async function runner () {
    var r = 1;
    while(r !== 0){
        var node = document.getElementsByClassName('e6yfngs0')[0].firstChild;
        let clickEvent = document.createEvent ('MouseEvents');
        clickEvent.initEvent ("mousedown", true, true);
        node.dispatchEvent (clickEvent);

        r = getRemaining();
    }
}