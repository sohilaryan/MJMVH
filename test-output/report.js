$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3146288946,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "OrangeHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_log_is_displayed()"
});
formatter.result({
  "duration": 149433685,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Valid Login",
  "description": "",
  "id": "login-feature;valid-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I enter \"admin\" and \"admin123\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 9
    },
    {
      "val": "admin123",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 316899828,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 1086339227,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_successfully_logged_in()"
});
formatter.result({
  "duration": 39773,
  "status": "passed"
});
formatter.after({
  "duration": 27716,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see erro message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login-feature;invalid-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ],
      "line": 18,
      "id": "login-feature;invalid-login;;1"
    },
    {
      "cells": [
        "admin",
        "Mondy",
        "Invalid credentials"
      ],
      "line": 19,
      "id": "login-feature;invalid-login;;2"
    },
    {
      "cells": [
        "Monkey",
        "admin123",
        "Invalid credentials"
      ],
      "line": 20,
      "id": "login-feature;invalid-login;;3"
    },
    {
      "cells": [
        "Monkey",
        "Monkey123",
        "Invalid credentials"
      ],
      "line": 21,
      "id": "login-feature;invalid-login;;4"
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ],
      "line": 22,
      "id": "login-feature;invalid-login;;5"
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ],
      "line": 23,
      "id": "login-feature;invalid-login;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2520798227,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "OrangeHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_log_is_displayed()"
});
formatter.result({
  "duration": 53761067,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I enter \"admin\" and \"Mondy\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see erro message \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 9
    },
    {
      "val": "Mondy",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 293897608,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 721927926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 20
    }
  ],
  "location": "LoginPageSteps.i_see_erro_message(String)"
});
formatter.result({
  "duration": 30685077,
  "status": "passed"
});
formatter.after({
  "duration": 11815,
  "status": "passed"
});
formatter.before({
  "duration": 2419001783,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "OrangeHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_log_is_displayed()"
});
formatter.result({
  "duration": 60082929,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I enter \"Monkey\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see erro message \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Monkey",
      "offset": 9
    },
    {
      "val": "admin123",
      "offset": 22
    }
  ],
  "location": "LoginPageSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 283455275,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 317072939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 20
    }
  ],
  "location": "LoginPageSteps.i_see_erro_message(String)"
});
formatter.result({
  "duration": 34020201,
  "status": "passed"
});
formatter.after({
  "duration": 11633,
  "status": "passed"
});
formatter.before({
  "duration": 2440312835,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "OrangeHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_log_is_displayed()"
});
formatter.result({
  "duration": 43527116,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I enter \"Monkey\" and \"Monkey123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see erro message \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Monkey",
      "offset": 9
    },
    {
      "val": "Monkey123",
      "offset": 22
    }
  ],
  "location": "LoginPageSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 302244741,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 342268068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 20
    }
  ],
  "location": "LoginPageSteps.i_see_erro_message(String)"
});
formatter.result({
  "duration": 41030203,
  "status": "passed"
});
formatter.after({
  "duration": 12512,
  "status": "passed"
});
formatter.before({
  "duration": 2584800732,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "OrangeHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_log_is_displayed()"
});
formatter.result({
  "duration": 42984920,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I enter \"\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see erro message \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    },
    {
      "val": "admin123",
      "offset": 16
    }
  ],
  "location": "LoginPageSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 269547172,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 126323240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 20
    }
  ],
  "location": "LoginPageSteps.i_see_erro_message(String)"
});
formatter.result({
  "duration": 45119770,
  "status": "passed"
});
formatter.after({
  "duration": 21359,
  "status": "passed"
});
formatter.before({
  "duration": 2457362009,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "OrangeHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_log_is_displayed()"
});
formatter.result({
  "duration": 51218436,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I enter \"Admin\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see erro message \"Password cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 9
    },
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 300353381,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 128953444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot be empty",
      "offset": 20
    }
  ],
  "location": "LoginPageSteps.i_see_erro_message(String)"
});
formatter.result({
  "duration": 43043474,
  "status": "passed"
});
formatter.after({
  "duration": 23921,
  "status": "passed"
});
formatter.uri("Report.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: sohilaryan@yahoo.com"
    }
  ],
  "line": 2,
  "name": "Validate Reports Functionality.",
  "description": "\t\t\tAs an admin, I should have the ability to Add, Edit and Delete Reports.",
  "id": "validate-reports-functionality.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2437735866,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I logged in to OrangeHRM",
  "keyword": "And "
});
formatter.match({
  "location": "ReportStepDifinitions.i_logged_in_to_OrangeHRM()"
});
formatter.result({
  "duration": 1393561821,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "US 121336 - As an admin, I should have the ability to Add Reports.",
  "description": "",
  "id": "validate-reports-functionality.;us-121336---as-an-admin,-i-should-have-the-ability-to-add-reports.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I click on PIM also I click on Reports",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click add",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Report Name \"Analysis\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select Selection Criteria to \"Sub Unit\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Add Sub Unit",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select Selection Criteria to the \"Job Title\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Add Job Title",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select the Job Title that matches the default employee \"IT Executive\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select Selection Criteria To \"Employee Name\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Add Employee Name",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Enter Employee Name \"John Smith\" that matches the default employee",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify Display Field Groups Personal is selected",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Select Display Fields to \"Employee Id\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Add Employee Id",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Check the box for Display Fields",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click Save",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Validate Report Name \"Analysis\" appears",
  "keyword": "Then "
});
formatter.match({
  "location": "ReportStepDifinitions.i_click_on_PIM_also_I_click_on_Reports()"
});
formatter.result({
  "duration": 1418479609,
  "status": "passed"
});
formatter.match({
  "location": "ReportStepDifinitions.i_click_add()"
});
formatter.result({
  "duration": 513192077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Analysis",
      "offset": 21
    }
  ],
  "location": "ReportStepDifinitions.i_enter_Report_Name(String)"
});
formatter.result({
  "duration": 195147057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sub Unit",
      "offset": 30
    }
  ],
  "location": "ReportStepDifinitions.select_Selection_Criteria_to(String)"
});
formatter.result({
  "duration": 113415869,
  "status": "passed"
});
formatter.match({
  "location": "ReportStepDifinitions.add_Sub_Unit()"
});
formatter.result({
  "duration": 108804898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Job Title",
      "offset": 34
    }
  ],
  "location": "ReportStepDifinitions.select_Selection_Criteria_to_the(String)"
});
formatter.result({
  "duration": 97120079,
  "status": "passed"
});
formatter.match({
  "location": "ReportStepDifinitions.add_Job_Title()"
});
formatter.result({
  "duration": 81315675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IT Executive",
      "offset": 56
    }
  ],
  "location": "ReportStepDifinitions.select_the_Job_Title_that_matches_the_default_employee(String)"
});
formatter.result({
  "duration": 101530054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employee Name",
      "offset": 30
    }
  ],
  "location": "ReportStepDifinitions.select_Selection_Criteria_To(String)"
});
formatter.result({
  "duration": 64163571,
  "status": "passed"
});
formatter.match({
  "location": "ReportStepDifinitions.add_Employee_Name()"
});
formatter.result({
  "duration": 101886257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Smith",
      "offset": 21
    }
  ],
  "location": "ReportStepDifinitions.enter_Employee_Name_that_matches_the_default_employee(String)"
});
formatter.result({
  "duration": 285622302,
  "status": "passed"
});
formatter.match({
  "location": "ReportStepDifinitions.verify_Display_Field_Groups_is_selected()"
});
formatter.result({
  "duration": 17712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employee Id",
      "offset": 26
    }
  ],
  "location": "ReportStepDifinitions.select_Display_Fields_to(String)"
});
formatter.result({
  "duration": 66350832,
  "status": "passed"
});
formatter.match({
  "location": "ReportStepDifinitions.add_Employee_Id()"
});
formatter.result({
  "duration": 111306270,
  "status": "passed"
});
formatter.match({
  "location": "ReportStepDifinitions.check_the_box_for_Display_Fields()"
});
formatter.result({
  "duration": 109322147,
  "status": "passed"
});
formatter.match({
  "location": "ReportStepDifinitions.click_Save()"
});
formatter.result({
  "duration": 646112500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Analysis",
      "offset": 22
    }
  ],
  "location": "ReportStepDifinitions.validate_Report_Name_appears(String)"
});
formatter.result({
  "duration": 83679391,
  "status": "passed"
});
formatter.after({
  "duration": 12342,
  "status": "passed"
});
formatter.before({
  "duration": 2405891438,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I logged in to OrangeHRM",
  "keyword": "And "
});
formatter.match({
  "location": "ReportStepDifinitions.i_logged_in_to_OrangeHRM()"
});
formatter.result({
  "duration": 1465726475,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "US 121336 - As an admin, I should have the ability to Edit Reports.",
  "description": "",
  "id": "validate-reports-functionality.;us-121336---as-an-admin,-i-should-have-the-ability-to-edit-reports.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I click on PIM also I click on Reports",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click \"Edit\" on existing Report \"Analysis\" from the previous entry",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Select Selection Criteria to The \"Age Group\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Add Age group",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "specify the age group",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Select Selection Criteria. to \"Location\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Add Location",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Select the location \"Canada\" from the default menu",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Verify Display Field Groups Personal is selected",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Select Display Fields to \"Employee Id\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Add Employee Id",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Check the box for Display Fields",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Click Save",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Validate Report Name \"Analysis\" appears",
  "keyword": "Then "
});
formatter.match({
  "location": "ReportStepDifinitions.i_click_on_PIM_also_I_click_on_Reports()"
});
formatter.result({
  "duration": 1473183963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edit",
      "offset": 9
    },
    {
      "val": "Analysis",
      "offset": 35
    }
  ],
  "location": "ReportStepDifinitions.i_click_on_existing_Report_from_the_previous_entry(String,String)"
});
formatter.result({
  "duration": 3627783576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Age Group",
      "offset": 34
    }
  ],
  "location": "ReportStepDifinitions.select_Selection_Criteria_to_The(String)"
});
formatter.result({
  "duration": 94216839,
  "status": "passed"
});
formatter.match({
  "location": "ReportStepDifinitions.add_Age_group()"
});
formatter.result({
  "duration": 110094345,
  "status": "passed"
});
formatter.match({
  "location": "ReportStepDifinitions.specify_the_age_group()"
});
formatter.result({
  "duration": 103532248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Location",
      "offset": 31
    }
  ],
  "location": "ReportStepDifinitions.Select_Selection_Criteria_to(String)"
});
formatter.result({
  "duration": 104775517,
  "status": "passed"
});
formatter.match({
  "location": "ReportStepDifinitions.add_Location()"
});
formatter.result({
  "duration": 81053671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Canada",
      "offset": 21
    }
  ],
  "location": "ReportStepDifinitions.select_the_location_from_the_default_menu(String)"
});
formatter.result({
  "duration": 53240,
  "status": "passed"
});
formatter.match({
  "location": "ReportStepDifinitions.verify_Display_Field_Groups_is_selected()"
});
formatter.result({
  "duration": 17744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employee Id",
      "offset": 26
    }
  ],
  "location": "ReportStepDifinitions.select_Display_Fields_to(String)"
});
formatter.result({
  "duration": 15181209281,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: Employee Id\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Sohils-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:499:aaf6:9d3c:45ce%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:151)\n\tat com.syntax.utils.CommonMethods.dropDown(CommonMethods.java:26)\n\tat com.syntax.stepDefinitions.ReportStepDifinitions.select_Display_Fields_to(ReportStepDifinitions.java:125)\n\tat ✽.And Select Display Fields to \"Employee Id\"(Report.feature:38)\n",
  "status": "failed"
});
formatter.match({
  "location": "ReportStepDifinitions.add_Employee_Id()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReportStepDifinitions.check_the_box_for_Display_Fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReportStepDifinitions.click_Save()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Analysis",
      "offset": 22
    }
  ],
  "location": "ReportStepDifinitions.validate_Report_Name_appears(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10079,
  "status": "passed"
});
formatter.before({
  "duration": 2467279781,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I logged in to OrangeHRM",
  "keyword": "And "
});
formatter.match({
  "location": "ReportStepDifinitions.i_logged_in_to_OrangeHRM()"
});
formatter.result({
  "duration": 1316042316,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "US 121336 - As an admin, I should have the ability to Delete Reports.",
  "description": "",
  "id": "validate-reports-functionality.;us-121336---as-an-admin,-i-should-have-the-ability-to-delete-reports.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "I click on PIM also I click on Reports",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "Select the Check Box for the edited Report Name \"Analysis\" from table",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "Click Delete",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "click Ok",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Verify Report Name \"Analysis\" does not Exist",
  "keyword": "Then "
});
formatter.match({
  "location": "ReportStepDifinitions.i_click_on_PIM_also_I_click_on_Reports()"
});
formatter.result({
  "duration": 1397495373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Analysis",
      "offset": 49
    }
  ],
  "location": "ReportStepDifinitions.select_the_Check_Box_for_the_edited_Report_Name_from_table(String)"
});
formatter.result({
  "duration": 199861373,
  "status": "passed"
});
formatter.match({
  "location": "ReportStepDifinitions.click_Delete()"
});
formatter.result({
  "duration": 167056442,
  "status": "passed"
});
formatter.match({
  "location": "ReportStepDifinitions.click_Ok()"
});
formatter.result({
  "duration": 453132675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Analysis",
      "offset": 20
    }
  ],
  "location": "ReportStepDifinitions.verify_Report_Name_does_not_Exist(String)"
});
formatter.result({
  "duration": 38377462,
  "status": "passed"
});
formatter.after({
  "duration": 27083,
  "status": "passed"
});
});