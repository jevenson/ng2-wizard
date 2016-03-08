import { Component, ContentChildren, Input, Output, EventEmitter, QueryList, AfterContentInit } from 'angular2/core';
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
    
    @Output()
    private onNext: EventEmitter<any> = new EventEmitter<any>();
    
    @Output()
    private onPrevious: EventEmitter<any> = new EventEmitter<any>();
    
    @Output()
    private onTabChange: EventEmitter<any> = new EventEmitter<any>();
    
    @ContentChildren(Ng2WizardTab)
    private tabs: QueryList<Ng2WizardTab>;
    
    private get steps(): Array<Ng2WizardStep> {
        let steps: Array<Ng2WizardStep> = new Array<Ng2WizardStep>();
        
        this.tabs.forEach((tab) => {
            steps = steps.concat(tab.steps.toArray());
        });

        return steps;
    }
    
    // Allow usage of enum in template
    private NavigationDirection = NavigationDirection;
    
    private get activeStep(): Ng2WizardStep {
        return this.steps.find(step => step.active);
    }
    
    private get currentStepIndex(): number {
        return this.steps.indexOf(this.activeStep);
    }
    
    private get currentTab(): Ng2WizardTab {
        return this.tabs.toArray().find(tab => tab.active);
    }
    
    private get hasNextStep(): boolean {
        return this.currentStepIndex < this.steps.length - 1;
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
            let step: Ng2WizardStep = this.steps[this.currentStepIndex + 1];
            this.deactivateAllSteps();
            step.active = true;
            this.onNext.emit(null);
            this.selectTab(step);
        }
    }
    
    private previous(): void {
        if (this.hasPreviousStep) {
            let step: Ng2WizardStep = this.steps[this.currentStepIndex - 1];
            this.deactivateAllSteps();
            step.active = true;
            this.onPrevious.emit(null);
            this.selectTab(step);
        }
    }
    
    private selectTab(newStep: Ng2WizardStep): void {
        let previousTab: Ng2WizardTab = this.currentTab;
        this.deactivateAllTabs();
        
        this.tabs.forEach((tab) => {
            tab.steps.forEach((step) => {
                 if (newStep === step) {
                     tab.active = true;
                     
                     if (previousTab !== tab) {
                         this.onTabChange.emit(null);
                     }
                     
                     return;
                 }
            });
        });
    }
    
    private deactivateAllTabs(): void {
        this.tabs.forEach((tab) => {
            tab.active = false;
        });
    }
    
    private deactivateAllSteps(): void {
        this.steps.forEach((step) => {
            step.active =  false
        });
    }
}

enum NavigationDirection {
    PREVIOUS,
    NEXT
}