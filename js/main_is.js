// main_ls.js for p5.js sandbox instance mode

let Pjs;
import { run } from "./module_run_is.js";
import { stop } from "./module_stop_is.js";
document.getElementById('run').onclick = function() {
    Pjs = run(Pjs);
}
document.getElementById('stop').onclick = function() {
    stop(Pjs);
}
Pjs = run(Pjs);
