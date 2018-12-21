package com.syntax.pages;



import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


import com.syntax.utils.BaseClass;

public class ReportsPage extends BaseClass{

	@FindBy(linkText="PIM")
	public WebElement pimLink;
	
	@FindBy(linkText="Reports")
	public WebElement reports;
	
	@FindBy(id="btnAdd")
	public WebElement addBtn;
	
	@FindBy(id="report_report_name")
	public WebElement reportName;
	
	@FindBy(name="report[criteria_list]")
	public WebElement selectionCriteriaDD;
	
	
	@FindBy(id="btnAddConstraint")
	public WebElement selectionCriteriaAddBtn;
	
	@FindBy(id="report_sub_unit")
	public WebElement subUnitDD;

	@FindBy(id="report_job_title")
	public WebElement jobTitleDD;
	
	@FindBy(id="employee_name_empName")
	public WebElement employeeName;
	
	@FindBy(id="report_display_groups")
	public WebElement displayFieldGroups;
	
	@FindBy(id="report_display_field_list")
	public WebElement displayField;
	
	@FindBy(id="btnAddDisplayField")
	public WebElement displayFieldAddBtn;
	
	
	@FindBy(id="display_group_1")
	public WebElement displayFieldCheckBox;
	
	@FindBy(id="btnSave")
	public WebElement reportSaveBtn;
	
	
	@FindBy(xpath="//*[@id=\"resultTable\"]//tr")
	public List<WebElement> verifyReport;
	
	//same element stored as single webElement.
	@FindBy(xpath="//*[@id=\"resultTable\"]/tbody/tr[1]/td[4]/a")
	public WebElement verifysingleReport;
	
	
	@FindBy(id="age_group_comparision")
	public WebElement ageGroupDD;

	
	@FindBy(id="location")
	public WebElement locationDD;
	
	
	@FindBy(xpath="///*[@id=\"ohrmList_chkSelectRecord_33\"]")
	public WebElement reportCheckBox;
	
	@FindBy(id="btnDelete")
	public WebElement deleteBtn;
	
	
	@FindBy(id="dialogDeleteBtn")
	public WebElement dialogOkBtn;
	
	@FindBy(xpath="//*[@id=\"resultTable\"]/tbody/tr[1]/td[4]/a")
	public WebElement tableEditLink;
	
	@FindBy(xpath="//*[@id=\"age_group_value1\"]")
	public WebElement lessThan;
	
	public ReportsPage(){
		PageFactory.initElements(driver, this);
		
	}
	
	
		

}
