package com.syntax.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"src/test/resources/features"}
				,glue= {"com/syntax/stepDefinitions"}
				,plugin= {"pretty", "html:test-output"}
				,monochrome=true
				,strict=false
				,dryRun=false)

public class TestRunner {

}
