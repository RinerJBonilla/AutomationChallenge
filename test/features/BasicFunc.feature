Feature: Validation and Bugs
    As I user, I should not be allowed to
    input incorret data when adding a ticket

    Background:
        Given I open the site

    Scenario: Should not accept invalid date formats
        When I type my ticket without defining the dates
        Then It should throw an Error notifing date formatting

    Scenario: Leaving Date should not be before Starting Date
        When I type my ticket and leaving date is before starting date
        Then It should throw an Error notifing bad leaving date