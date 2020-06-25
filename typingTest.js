var keyboardEvent = document.createEvent("KeyboardEvent");
var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";


function runner(){
    var test = document.getElementsByClassName('test-group desktop-only')[0];
    var letterMother = document.getElementsByClassName('letters')[0];
    var letters = letterMother.childNodes;

    letters.forEach(lN => {
        var char = lN.innerText[0].charCodeAt(0);
        console.log(char);
        
        test.dispatchEvent(new KeyboardEvent('keypress',{'key':lN.innerText[0]}));
    });
}
//document.getElementsByClassName('e15q442n1')[0].dispatchEvent(new KeyboardEvent('keypress',{'key':'a' }));