function throttle(fn, delay) {
  let lastRan;
  let timerId;

  return function (...args) {
    if (!lastRan) {
      fn.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        console.log(Date.now() - lastRan);
        fn.apply(this, args);
        lastRan = Date.now();
      }, delay - (Date.now() - lastRan));
    }
  };
}
