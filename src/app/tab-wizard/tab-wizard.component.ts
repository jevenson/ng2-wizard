import { Component, ContentChildren } from 'angular2/core';
import { Tab } from './tab.component';

@Component({
    selector: 'ng2-wizard',
    templateUrl: './app/tab-wizard/tab-wizard.component.html'
})
export class TabWizard {
    
    @ContentChildren(Tab) private tabs: Array<Tab>;
    
}