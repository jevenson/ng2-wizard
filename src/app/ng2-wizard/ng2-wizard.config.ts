export interface INg2WizardConfig {
    /**
     * @description Default Value: true. When true, next and previous buttons will appear based on navigationButtonLocation
     * @type {boolean}
     */
    showNavigationButtons: boolean;
    
    /**
     * @description Default Value: bottom. Defines the location that navigation buttons will appear. Only applies when showNavigationButtons is true
     * @type {"top" | "bottom" | "both"}
     */
    navigationButtonLocation: "top" | "bottom" | "both";
    
    /**
     * @description Default Value: false. If tab has not yet been visited, when true, the user will not be able to click the tab.
     * NOTE: This value cannot be true when showNavigationButtons is false
     * @type {boolean}
     */
    preventUnvisitedTabNavigation: boolean;
}