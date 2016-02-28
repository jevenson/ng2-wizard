import { Component } from 'angular2/core';
import { TabWizard } from './tab-wizard/tab-wizard.component';

@Component({
    selector: 'app',
    template: '<ng2-wizard></ng2-wizard>',
    directives: [TabWizard]
})
export class AppComponent { }