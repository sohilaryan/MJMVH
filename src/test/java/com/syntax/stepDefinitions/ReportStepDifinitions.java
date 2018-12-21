package com.syntax.stepDefinitions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import com.syntax.pages.HomePage;
import com.syntax.pages.LoginPage;
import com.syntax.pages.ReportsPage;
import com.syntax.utils.BaseClass;
import com.syntax.utils.CommonMethods;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ReportStepDifinitions {

	LoginPage login;
	HomePage hPage;
	ReportsPage repPage;

	@Given("^I logged in to OrangeHRM$")
	public void i_logged_in_to_OrangeHRM() {
		login = new LoginPage();
		CommonMethods.enterValue(login.username, BaseClass.prop.getProperty("uName"));
		CommonMethods.enterValue(login.password, BaseClass.prop.getProperty("pwd"));
		CommonMethods.click(login.btnLogin);
	}

	@When("^I click on PIM also I click on Reports$")
	public void i_click_on_PIM_also_I_click_on_Reports() {
		repPage = new ReportsPage();
		CommonMethods.click(repPage.pimLink);
		CommonMethods.click(repPage.reports);

	}

	@When("^I click add$")
	public void i_click_add() {
		CommonMethods.click(repPage.addBtn);

	}

	@When("^I enter Report Name \"([^\"]*)\"$")
	public void i_enter_Report_Name(String reportName) {
		CommonMethods.enterValue(repPage.reportName, reportName);
	}

	@When("^Select Selection Criteria to \"([^\"]*)\"$")
	public void select_Selection_Criteria_to(String subUnit) {
		WebElement dd = repPage.selectionCriteriaDD;
		CommonMethods.dropDown(dd, subUnit);

	}

	@When("^Add Sub Unit$")
	public void add_Sub_Unit() {
		CommonMethods.click(repPage.selectionCriteriaAddBtn);
	}

	@When("^Select on SubUnit that matches one of the default employees \"([^\"]*)\"$")
	public void select_on_SubUnit_that_matches_one_of_the_default_employees(String sUnit) {
		WebElement subUdd = repPage.subUnitDD;
		CommonMethods.dropDown(subUdd, sUnit);
	

	}

	@When("^Select Selection Criteria to the \"([^\"]*)\"$")
	public void select_Selection_Criteria_to_the(String jobTitle) {
		WebElement jobTdd = repPage.selectionCriteriaDD;
		CommonMethods.dropDown(jobTdd, jobTitle);

	}

	@When("^Add Job Title$")
	public void add_Job_Title() {
		CommonMethods.click(repPage.selectionCriteriaAddBtn);

	}

	@When("^Select the Job Title that matches the default employee \"([^\"]*)\"$")
	public void select_the_Job_Title_that_matches_the_default_employee(String mGr) {
		WebElement iTmgr = repPage.jobTitleDD;
		CommonMethods.dropDown(iTmgr, mGr);

	}

	@When("^Select Selection Criteria To \"([^\"]*)\"$")
	public void select_Selection_Criteria_To(String getEmpName) {
		WebElement empNameDD = repPage.selectionCriteriaDD;
		CommonMethods.dropDown(empNameDD, getEmpName);

	}

	@When("^Add Employee Name$")
	public void add_Employee_Name() {
		CommonMethods.click(repPage.selectionCriteriaAddBtn);
	}

	@When("^Enter Employee Name \"([^\"]*)\" that matches the default employee$")
	public void enter_Employee_Name_that_matches_the_default_employee(String getEmpName) {
		CommonMethods.enterValue(repPage.employeeName, getEmpName);
		repPage.employeeName.sendKeys(Keys.ENTER);

	}

	@Then("^Verify Display Field Groups Personal is selected$")
	public void verify_Display_Field_Groups_is_selected() {


	}

	@Then("^Select Display Fields to \"([^\"]*)\"$")
	public void select_Display_Fields_to(String empID) {
		WebElement empDisFiDD = repPage.displayField;
		CommonMethods.dropDown(empDisFiDD, empID);

	}

	@Then("^Add Employee Id$")
	public void add_Employee_Id() {
		CommonMethods.click(repPage.displayFieldAddBtn);
	}

	@Then("^Check the box for Display Fields$")
	public void check_the_box_for_Display_Fields() {
		CommonMethods.click(repPage.displayFieldCheckBox);
	}

	@Then("^Click Save$")
	public void click_Save() {
		CommonMethods.click(repPage.reportSaveBtn);
	}

	@Then("^Validate Report Name \"([^\"]*)\" appears$")
	public void validate_Report_Name_appears(String reportN) {
		List<WebElement> rows = repPage.verifyReport;
		for (int i = 0; i < rows.size(); i++) {
			String rowData = rows.get(i).getText();
			if (rowData.contains(reportN)) {
				System.out.println("Report successfully added");
				break;
			}

		}

	}
	
	/**
	 * My second scenario starts here.
	 * @throws InterruptedException 
	 */

	@When("^I click \"([^\"]*)\" on existing Report \"([^\"]*)\" from the previous entry$")
	public void i_click_on_existing_Report_from_the_previous_entry(String editLink, String reportN) throws InterruptedException{
		List<WebElement> rows = repPage.verifyReport;
		for (int i = 0; i < rows.size(); i++) {
			String rowData = rows.get(i).getText();
			if (rowData.contains(reportN)) {
				WebElement cell = rows.get(i).findElement(By.xpath("//*[@id=\"resultTable\"]/tbody/tr[1]/td[4]/a"));
				cell.getText();
				if (cell.getText().contains(editLink)) {

				}
				cell.click();
				break;

			}

		}

Thread.sleep(3000);
	}

	@When("^Select Selection Criteria to The \"([^\"]*)\"$")
	public void select_Selection_Criteria_to_The(String ageGroup)  {
		WebElement empNameDD = repPage.selectionCriteriaDD;
		CommonMethods.dropDown(empNameDD, ageGroup);

	}

	@Then("^Add Age group$")
	public void add_Age_group() {
		CommonMethods.click(repPage.selectionCriteriaAddBtn);
	}

	@Then("^specify the age group$")
	public void specify_the_age_group() {
		WebElement ageGroup = repPage.ageGroupDD;
		Select select = new Select(ageGroup);
		select.selectByVisibleText("Less Than");
		CommonMethods.enterValue(repPage.lessThan, "25");
	}

	@When("^Select Selection Criteria\\. to \"([^\"]*)\"$")
	public void Select_Selection_Criteria_to(String location) {
		CommonMethods.click(repPage.reportSaveBtn);
		WebElement getlocation = repPage.selectionCriteriaDD;
		CommonMethods.dropDown(getlocation, location);

	}

	@Then("^Add Location$")
	public void add_Location() {
		CommonMethods.click(repPage.selectionCriteriaAddBtn);
	}

	@When("^Select the location \"([^\"]*)\" from the default menu$")
	public void select_the_location_from_the_default_menu(String canada){
//		WebElement locationDD = repPage.locationDD;
//		CommonMethods.dropDown(locationDD, canada);
		
	}

	@Then("^Select Display Fields to Employee Id$")
	public void select_Display_Fields_to_Employee_Id() {
		//WebElement empDisFiDD = repPage.displayField;
		//CommonMethods.dropDown(empDisFiDD, "sdfd");
		
	}
	
	/**
	 * My third scenario starts here.
	 * 
	 */

	@Given("^Select the Check Box for the edited Report Name \"([^\"]*)\" from table$")
	public void select_the_Check_Box_for_the_edited_Report_Name_from_table(String reportN) {

		List<WebElement> rows = repPage.verifyReport;
		for (int i = 0; i < rows.size(); i++) {
			String rowData = rows.get(i).getText();
			if (rowData.contains(reportN)) {
				WebElement cell = rows.get(i).findElement(By.tagName("td"));
				cell.getText();
				if (cell.getText().contains(reportN)) {

				}
				cell.click();
				break;

			}

		}
	}

	@Then("^Click Delete$")
	public void click_Delete() {
		CommonMethods.click(repPage.deleteBtn);
	}

	@Then("^click Ok$")
	public void click_Ok() {
		CommonMethods.click(repPage.dialogOkBtn);
	}

	@Then("^Verify Report Name \"([^\"]*)\" does not Exist$")
	public void verify_Report_Name_does_not_Exist(String reportN) {
		List<WebElement> rows = repPage.verifyReport;
		for (int i = 0; i < rows.size(); i++) {
			String rowData = rows.get(i).getText();
			if (!rowData.contains(reportN)) {
				System.out.println("Report Name does Not exist");
				break;
			}

		}

	}

}
