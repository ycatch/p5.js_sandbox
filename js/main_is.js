// main_ls.js for p5.js sandbox instance mode

let Pjs;
document.getElementById('run').onclick = function() {
    Pjs = run(Pjs);
}
document.getElementById('stop').onclick = function() {
    stop(Pjs);
}
Pjs = run(Pjs);

function stop(p5_obj) {
    if (p5_obj) {
        p5_obj.background(200);
    }
}

function run(p5_obj){

    if (p5_obj) {
        p5_obj.noCanvas();
        p5_obj.background(200);
    }

    try {
        const s = new Function("p", document.getElementById('editor').value);
        p5_obj = new p5(s, "p5Canvas");   // "p5Canvas" is div-id for Canvas
        return p5_obj;

    } catch(e) {
        alert(e);
    }
}
