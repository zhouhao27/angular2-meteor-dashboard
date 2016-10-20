# Dashboard 

- Angular 2 as front end
- Meteor as backend (ready for use, but nothing implemented yet)

## Creation

Since Meteor v1.4 you can use one command to create a working Angular2 app based on this boilerplate:

```
meteor create --example angular2-boilerplate
```

### Dependecies

- ng2-bootstrap

> meteor npm i ng2-bootstrap --save

- bootstrap4

> meteor npm install --save bootstrap@4.0.0-alpha.4

- jquery

> meteor add jquery

> typings install dt~jquery --global --save

- highcharts

> meteor npm install angular2-highcharts --save

- fontawesome

> meteor add fortawesome:fontawesome

## NPM Scripts

This boilerplate comes with predefined NPM scripts, defined in `package.json`:

- `$ npm run start` - Run the Meteor application.
- `$ npm run test` - Executes Meteor in test mode with Mocha.
- `$ npm run test:ci` - Executes Meteor in test mode with Mocha for CI (run once).

## Boilerplate Contents

This boilerplate contains the basics that requires to quick start with Angular2-Meteor application.

This package contains:

- TypeScript support and Angular 2 compilers for Meteor
- Angular2-Meteor
- Angular2 (core, common, compiler, platform)
- SASS support
- Testing framework with Mocha and Chai

The Main component loads the child component, which uses the demo service that gets it's data from the demo collection.

## Folder Structure

The folder structure is a mix between [Angular 2 recommendation](https://johnpapa.net/angular-2-styles/) and [Meteor 1.3 recommendation](https://guide.meteor.com/structure.html).

#### Client

The `client` folder contains single TypeScript (`.ts`) file which is the main file (`/client/app.component.ts`), and bootstrap's the Angular 2 application.

The main component uses HTML template and SASS file.

The `index.html` file is the main HTML which loads the application by using the main component selector (`<app>`).

All the other client files are under `client/imports` and organized by the context of the components (in our example, the context is `demo`).

#### Server

The `server` folder contain single TypeScript (`.ts`) file which is the main file (`/server/main.ts`), and creates the main server instance, and the starts it.

All other server files should be located under `/server/imports`.

#### Common

Example for common files in our app, is the MongoDB collection we create - it located under `/both/demo-collection.ts` and it can be imported from both client and server code.

## Testing

The testing environment in this boilerplate based on [Meteor recommendation](https://guide.meteor.com/testing.html), and uses Mocha as testing framework along with Chai for assertion.

There is a main test file that initialize Angular 2 tests library, it located under `/client/init.test.ts`.

All other test files are located near the component/service it tests, with the `.test.ts` extension.

The `DemoComponent` contains example for Angular 2 tests for Component, and in the server side there is an example for testing Meteor collections and stub data.

## References

[SB Admin BS 4 Angular2](http://startangular.com/product/sb-admin-bootstrap-4-angular-2/)

[Meteor Angular 2 Socially](https://github.com/Urigo/meteor-angular2.0-socially)

## Todo

- Consider whether to validate the email's uniqueness
- Password new validation 
- Login activity indicator during login
- index.ts standardize 
- Not use jquery if possible
- To use npm to install bootstrap4
- sidebar toggle icon not shown and not working