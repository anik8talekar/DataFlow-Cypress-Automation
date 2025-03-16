class MaskedEINLocators{
    DOCUMENTS_SECTION = ":nth-child(1) > .trux-tabs__tab-link"
    EXECUTIVE_REVIEW_SECTION = "//a[contains(text(),'Executive Review')]"
    EXPECTED_DOCUMENTS_SECTION = "//a[contains(text(),'Expected Documents')]"
    BUSINESS_ENTITIES = "//span[contains(text(),' Business Entities ')]"
    IMPORT_AND_EXPORT_DATA = "//span[contains(text(),' Import & Export Data ')]"
    IMPORT_EXPORT_B_E = "//div[@role='tab']//span[contains(text(),'Business Entities')]"
    SCHEDULE_ITEMS_SECTION = "//a[contains(text(),'Schedule Items')]"
    MASKED_EIN_TOGGLE_BUTTON = "//div[@class='trux-switch__handler trux-switch__handler--normal']"
    DOCUMENTS_UNMASK_EIN_VALUE1 = "//tr[@aria-rowindex='1']//td[@aria-colindex='11']//span[@class='ein-box']"
    DOCUMENTS_UNMASK_EIN_VALUE2 = "//tr[@aria-rowindex='2']//td[@aria-colindex='11']//span[@class='ein-box']"
    DOCUMENTS_MASK_EIN_VALUE1 = "//tr[@aria-rowindex='1']//td[@aria-colindex='11']//span[@class='ein-box ein-box--clickable']"
    DOCUMENTS_MASK_EIN_VALUE2 = "//tr[@aria-rowindex='2']//td[@aria-colindex='11']//span[@class='ein-box ein-box--clickable']"
    EXECUTIVE_REVIEW_UNMASK_EIN_VALUE1 = "//tr[@aria-rowindex='16']//td[@aria-colindex='4']//span"
    EXECUTIVE_REVIEW_UNMASK_EIN_VALUE2 = "//tr[@aria-rowindex='18']//td[@aria-colindex='11']"
    EXECUTIVE_REVIEW_MASK_EIN_VALUE1 = "//tr[@aria-rowindex='18']//td[@aria-colindex='4']//span[@class='ein-box ein-box--clickable']"
    EXECUTIVE_REVIEW_MASK_EIN_VALUE2 = "//tr[@aria-rowindex='18']//td[@aria-colindex='11']//span[@class='ein-box ein-box--clickable']"
    IMPORT_EXPORT_B_E_UNMASK_EIN_VALIUE1 = "//tr[@aria-rowindex='1']//td[@aria-colindex='4']//span[@class='ein-box']"
    IMPORT_EXPORT_B_E_UNMASK_EIN_VALIUE2 = "//tr[@aria-rowindex='2']//td[@aria-colindex='4']//span[@class='ein-box']"
    IMPORT_EXPORT_B_E_MASK_EIN_VALIUE1 = "//tr[@aria-rowindex='1']//td[@aria-colindex='4']//span[@class='ein-box ein-box--clickable']"
    IMPORT_EXPORT_B_E_MASK_EIN_VALIUE2 = "//tr[@aria-rowindex='2']//td[@aria-colindex='4']//span[@class='ein-box ein-box--clickable']"
    B_E_UNMASK_EIN_VALUE1 = "//tr[@aria-rowindex='1']//td[@aria-colindex='6']//span[@class='ein-box']"
    B_E_UNMASK_EIN_VALUE2 = "//tr[@aria-rowindex='2']//td[@aria-colindex='6']//span[@class='ein-box']"
    B_E_MASK_EIN_VALUE1 = "//tr[@aria-rowindex='1']//td[@aria-colindex='6']//span[@class='ein-box ein-box--clickable']"
    B_E_MASK_EIN_VALUE2 = "//tr[@aria-rowindex='1']//td[@aria-colindex='6']//span[@class='ein-box ein-box--clickable']"
    SELECT_TAX_YEAR = "//input[@placeholder='Select tax years']"
    TAX_YEAR_VALUE = "//span[@class='trux-checkbox__checkmark']"
    MASKED_EIN_TOGGLE_BUTTON_BE = "//button[@role='switch']"

}
export default MaskedEINLocators;