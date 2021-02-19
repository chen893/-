let data = {
  stage: 'GitChat',
  course: {
    title: '前端开发进阶',
    author: 'Lucas',
    publishTime: '2018年5月'
  }
}

Object.keys(data).forEach(key => {
  let currentValue = data[key]

  Object.defineProperty(data,key,{
    enumerable: true,
    configurable: false,
    get() {
      console.log(`getting ${key} value now,getting value is:`,currentValue);
      return currentValue;
    },
    set(newValue) {
      currentValue = newValue;
      console.log(`setting ${key} value now, setting value is:`,currentValue);
    }
  })
})
