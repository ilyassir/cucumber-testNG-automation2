$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/googletest2.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@trynewgoog"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I go to google main page",
  "keyword": "Given "
});
formatter.match({
  "location": "Googletest2.i_go_to_google_main_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I write for \"vacuum cleaners\"",
  "keyword": "And "
});
formatter.match({
  "location": "Googletest2.i_write_for(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click search button",
  "keyword": "Then "
});
formatter.match({
  "location": "Googletest2.i_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check the title",
  "keyword": "And "
});
formatter.match({
  "location": "Googletest2.i_check_the_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the second page",
  "keyword": "Then "
});
formatter.match({
  "location": "Googletest2.i_click_on_the_second_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});