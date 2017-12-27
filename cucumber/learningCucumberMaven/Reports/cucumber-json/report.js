$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SlideSharenet.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: vinaya.bahadurdesai@gmail.com"
    }
  ],
  "line": 3,
  "name": "Validate the Slideshare.net Application",
  "description": "",
  "id": "validate-the-slideshare.net-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Validate Login Functionality",
  "description": "",
  "id": "validate-the-slideshare.net-application;validate-login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I open chrome broswer",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate to slideshare",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter \"\u003cusername\u003e\" \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click on LoginButton",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Login should be successful",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "validate-the-slideshare.net-application;validate-login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "validate-the-slideshare.net-application;validate-login-functionality;;1"
    },
    {
      "cells": [
        "vinya",
        "success"
      ],
      "line": 15,
      "id": "validate-the-slideshare.net-application;validate-login-functionality;;2"
    },
    {
      "cells": [
        "Desai",
        "Fail"
      ],
      "line": 16,
      "id": "validate-the-slideshare.net-application;validate-login-functionality;;3"
    },
    {
      "cells": [
        "vinayaBVC",
        "123er4"
      ],
      "line": 17,
      "id": "validate-the-slideshare.net-application;validate-login-functionality;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Validate Login Functionality",
  "description": "",
  "id": "validate-the-slideshare.net-application;validate-login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I open chrome broswer",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate to slideshare",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter \"vinya\" \"success\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click on LoginButton",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Login should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "SanityMavenTest.i_open_chrome_broswer()"
});
formatter.result({
  "duration": 6519535737,
  "status": "passed"
});
formatter.match({
  "location": "SanityMavenTest.navigate_to_slideshare()"
});
formatter.result({
  "duration": 6415618169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinya",
      "offset": 9
    },
    {
      "val": "success",
      "offset": 17
    }
  ],
  "location": "SanityMavenTest.i_enter(String,String)"
});
formatter.result({
  "duration": 1806274883,
  "status": "passed"
});
formatter.match({
  "location": "SanityMavenTest.click_on_LoginButton()"
});
formatter.result({
  "duration": 101590570,
  "status": "passed"
});
formatter.match({
  "location": "SanityMavenTest.login_should_be_successful()"
});
formatter.result({
  "duration": 61561849,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Validate Login Functionality",
  "description": "",
  "id": "validate-the-slideshare.net-application;validate-login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I open chrome broswer",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate to slideshare",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter \"Desai\" \"Fail\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click on LoginButton",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Login should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "SanityMavenTest.i_open_chrome_broswer()"
});
formatter.result({
  "duration": 4723140829,
  "status": "passed"
});
formatter.match({
  "location": "SanityMavenTest.navigate_to_slideshare()"
});
formatter.result({
  "duration": 15915233691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desai",
      "offset": 9
    },
    {
      "val": "Fail",
      "offset": 17
    }
  ],
  "location": "SanityMavenTest.i_enter(String,String)"
});
formatter.result({
  "duration": 1573726585,
  "status": "passed"
});
formatter.match({
  "location": "SanityMavenTest.click_on_LoginButton()"
});
formatter.result({
  "duration": 118250618,
  "status": "passed"
});
formatter.match({
  "location": "SanityMavenTest.login_should_be_successful()"
});
formatter.result({
  "duration": 57587595,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Validate Login Functionality",
  "description": "",
  "id": "validate-the-slideshare.net-application;validate-login-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I open chrome broswer",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate to slideshare",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter \"vinayaBVC\" \"123er4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click on LoginButton",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Login should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "SanityMavenTest.i_open_chrome_broswer()"
});
formatter.result({
  "duration": 4761802956,
  "status": "passed"
});
formatter.match({
  "location": "SanityMavenTest.navigate_to_slideshare()"
});
formatter.result({
  "duration": 12636463972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinayaBVC",
      "offset": 9
    },
    {
      "val": "123er4",
      "offset": 21
    }
  ],
  "location": "SanityMavenTest.i_enter(String,String)"
});
formatter.result({
  "duration": 1348537050,
  "status": "passed"
});
formatter.match({
  "location": "SanityMavenTest.click_on_LoginButton()"
});
formatter.result({
  "duration": 99897525,
  "status": "passed"
});
formatter.match({
  "location": "SanityMavenTest.login_should_be_successful()"
});
formatter.result({
  "duration": 49136188,
  "status": "passed"
});
});