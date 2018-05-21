// main.js for p5.js sandbox

let Pjs;
import { run } from "./module_run.js";
import { stop } from "./module_stop.js";
document.getElementById('run').onclick = function() {
    Pjs = run(Pjs);
}
document.getElementById('stop').onclick = function() {
    stop(Pjs);
}
Pjs = run(Pjs);
