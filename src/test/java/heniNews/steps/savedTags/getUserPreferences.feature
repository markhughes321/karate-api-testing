@HeniNews @SavedTags
  Feature: Get User Preferences


  Background:
    * def GetUserPreferences = read('classpath:heniNews/json/getUserPreferences.json')

  @GetUserPreferencesOk
  Scenario: Get User Preferences
    Given url newsUrl
    And request GetUserPreferences
    When method POST
    Then status 200
    And match response.data.getUserPrefs.newsletterOptIn == '#boolean'
    And match each response.data.getUserPrefs.savedTags == 
    """
      {
        'type': '#regex (geotag|artist)',
        'value': '#string',
        '__typename': 'UserPrefsTag'
      }
    """


