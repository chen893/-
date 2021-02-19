const arrExtend = Object.create(Array.prototype)
console.log(Array.prototype);
const arrMethods = ['push', 'pop']

arrMethods.forEach(method => {
  const oldMethod = Array.prototype[method];
  const newMethod = function(...args) {
    oldMethod.apply(this, args);
    console.log(`${method} 方法被执行了`);
  }
  arrExtend[method] = newMethod;
})
Array.prototype = Object.assign(Array.prototype, arrExtend)


const observe = data => {
  if(!data || typeof data !== 'object'){
    return ;
  }

  Object.keys(data).forEach(key => {
    let currentValue = data[key];

    observe(currentValue);

    Object.defineProperty(data,key,{
      configurable:true,
      enumerable: true,
      get() {
        console.log(`getting ${key} value now,getting value is:`,currentValue);
        return currentValue;
      },
      set(newValue) {
        currentValue = newValue;
        if( typeof newValue == 'object'){
          observe(currentValue) //当新赋值类型为对象时，为新赋值对象的值的属性添加拦截
        }
        console.log(`setting ${key} value now, setting value is`,currentValue);
      }

    })
  })
}

let data = {
  stage:'GitChat',
  course: {
    title: '前端开发进阶',
    author: ['Lucas', 'Ronaldo'],
    publishTime: '2018年5月'
  }
}
observe(data)

data.course.author.push('Messi')