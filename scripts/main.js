import STARS from '../data/star.js';
import Star from '../models/star.js'
// console.log(STARS)
// console.log(Star)

const CANV = document.getElementById('big-canvas');
const ctx = CANV.getContext('2d');
const w = CANV.offsetWidth;
const h = CANV.offsetHeight;
ctx.clearRect(0, 0, w, h);

let a = new Star(ctx);
a.drawElement(20, 20, 10, 5, 0.125, 'black')