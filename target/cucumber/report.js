$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("VehicleDetails.feature");
formatter.feature({
  "line": 1,
  "name": "Test to verify the vehicle details",
  "description": "",
  "id": "test-to-verify-the-vehicle-details",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Read vehicle details and assert the vehicle make",
  "description": "",
  "id": "test-to-verify-the-vehicle-details;read-vehicle-details-and-assert-the-vehicle-make",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User clicks on start now button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters vehicle \"\u003cRegistration\u003e\" number and clicks on continue",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User confirms the vehicle details and clicks on continue",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Verify the vehicle make as \"\u003cExpectedMake\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "test-to-verify-the-vehicle-details;read-vehicle-details-and-assert-the-vehicle-make;",
  "rows": [
    {
      "cells": [
        "Registration",
        "ExpectedMake"
      ],
      "line": 14,
      "id": "test-to-verify-the-vehicle-details;read-vehicle-details-and-assert-the-vehicle-make;;1"
    },
    {
      "cells": [
        "BL06 WJU",
        "HONDA"
      ],
      "line": 15,
      "id": "test-to-verify-the-vehicle-details;read-vehicle-details-and-assert-the-vehicle-make;;2"
    },
    {
      "cells": [
        "OE07 AAX",
        "FORD"
      ],
      "line": 16,
      "id": "test-to-verify-the-vehicle-details;read-vehicle-details-and-assert-the-vehicle-make;;3"
    },
    {
      "cells": [
        "AF57 UBD",
        "NISSAN"
      ],
      "line": 17,
      "id": "test-to-verify-the-vehicle-details;read-vehicle-details-and-assert-the-vehicle-make;;4"
    },
    {
      "cells": [
        "RK05 BZT",
        "SAAB"
      ],
      "line": 18,
      "id": "test-to-verify-the-vehicle-details;read-vehicle-details-and-assert-the-vehicle-make;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 47926184225,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "prerequisite",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user enters the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "VehicleDetailsStepDefinition.user_enters_the_URL()"
});
formatter.result({
  "duration": 8552276139,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Read vehicle details and assert the vehicle make",
  "description": "",
  "id": "test-to-verify-the-vehicle-details;read-vehicle-details-and-assert-the-vehicle-make;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User clicks on start now button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters vehicle \"BL06 WJU\" number and clicks on continue",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User confirms the vehicle details and clicks on continue",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Verify the vehicle make as \"HONDA\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "VehicleDetailsStepDefinition.user_clicks_on_start_now_button()"
});
formatter.result({
  "duration": 2818749723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BL06 WJU",
      "offset": 21
    }
  ],
  "location": "VehicleDetailsStepDefinition.user_enters_vehicle_number_and_clicks_on_continue(String)"
});
formatter.result({
  "duration": 1889759187,
  "status": "passed"
});
formatter.match({
  "location": "VehicleDetailsStepDefinition.user_confirms_the_vehicle_details()"
});
formatter.result({
  "duration": 1274070621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HONDA",
      "offset": 28
    }
  ],
  "location": "VehicleDetailsStepDefinition.verify_the_vehicle(String)"
});
formatter.result({
  "duration": 118239031,
  "status": "passed"
});
formatter.after({
  "duration": 571730782,
  "status": "passed"
});
formatter.before({
  "duration": 11692782086,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "prerequisite",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user enters the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "VehicleDetailsStepDefinition.user_enters_the_URL()"
});
formatter.result({
  "duration": 1772857047,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Read vehicle details and assert the vehicle make",
  "description": "",
  "id": "test-to-verify-the-vehicle-details;read-vehicle-details-and-assert-the-vehicle-make;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User clicks on start now button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters vehicle \"OE07 AAX\" number and clicks on continue",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User confirms the vehicle details and clicks on continue",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Verify the vehicle make as \"FORD\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "VehicleDetailsStepDefinition.user_clicks_on_start_now_button()"
});
formatter.result({
  "duration": 1054592222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OE07 AAX",
      "offset": 21
    }
  ],
  "location": "VehicleDetailsStepDefinition.user_enters_vehicle_number_and_clicks_on_continue(String)"
});
formatter.result({
  "duration": 840533214,
  "status": "passed"
});
formatter.match({
  "location": "VehicleDetailsStepDefinition.user_confirms_the_vehicle_details()"
});
formatter.result({
  "duration": 765719480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FORD",
      "offset": 28
    }
  ],
  "location": "VehicleDetailsStepDefinition.verify_the_vehicle(String)"
});
formatter.result({
  "duration": 61600076,
  "status": "passed"
});
formatter.after({
  "duration": 433164499,
  "status": "passed"
});
formatter.before({
  "duration": 6129478136,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "prerequisite",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user enters the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "VehicleDetailsStepDefinition.user_enters_the_URL()"
});
formatter.result({
  "duration": 1315490030,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Read vehicle details and assert the vehicle make",
  "description": "",
  "id": "test-to-verify-the-vehicle-details;read-vehicle-details-and-assert-the-vehicle-make;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User clicks on start now button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters vehicle \"AF57 UBD\" number and clicks on continue",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User confirms the vehicle details and clicks on continue",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Verify the vehicle make as \"NISSAN\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "VehicleDetailsStepDefinition.user_clicks_on_start_now_button()"
});
formatter.result({
  "duration": 1045381647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AF57 UBD",
      "offset": 21
    }
  ],
  "location": "VehicleDetailsStepDefinition.user_enters_vehicle_number_and_clicks_on_continue(String)"
});
formatter.result({
  "duration": 1046370882,
  "status": "passed"
});
formatter.match({
  "location": "VehicleDetailsStepDefinition.user_confirms_the_vehicle_details()"
});
formatter.result({
  "duration": 727457115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NISSAN",
      "offset": 28
    }
  ],
  "location": "VehicleDetailsStepDefinition.verify_the_vehicle(String)"
});
formatter.result({
  "duration": 54922940,
  "status": "passed"
});
formatter.after({
  "duration": 395237332,
  "status": "passed"
});
formatter.before({
  "duration": 5485725786,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "prerequisite",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user enters the URL",
  "keyword": "Given "
});
formatter.match({
  "location": "VehicleDetailsStepDefinition.user_enters_the_URL()"
});
formatter.result({
  "duration": 1269481759,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Read vehicle details and assert the vehicle make",
  "description": "",
  "id": "test-to-verify-the-vehicle-details;read-vehicle-details-and-assert-the-vehicle-make;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User clicks on start now button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters vehicle \"RK05 BZT\" number and clicks on continue",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User confirms the vehicle details and clicks on continue",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Verify the vehicle make as \"SAAB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "VehicleDetailsStepDefinition.user_clicks_on_start_now_button()"
});
formatter.result({
  "duration": 1139652667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RK05 BZT",
      "offset": 21
    }
  ],
  "location": "VehicleDetailsStepDefinition.user_enters_vehicle_number_and_clicks_on_continue(String)"
});
formatter.result({
  "duration": 921385242,
  "status": "passed"
});
formatter.match({
  "location": "VehicleDetailsStepDefinition.user_confirms_the_vehicle_details()"
});
formatter.result({
  "duration": 726294246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SAAB",
      "offset": 28
    }
  ],
  "location": "VehicleDetailsStepDefinition.verify_the_vehicle(String)"
});
formatter.result({
  "duration": 58301184,
  "status": "passed"
});
formatter.after({
  "duration": 374227937,
  "status": "passed"
});
});