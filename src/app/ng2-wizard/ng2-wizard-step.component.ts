import { Component, Input } from 'angular2/core';

@Component({
    selector: 'ng2-wizard-step',
    templateUrl: './app/ng2-wizard/ng2-wizard-step.component.html'
})
export class Ng2WizardStep {
    @Input()
    public title: string = '';
    
    public active: boolean = false;
    public visited: boolean = false;
}