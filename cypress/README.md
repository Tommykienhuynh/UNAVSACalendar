# Cypress How to
[Cypress API](https://docs.cypress.io/api/api/table-of-contents.html)

Last updated: 04.21.2020

## Functional components

1. describe (grouping)
2. it (test)

## Common commands

```
cy.contains() // Gets the element based of html ode
cy.get() // Gets the element similar to $ from jquery
cy.should() // Assertions testing
cy.url().should("include", "URL_HERE") // Check if web link is correct
```

### Checking if parent div has elements

1. `cy.get().children.should("have.length", "NUMBER_HERE")`

### Form stuff

1. `.type()`
2. `.click()`
3. `.select()`

### Functional stuff

1. `.only`
2. `.skip`

## Helpful tools

1. VS Code extensions\
   a. Cypress snippets

`/// <reference types="cypress" />`

2. Package.json script

```
"cypress:open": "cypress open",
"cypress:run": "cypress run"
```

## File structure

1. Fixtures\
   a. For autofill content (json)
2. Integration\
   a. Put your testing files (.spec.js)
3. Plugins\
   a. Should only really have one, index.js
4. Support\
   a. Used to define commonly used JS functions or define new cypress commands

```
Cypress.Commands.add('NAME_HERE', () => {
 // CODE HERE
});
```
