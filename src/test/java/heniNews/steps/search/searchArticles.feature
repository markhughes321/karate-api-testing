  @HeniNews @Search
  Feature: Search Articles


  Background:
    * def SearchArticles = read('classpath:heniNews/json/searchArticles.json')
    * def SearchArticlesResponse = read('classpath:heniNews/response/listArticlesResponse.json')

  @SearchArticlesOk
  Scenario: Get User Preferences
    Given url newsUrl 
    And request SearchArticles
    When method POST
    Then status 200
    And print response
    And match each response.data.searchArticles.articles == SearchArticlesResponse