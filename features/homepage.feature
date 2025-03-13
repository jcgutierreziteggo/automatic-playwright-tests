Feature: Console Home Page

  Scenario: Check title
    Given I login on Console page
    When I click menu
    When I select menu option "Panel de Transporte"
    Then I expect "Alta" to be visible
