# Task Board

A full-stack Task Board application built with **Angular** and **Firebase Cloud Firestore**.

The project was developed as part of my Full-Stack Development learning and gave me practical experience building a complete CRUD application, working with cloud data persistence, Git/GitHub, responsive styling and application security.

## Features

* Create new tasks
* Read and display tasks from Cloud Firestore
* Update existing tasks
* Delete tasks
* Track task completion status
* Colour-coded tasks
* Task timestamps
* Individual task update routes
* Responsive layout
* Empty-state handling
* Firestore data persistence

## Technologies

* **Angular**
* **TypeScript**
* **Firebase**
* **Cloud Firestore**
* **Tailwind CSS**
* **Git**
* **GitHub**

## 📚 What I Learned

This project helped me strengthen my understanding of:

* Angular components and routing
* TypeScript interfaces and type safety
* Firebase and Cloud Firestore
* CRUD operations
* Working with asynchronous data
* Git and GitHub workflows
* Responsive UI development
* Tailwind CSS
* Debugging and troubleshooting
* Environment variables
* Basic web application security

### Learning a New Technology

During development I introduced **Tailwind CSS**, which was new to me at the start of the project.

Rather than treating it as a separate learning exercise, I learned the framework while building the application and applied it directly to the project's UI.

## Security

During development, I identified that a Firebase API key had been publicly exposed through the project repository.

I revoked the exposed key, created and configured a replacement, and reviewed the project's environment-variable and Git configuration to prevent credentials from being committed again.

This became an important practical lesson in treating security as part of the development process rather than something to consider after an application is finished.

##  Development Process

The project involved more than simply getting the CRUD functionality working.

I worked through issues involving:

* Angular routing
* Firebase/Cloud Firestore integration
* Form data
* Updating and deleting Firestore documents
* TypeScript interfaces
* Environment configuration
* Git/GitHub
* API key security
* Responsive styling

Each problem provided an opportunity to investigate the cause, test a solution and verify the result.

##  Project Outcome

The completed application demonstrates my growing ability to take a web application from an initial idea through to a working cloud-connected application.

It also reflects my approach to learning software development:

**Understand the problem → build → debug → test → secure → improve.**

## 📹 Project Demo

A demonstration video of the completed Task Board application is available as part of my project portfolio.

https://www.linkedin.com/feed/update/urn:li:activity:7506354479072624641/

## 👨‍💻 About

I'm developing my skills toward a career as a **Junior Software Developer**, with a current focus on **JavaScript, TypeScript, Angular, Firebase/Cloud Firestore and modern development workflows**.

This project represents another step in building practical software engineering experience through hands-on development.


# TaskBoard

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
