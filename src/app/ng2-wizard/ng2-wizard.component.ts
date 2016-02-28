import { Component, ContentChildren, QueryList, AfterContentInit } from 'angular2/core';
import { Ng2WizardTab } from './ng2-wizard-tab.component';

@Component({
    selector: 'ng2-wizard',
    templateUrl: './app/ng2-wizard/ng2-wizard.component.html'
})
export class Ng2Wizard implements AfterContentInit {
    
    @ContentChildren(Ng2WizardTab)
    tabs: QueryList<Ng2WizardTab>;
    
    public ngAfterContentInit(): void {
        this.tabs.first.active = true;
    }
    
    private onTabClick(selectedTab: Ng2WizardTab): void {
        this.tabs.toArray().forEach((tab) => {
            tab.active = false;
        });
        
        selectedTab.active = true;
    }
}