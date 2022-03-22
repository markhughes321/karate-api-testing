@HeniNews @Articles
Feature: Get List Articles


  Background:
    * def ListArticles = read('classpath:heniNews/json/listArticles.json')
    * def ListArticlesResponse = read('classpath:heniNews/response/listArticlesResponse.json')

  @ListArticlesOk
  Scenario: Get List Articles
    Given url newsUrl
    And request ListArticles
    When method POST
    Then status 200
    And match each response.data.listArticles.articles == ListArticlesResponse