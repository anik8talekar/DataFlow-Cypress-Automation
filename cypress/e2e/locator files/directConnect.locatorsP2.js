
class DirectConnectLocators{
    EDIT_PROFILE_BUTTON = "//tr[@aria-rowindex='2']//a[@truxtooltip='Edit']"
    ALLOCABLE_ITEM_TEMPLATES_TAB = "//a[contains(text(),' Allocable Item Templates ')]"
    NAME_FIELD = "//trux-input[@formcontrolname='name']"
    TRACK_TAXONOMY_DROPDOWN = "[aria-rowindex='1'] > [aria-describedby='dx-col-469'] > .dx-template-wrapper"
    SELECT_TRACK_TAXONOMY = ".dx-dropdowneditor-icon"
    EXISTING_TRACK_TAXONOMY = ".dx-scrollview-content > :nth-child(1) > .dx-item-content"
    TAXONONOMY_TEMPLATE_NAME = ".template-selector-container__field > .trux-input-select > .trux-input-wrapper > .trux-input-select__input"
    VERIFY_TEMPLATE_NAME = ".list-item-template"
    IMPORT_TEMPLATE_BUTTON = "mezz-grid-toolbar-button[label='Import Template']"
    UPLOAD_BUTTON = "//div[contains(text(),' Upload ')]"
    SCHEDULE_ITEM_NAME = "//td[contains(text(),'ORDINARY BUSINESS INCOME (LOSS)')]"
    SCHEDULE_ITEM_NAME1 = "//td[contains(text(),'DOMESTIC QUALIFIED DIVIDEND INCOME')]"
    TRACK_TAXONOMY_IF_NEGATIVE = "[aria-rowindex='1'] > [aria-describedby='dx-col-486'] > .dx-template-wrapper"
    TRACK_TAXONOMY_IF_NEGATIVE_DD = ".dx-state-hover > [aria-describedby='dx-col-486] > .dx-template-wrapper"
    SAVE_BUTTON = "//div[contains(text(),' Save ')]"
    ADD_EXPECTED_DOCUMENT_BUTTON = ".expected-document-grid__button-image"
    DIRECT_CONNECT_TOGGLE_BTN = "//trux-toggle[@formcontrolname='isDirectConnect']"
    TAX_YEAR_FIELD = ":nth-child(1) > .trux-input > .trux-input-wrapper > .trux-input__input"
    SCHEDULE_DROPDOWN = "//trux-input[@formcontrolname='scheduleId']"
    FEDERAL_K1 = ".trux-list__virtual-viewport"
    TRACK_PROFILE = "//trux-input[@formcontrolname='trackProfileId']"
    TAXONOMY_TEMPLATE_MAPPING = "//trux-input[@formcontrolname='taxonomyTemplateId']"
    INVESTOR_FIELD = "//trux-input[@formcontrolname='investorId']"
    INVESTMENT_FIELD = "//trux-input[@formcontrolname='investmentId']"
    INVESTMENT_RADIO_BTN = "label[type='radio']"
    IS_FOREIGN_OR_DOMESTIC = "//trux-input[@formcontrolname='investmentEntityIsForeign']"
    CATEGORY_FIELD = "//trux-input[@formcontrolname='category']"
    INVESTOR_SEARCH_FIELD = ".dx-editor-with-menu"
    TYPE_INVESTOR_NAME = "input[role='textbox']"
    SEARCH_TAX_YEAR = "input[inputmode='decimal']"
    VERIFY_INVESTOR_NAME = ".expected-documents-page"
    EXPECTED_DOCUMENT_PAGE = "div[class=document-center-page]"
    RESET_GRID_BUTTON = "//span[contains(text(),'Reset Grid')]"

}
export default DirectConnectLocators;