function display(val) {

    document.getElementById('result').value += val;

}

function calc() {

    let x = document.getElementById("result");

    let res = eval(x.value);

    x.value = res;

}

function clr() {

    let inp = document.getElementById("result");

    inp.value = '';

}

function back() {

    let ev = document.getElementById('result');

    ev.value = ev.value.slice(0, -1);

}