
/**
 *
 * @param {funtction} fn funtion to execute
 * @param {number} wait delay in ms
 * @returns {funtion} debounced funtion
 */
function debounce(fn, wait) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, wait);
  };
}

/**
 * 
 * @param {funtion} fn funtion to execute
 * @param {number} wait delay in ms
 * @returns {funtion} funtion debounced funtion
 */
function debounceOld(fn, wait) {
  let timer;
  function debounced() {
    let _args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, _args);
    }, wait);
  }
  return debounced;
}

const deb = debounceOld((test = "tets") => {
  console.log(test);
}, 1000);
const input = document.getElementById("input");
input.addEventListener("keypress", (e) => {
  deb(e);
});
