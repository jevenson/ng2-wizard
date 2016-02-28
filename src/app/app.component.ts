import { Component } from 'angular2/core';
import { Ng2Wizard } from './ng2-wizard/ng2-wizard.component';
import { Ng2WizardTab } from './ng2-wizard/ng2-wizard-tab.component';

@Component({
    selector: 'app',
    templateUrl: './app/app.component.html',
    directives: [Ng2Wizard, Ng2WizardTab]
})
export class AppComponent { }