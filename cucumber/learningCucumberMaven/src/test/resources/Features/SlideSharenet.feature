#Author: vinaya.bahadurdesai@gmail.com
Feature: Validate the Slideshare.net Application

  Scenario Outline: Validate Login Functionality
    Given I open chrome broswer
    And Navigate to slideshare
    When I enter "<username>" "<password>"
    And click on LoginButton
    Then Login should be successful

    Examples: 
      | username  | password |
      | vinya     | success  |
      | Desai     | Fail     |
      | vinayaBVC | 123er4   |
