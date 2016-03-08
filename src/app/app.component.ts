import { Component } from 'angular2/core';
import { Ng2Wizard } from './ng2-wizard/ng2-wizard.component';
import { Ng2WizardTab } from './ng2-wizard/ng2-wizard-tab.component';
import { Ng2WizardStep } from './ng2-wizard/ng2-wizard-step.component';

@Component({
    selector: 'app',
    templateUrl: './app/app.component.html',
    directives: [Ng2Wizard, Ng2WizardTab, Ng2WizardStep]
})
export class AppComponent {
    
    onNext(): void {
        console.log("onNext");
    }
    
    onPrevious(): void {
        console.log("onPrevious");
    }
    
    onTabChange(): void {
        console.log("onTabChange");
    }
}