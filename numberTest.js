var isStopped = false, btn = document.getElementsByClassName('e19owgy79')[0];

async function initObsever(){
    const clickSq = (node) => {        
        let clickEvent = document.createEvent ('MouseEvents');
        clickEvent.initEvent ("mousedown", true, true);
        node.dispatchEvent (clickEvent);
    }

    var observer;

    var numberMem = document.getElementsByClassName('number-memory-test')[0];

    var currentNumber = 0;


    var selectNumber = () => {
        currentNumber = document.getElementsByClassName('big-number')[0];
        currentNumber = currentNumber.innerText;
    };
    
    observer = new MutationObserver(mutationsList => {
        var input = document.querySelector('input');
        input.value = currentNumber;
    });

    observer.observe(numberMem, { attributes: true });
    setTimeout(selectNumber, 100);
}

btn.addEventListener('mousedown', () => {
    setTimeout(initObsever, 1000);
});
