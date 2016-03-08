import { Component, ContentChildren, Input, QueryList, AfterContentInit } from 'angular2/core';
import { Ng2WizardStep } from './ng2-wizard-step.component';

@Component({
    selector: 'ng2-wizard-tab',
    templateUrl: './app/ng2-wizard/ng2-wizard-tab.component.html'
})
export class Ng2WizardTab implements AfterContentInit {
    
    @Input()
    public title: string;
    
    @ContentChildren(Ng2WizardStep)
    public steps: QueryList<Ng2WizardStep>;
    
    public active: boolean = false;
    public visited: boolean = false;
    
    constructor() { }
    
    public ngAfterContentInit(): void {
        if (this.steps && this.steps.length > 0) {
            this.steps.first.active = true;
        }
    }
}