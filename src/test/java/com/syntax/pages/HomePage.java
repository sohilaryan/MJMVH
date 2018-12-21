package com.syntax.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.syntax.utils.BaseClass;

public class HomePage extends BaseClass{

	@FindBy(partialLinkText="Welcome")
	public WebElement welcomeLinkTxt;
	
	public String getTitle() {
		return driver.getTitle();
	}
}
