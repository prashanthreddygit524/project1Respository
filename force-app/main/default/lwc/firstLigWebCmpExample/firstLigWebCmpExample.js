import { LightningElement,track } from 'lwc';

export default class FirstLigWebCmpExample extends LightningElement {
    @track result='This is first example';
    invokeMe( event){
        this.result=event.target.value;
    }
}
