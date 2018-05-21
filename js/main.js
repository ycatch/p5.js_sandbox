// main.js for p5.js sandbox

var Pjs;
document.getElementById('run').onclick = function() {
    run();
}
document.getElementById('stop').onclick = function() {
    stop();
}
run()

function stop() {
    if (Pjs) {
        //remove();
        background(200);
    }
}

function run() {
    //console.log("Run");
    if (Pjs) {
        background(200);
    }

    try {
        var s = new Function("p", document.getElementById('editor').value);
        Pjs = new p5(s);
        //console.log(Pjs);
    } catch (e) {
        alert(e);
    }
}
