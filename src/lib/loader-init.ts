/**
 * Runs in <head>, before first paint, so the page never flashes visible
 * before the loader hides it.
 *
 * Sets <html data-loader="..."> to:
 *   "done"    -> reduced motion, or the loader already ran this session
 *   "running" -> first visit this session; <Loader /> takes over and sets "done"
 *
 * Failsafe: if hydration fails or the loader never finishes, "running" flips
 * to "done" after 6s so content can never stay hidden.
 *
 * Without JavaScript this script never runs, no attribute is set, and the CSS
 * (which only hides content for data-loader="running") leaves the page visible.
 */
export const loaderInitScript = `(function(){try{
var d=document.documentElement;
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var seen=false;try{seen=sessionStorage.getItem('loader-seen')==='1'}catch(e){}
if(reduce||seen){d.setAttribute('data-loader','done');return}
d.setAttribute('data-loader','running');
setTimeout(function(){if(d.getAttribute('data-loader')==='running')d.setAttribute('data-loader','done')},6000);
}catch(e){}})();`;
