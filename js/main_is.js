// main_ls.js for p5.js sandbox instance mode

var Pjs;
document.getElementById('run').onclick = function() {
    run();
}
document.getElementById('stop').onclick = function() {
    stop();
}
run();

function stop() {
    if (Pjs) {
        //Pjs.remove();
        Pjs.background(200);
    }
}

function run(){
    console.log("Run");
    if (Pjs) {
        //Pjs.remove();
        Pjs.noCanvas();
        Pjs.background(200);
    }

    try {
        var s = new Function("p", document.getElementById('editor').value);
        Pjs = new p5(s, "p5Canvas");
        console.log(Pjs);
    } catch(e) {
        alert(e);
    }
}
