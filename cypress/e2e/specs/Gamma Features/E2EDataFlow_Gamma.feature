Feature: E2E DataFlow 


Scenario: User Should be able to Verify the file Name 
   
    #Given I Open the Application
    #When I click on existing engagement
    #And I Upload a file "cypress/fixtures/2021 George Bluth K1.pdf"
    #Then I Click on Search icon under File Name Column and choose contains option
    #And I Verify the searched file name

Scenario Outline: User should be able to upload multiple files

    Given I Open the Application
    When I click on existing engagement
    And I Upload a file "<fileName>"
    And I verify the status until gets complete
    Then I verify the values on the status table
    And I click on the File link
   
    @smoke
    Examples:
    |fileName|
    #|cypress/fixtures/smoke/2021 George Bluth K1.pdf|
    #|cypress/fixtures/smoke/AFRCombined.pdf|
    #|cypress/fixtures/smoke/password_protected _new.pdf|
    #|cypress/fixtures/smoke/2022-Federal K-3-K-3 All Parts-Face_1.pdf|

Scenario: User Should be able to Verify Fed K1 has Face
   
    Given I Open the Application
    When I click on existing engagement
    And I Upload a file "cypress/fixtures/2021 George Bluth K1.pdf"
    And I verify the status until gets complete
    Then I verify the values on the status table
    And I click on the File link
    And I validate the extraction of "Schedule Items"

Scenario: User Should be able to Verify Fed K1 has Footnotes
   
    Given I Open the Application
    When I click on existing engagement
    And I Upload a file "cypress/fixtures/2021 George Bluth K1.pdf"
    And I verify the status until gets complete
    Then I verify the values on the status table
    And I click on the File link
    And I validate the extraction of "Footnotes"
    And I validate the extraction of "Schedule Item Details"

Scenario: User Should be able to Verify Fed K1 has Overflow
   
    Given I Open the Application
    When I click on existing engagement
    And I Upload a file "cypress/fixtures/2021 George Bluth K1.pdf"
    And I verify the status until gets complete
    Then I verify the values on the status table
    And I click on the File link
    And I validate the extraction of "Schedule Item Details"


   