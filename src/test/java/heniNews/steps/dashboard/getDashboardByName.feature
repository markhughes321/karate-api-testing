@HeniNews @Dashboard
Feature: Get Dashboard By Name


  Background:
    * def GetDashboardByName = read('classpath:heniNews/json/getDashboardByName.json')

  @GetDashboardByNameOk
  Scenario: Get Dashboard By Name
    Given url newsUrl
    And request GetDashboardByName
    When method POST
    Then status 200
    And match response.data.getDashboardByName.name == 'Damien Hirst'
    And match response.data.getDashboardByName.type == 'ARTIST'
    And match response.data.getDashboardByName.data[0].headline == 
    """
      {
        'heniMentions': '#number',
        'heniNftMentions': '#number',
        'heniProfileMentions': '#number',
        'heniShowsMentions': '#number',
        'marketSales': '#number',
        'heniScore': '#number',
        'datePeriod': 'WEEKLY',
        '__typename': 'DashboardHeadline'
      }
    """

