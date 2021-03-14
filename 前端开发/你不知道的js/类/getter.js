class CustomHTMLElement {
  constructor (element){
    this.element = element;
  }
  get html(){
    return this.element.innerHTML;
  }
  set html(value){
    return this.element.value;
  }
}

var descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype,'html');
console.log("get" in descriptor);
console.log("set" in descriptor);
console.log(descriptor.enumerable);