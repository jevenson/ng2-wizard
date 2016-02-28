import { Component, Input } from 'angular2/core';

@Component({
    selector: 'ng2-wizard-tab',
    templateUrl: './app/ng2-wizard/ng2-wizard-tab.component.html'
})
export class Ng2WizardTab {
    @Input()
    public title: string = '';
    
    public active: boolean = false;
    public visited: boolean = false;
}