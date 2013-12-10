ng-page-e2e
===========

An example showing a Protractor end to end test of angularjs.org.

This example shows how a simple page object and end to end test might be set up. It is intended as a compliment to [ng-directive-testing](https://github.com/vojtajina/ng-directive-testing), which shows how to write unit tests for the tabs directive on angularjs.org. 

End to end testing is by no means a replacement for unit testing, and writing unit test for your directives, run with Karma, is hugely useful. End to end testing is used to provide confidence that your application works together, that your front end and back end integrate, and that your final templates and user flow all work. These tests show just a small sample of what that may look like.


Install Protractor with

    npm install -g protractor
