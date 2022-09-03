// Main module:
import  gulp from "gulp";
// Import paths:
import { path } from "./gulp/config/path.js";



// Transfer variables to global:
global.app = {
    path: path,
    gulp: gulp
}


// Tasks:
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';


// Wather function:
function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
}


const mainTasks = gulp.parallel(copy, html); 


// Build the Scenario: 
const dev = gulp.series(reset, mainTasks, watcher);

// Execute the Scenario:
gulp.task('default', dev);
