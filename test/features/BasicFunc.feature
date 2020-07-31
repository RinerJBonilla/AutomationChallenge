Feature: Validation and Bugs
    As I user, I should not be allowed to
    input incorret data when adding a ticket

    Background:
        Given I open the site

    Scenario: Should be able to fill the form
        When I fill up the form with the correct data
        Then The data should be displayed alongside the estimated cost

    Scenario: Should not accept invalid date formats
        When I type my ticket without defining the dates
        Then It should throw an Error notifing date formatting

    Scenario: Leaving Date should not be before Starting Date
        When I type my ticket and leaving date is before starting date
        Then It should throw an Error notifing bad leaving date

    Scenario: Should not acccept Invalid Date Fortmats
        When I fill the form with invalid date formats
        Then It should display an Error explaing the invalidness of the date format

    Scenario: Should not acccept Invalid Date Fortmats
        When I fill the form with invalid time formats
        Then It should display an Error explaing the invalidness of the time format