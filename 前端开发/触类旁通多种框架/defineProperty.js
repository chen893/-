let data = {
  stage: 'GitChat',
  course: {
    title: '前端开发进阶',
    author: 'Lucas',
    publishTime: '2018年5月'
  }
}

// Object.keys(data).forEach(key => {
//   let currentValue = data[key]

//   Object.defineProperty(data,key,{
//     enumerable: true,
//     configurable: false,
//     get() {
//       console.log(`getting ${key} value now,getting value is:`,currentValue);
//       return currentValue;
//     },
//     set(newValue) {
//       currentValue = newValue;
//       console.log(`setting ${key} value now, setting value is:`,currentValue);
//     }
//   })
// })

// data.stage
// console.log(data.stage);
// data.stage.title = 'test';
// console.log(data.stage);
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
observe(data)
// data.stage= 'test';
data.course.author= {t:'t'};
data.course.author.t = 'test'
// console.log(data.stage);

