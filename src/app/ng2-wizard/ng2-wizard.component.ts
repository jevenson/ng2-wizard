import { Component, ContentChildren, QueryList, AfterContentInit } from 'angular2/core';
import { Ng2WizardTab } from './ng2-wizard-tab.component';

@Component({
    selector: 'ng2-wizard',
    templateUrl: './app/ng2-wizard/ng2-wizard.component.html'
})
export class Ng2Wizard implements AfterContentInit {
    
    // Allow usage of enum in template
    private NavigationDirection = NavigationDirection;
    
    @ContentChildren(Ng2WizardTab)
    private tabs: QueryList<Ng2WizardTab>;
    
    private get activeTab(): Ng2WizardTab {
        return this.tabs.toArray().find(tab => tab.active);
    }
    
    private get currentStepIndex(): number {
        return this.tabs.toArray().indexOf(this.activeTab);
    }
    
    private get hasNextStep(): boolean {
        return this.currentStepIndex < this.tabs.length - 1;
    }
    
    private get hasPreviousStep(): boolean {
        return this.currentStepIndex > 0;
    }
    
    public ngAfterContentInit(): void {
        this.tabs.first.active = true;
    }
    
    private onTabClick(selectedTab: Ng2WizardTab): void {
        this.deactivateAllTabs();
        selectedTab.active = true;
    }
    
    private onButtonClick(direction: NavigationDirection): void {
        switch (direction) {
            case NavigationDirection.NEXT:
                this.next();
                break;
            case NavigationDirection.PREVIOUS:
                this.previous();
                break;
            default:
                throw new Error(direction + " is not a valid NavigationDirection");
        }
    }
    
    private next(): void {
        if (this.hasNextStep) {
            let tab: Ng2WizardTab = this.tabs.toArray()[this.currentStepIndex + 1];
            this.deactivateAllTabs();
            tab.active = true;
        }
    }
    
    private previous(): void {
        if (this.hasPreviousStep) {
            let tab: Ng2WizardTab = this.tabs.toArray()[this.currentStepIndex - 1];
            this.deactivateAllTabs();
            tab.active = true;
        }
    }
    
    private deactivateAllTabs(): void {
        this.tabs.forEach((tab) => {
            tab.active = false;
        });
    }
}

enum NavigationDirection {
    PREVIOUS,
    NEXT
}