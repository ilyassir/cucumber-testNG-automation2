$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/GoogleTestPage.feature");
formatter.feature({
  "name": "GoogleTestForJenkinsandReposrt",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@devGoog"
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@devGoog"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the Google HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "GoogleTestPageStepDefs.i_am_on_the_Google_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search for \"testing tools\"",
  "keyword": "When "
});
formatter.match({
  "location": "GoogleTestPageStepDefs.search_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the results",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleTestPageStepDefs.i_see_the_results()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});