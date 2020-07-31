Feature: Validate Inputs when Creating Tickets
    As I User, I should be able register my Tickets
    and being shown my accurate estimated cost

    Background:
        Given I open the site

    Scenario: Insert A valid Valet Ticket
        When I type my valet ticket down
        Then My Estimated valet Parking Cost should show up

    Scenario: Insert A valid Valet Ticket 2
        When I type my valet ticket down 2
        Then My Estimated valet cost should be correct

    Scenario: Insert A Valid Short Term Ticket
        When I Write my short Ticket Down
        Then My Estimated short Parking cost should show up

    Scenario: Insert A Valid Short Term Ticket 2
        When I Write my short Ticket Down 2
        Then My Estimated short cost should be correct

    Scenario: Insert A Valid Short Term Ticket 3
        When I Write my short Ticket Down 3
        Then My Estimated short cost should be correct 2

    Scenario: Insert A Valid long garage Term Ticket
        When I Write my long garage Ticket Down
        Then My Estimated long garage Parking Cost should show up

    Scenario: Insert A Valid long garage Term Ticket 2
        When I Write my long garage Ticket Down 2
        Then My Estimated long garage cost should be correct

    Scenario: Insert A Valid long garage Term Ticket 3
        When I Write my long garage Ticket Down 3
        Then My Estimated long garage cost should be correct 2

    Scenario: Insert A Valid long garage Term Ticket 4
        When I Write my long garage Ticket Down 4
        Then My Estimated long garage cost should be correct 3

    Scenario: Insert A Valid long surface Term Ticket
        When I Write my long surface Ticket Down
        Then My Estimated long surface Parking Cost should show up

    Scenario: Insert A Valid long surface Term Ticket 2
        When I Write my long surface Ticket Down 2
        Then My Estimated long surface cost should be correct

    Scenario: Insert A Valid long surface Term Ticket 3
        When I Write my long surface Ticket Down 3
        Then My Estimated long surface cost should be correct 2

    Scenario: Insert A Valid long surface Term Ticket 4
        When I Write my long surface Ticket Down 4
        Then My Estimated long surface cost should be correct 3

    Scenario: Insert A Valid economy Term Ticket
        When I Write my economy Ticket Down
        Then My Estimated economy Parking Cost should show up

    Scenario: Insert A Valid economy Term Ticket 2
        When I Write my economy Ticket Down 2
        Then My Estimated economy cost should be correct

    Scenario: Insert A Valid economy Term Ticket 3
        When I Write my economy Ticket Down 3
        Then My Estimated economy cost should be correct 2

    Scenario: Insert A Valid economy Term Ticket 4
        When I Write my economy Ticket Down 4
        Then My Estimated economy cost should be correct 3