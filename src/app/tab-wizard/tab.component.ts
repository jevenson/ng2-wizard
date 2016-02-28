import { Component, Input } from 'angular2/core';

@Component({
    selector: 'ng2-wizard-tab',
    templateUrl: './app/tab-wizard/tab.component.html'
})
export class Tab {
    @Input() public tabTitle: string;
    
    public active: boolean;
    public visited: boolean;
}