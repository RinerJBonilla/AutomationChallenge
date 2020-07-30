Feature: Insert Valet Tickets

    Background:
        Given I open the site

    Scenario: Insert A valid Valet Ticket
        When I type my valet ticket down
        Then My Estimated Parking Cost should show up
