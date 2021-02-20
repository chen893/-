const f1 = () => new Promise((resolve, reject) => {
  setTimeout(()=> {
    console.log('p1 running');
    resolve(1);
  },1000)
})

const f2 = () => new Promise((resolve,reject)=> {
  setTimeout(()=> {
    console.log('p2 running');
    resolve(2);
  },1000)
})

const array = [f1, f2];
const runPromiseInSequence = (array, value) => array.reduce(
  (promiseChain, currentFunction) => promiseChain.then(currentFunction),
  Promise.resolve(value)
)

runPromiseInSequence(array, 'init');