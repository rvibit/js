const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = new Promise((resolve) => setTimeout(resolve, 2000, 3));

const PromiseAll = (promiseAry) => {
  const result = [];
  let total = 0;
  return new Promise((resolve, reject) => {
    promiseAry.forEach((item, index) => {
      Promise.resolve(item)
        .then((data) => {
          result[index] = data;
          total++;
          if (total === promiseAry.length) {
            resolve(result);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

PromiseAll([p1, p2, p3]).then((res) => console.log(res));
