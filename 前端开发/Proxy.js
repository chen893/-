let data = {
  stage: 'GitChat',
  course: {
    title: '前端开发进阶',
    author: ['Lucas'],
    publishTime: '2018年5月'
  }
}

const observe = data => {
  if( !data  || Object.prototype.toString.call(data)!== '[object object]'){
    return ;
  }

  Object.keys(data).forEach(key => {
    let currentValue = data[key]
    if(typeof currentValue === 'object') {
      observe(currentValue);
    }
  })
}