import { LightningElement } hhhfrom 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'Trail togetehr';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}