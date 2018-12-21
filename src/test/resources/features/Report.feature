#Author: sohilaryan@yahoo.com
Feature: Validate Reports Functionality.
  			As an admin, I should have the ability to Add, Edit and Delete Reports.

  Background: 
    And I logged in to OrangeHRM

  Scenario: US 121336 - As an admin, I should have the ability to Add Reports.
    When I click on PIM also I click on Reports
    And I click add
    And I enter Report Name "Analysis"
    And Select Selection Criteria to "Sub Unit"
    And Add Sub Unit
    And Select Selection Criteria to the "Job Title"
    And Add Job Title
    And Select the Job Title that matches the default employee "IT Executive"
    And Select Selection Criteria To "Employee Name"
    And Add Employee Name
    And Enter Employee Name "John Smith" that matches the default employee
    Then Verify Display Field Groups Personal is selected
    And Select Display Fields to "Employee Id"
    And Add Employee Id
    And Check the box for Display Fields
    Then Click Save
    Then Validate Report Name "Analysis" appears

  Scenario: US 121336 - As an admin, I should have the ability to Edit Reports.
  
    When I click on PIM also I click on Reports
    And I click "Edit" on existing Report "Analysis" from the previous entry
    And Select Selection Criteria to The "Age Group"
    And Add Age group
    And specify the age group
    And Select Selection Criteria. to "Location"
    And Add Location
    And Select the location "Canada" from the default menu
    And Verify Display Field Groups Personal is selected
    And Select Display Fields to "Employee Id"
    And Add Employee Id
    And Check the box for Display Fields
    And Click Save
    Then Validate Report Name "Analysis" appears

  Scenario: US 121336 - As an admin, I should have the ability to Delete Reports.
    When I click on PIM also I click on Reports
    Given Select the Check Box for the edited Report Name "Analysis" from table
    Then Click Delete
    And click Ok
    Then Verify Report Name "Analysis" does not Exist
