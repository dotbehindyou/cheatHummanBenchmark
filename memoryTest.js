var isStopped = false;

async function initObsever(){
    let squareList = document.getElementsByClassName('square');

    var activeButtons = [];
    var observer;

    var clickSq = (node) => {        
        let clickEvent = document.createEvent ('MouseEvents');
        clickEvent.initEvent ("mousedown", true, true);
        node.dispatchEvent (clickEvent);
    }

    var clicker = () => {
        for(var i = 0; i < activeButtons.length; ++i){
            clickSq(activeButtons[i]);

            if(isStopped) {
                i = activeButtons.length;
            }
        }
        activeButtons = [];
        observer.disconnect();

        squareList = document.getElementsByClassName('square');

        for(var i = 0; i < squareList.length; ++i){
            observer.observe(squareList[i], { attributes: true });
        }
    };
    
    observer = new MutationObserver(mutationsList => {
        for(var i = 0; i < mutationsList.length; ++i){
            var sq = mutationsList[i].target;
            activeButtons.push(sq);
        }
        setTimeout(clicker, 200);
    });

    for(var i = 0; i < squareList.length; ++i){
        observer.observe(squareList[i], { attributes: true });
    }
}
document.getElementsByClassName('e19owgy79')[0].addEventListener('mousedown',
function(){
    setTimeout(initObsever, 1000);
});
