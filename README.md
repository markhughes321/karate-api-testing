# Karate API Testing

Karate is an open-source tool to for API test and performance automation.

## Installation

Clone the repository

```bash
git clone https://github.com/jhads/karate.api.testing
```

Open project root folder

```bash
cd karate.api.testing
```

## Usage

Once you are in the root directory, you can run the project using the below commands

```python
# Runs all feature files
mvn test

# Removes all files generated by the previous build
mvn clean test

# Runs the project using tags
mvn clean test "-Dkarate.options=--tags @debug"

```

## Contributing

Please follow the naming convention for branches [branches](https://byorl.atlassian.net/wiki/spaces/QA/pages/1069776897/Branch+Naming+Convention).

```bash
# Branching
ticketNumber-shortDescription

# Example
HPM-875-create-repository-for-karate-api-testing-framework
```

## Documentation

[Karate API Official Documentation](https://github.com/karatelabs/karate)

[Udemy Training Course](https://www.udemy.com/course/karate-dsl-api-automation-and-performance-from-zero-to-hero/)

## Dependencies

[Java 11](https://www.oracle.com/uk/java/technologies/javase/jdk11-archive-downloads.html)

[Maven](https://www.baeldung.com/install-maven-on-windows-linux-mac)

[Video Tutorial](https://www.youtube.com/watch?v=9S5lqB11OPI&t=183s)

## VS Code Plugins

Cucumber Gherkin Full Support

Karate Runner

Java Extension Pack