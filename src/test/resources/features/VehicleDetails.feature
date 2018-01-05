Feature: Test to verify the vehicle details

  Background: prerequisite
    Given user enters the URL
  

  Scenario Outline: Read vehicle details and assert the vehicle make
    When User clicks on start now button
    When User enters vehicle "<Registration>" number and clicks on continue
    When User confirms the vehicle details and clicks on continue
    Then Verify the vehicle make as "<ExpectedMake>"

    Examples:
   	 | Registration	| ExpectedMake	    |
     | BL06 WJU    	| HONDA	            |
     | OE07 AAX		| FORD	            |
     | AF57 UBD		| NISSAN	        |
     | RK05 BZT		| SAAB	            |
     

