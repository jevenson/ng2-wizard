import { Component, ContentChildren, Input, QueryList, AfterContentInit } from 'angular2/core';
import { Ng2WizardTab } from './ng2-wizard-tab.component';
import { Ng2WizardStep } from './ng2-wizard-step.component';
import { INg2WizardConfig } from './ng2-wizard.config';
 
@Component({
    selector: 'ng2-wizard',
    templateUrl: './app/ng2-wizard/ng2-wizard.component.html'
})
export class Ng2Wizard implements AfterContentInit {
    
    @Input()
    private config: INg2WizardConfig;
    
    @ContentChildren(Ng2WizardTab)
    private tabs: QueryList<Ng2WizardTab>;
    
    // private get steps(): Array<Ng2WizardStep> {
    //     let steps: Array<Ng2WizardStep> = new Array<Ng2WizardStep>();
    //     
    //     this.tabs.forEach(tab => steps.concat(tab.steps.toArray()));
    //     
    //     return steps;
    // }
    
    // Allow usage of enum in template
    private NavigationDirection = NavigationDirection;
    
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
    
    constructor() { }
    
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