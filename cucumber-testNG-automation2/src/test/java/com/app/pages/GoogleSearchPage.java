package com.app.pages;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.app.utilities.Driver;


public class GoogleSearchPage {

	private WebDriver driver;
	public GoogleSearchPage() {
	this.driver = Driver.getDriver();
	PageFactory.initElements(driver, this);
}

	@FindBy(xpath="//*[@id=\"nav\"]/tbody/tr/td[3]/a/span")
	public WebElement ndtus;
	
	
}	