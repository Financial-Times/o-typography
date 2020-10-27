export default Typography;
declare class Typography {
    /**
     * Get the data attributes from the typographyEl. If typography is being set up
     * declaratively, this method is used to extract the data attributes from
     * the DOM.
     * @param {HTMLElement} typographyEl - The typography element in the DOM (Required)
     */
    static getOptions(typographyEl: HTMLElement): {};
    /**
     * Check the options passed in are valid, otherwise set defaults
     * @param {Object} opts - An Object with configuration options for typography
     * @return {Object} opts
     */
    static checkOptions(opts: any): any;
    /**
     * Initialise o-typography.
     * @param {(HTMLElement|String)} rootElement - The root element to intialise o-typography on, or a CSS selector for the root element
     * @param {Object} [options={}] - An options object for configuring o-typography
     */
    static init(rootEl: any, opts: any): Typography;
    /**
     * Class constructor.
     * @param {HTMLElement} [typographyEl] - The root element to apply typography classes.
     * @param {Object} [opts={loadOnInit: true, rejectOnFontLoadFailure: false, fontLoadedCookieName: 'o-typography-fonts-loaded'}] - An options object for configuring o-typography.
     */
    constructor(typographyEl?: HTMLElement, opts?: any);
    typographyEl: HTMLElement;
    fontLoadingPrefix: string;
    opts: any;
    hasRun: boolean;
    fontConfigs: ({
        family: string;
        weight: string;
        label: string;
    } | {
        family: string;
        weight: number;
        label: string;
    })[];
    checkFontsLoaded(): boolean;
    setCookie(): void;
    removeLoadingClasses(): void;
    loadFonts(): any;
}
