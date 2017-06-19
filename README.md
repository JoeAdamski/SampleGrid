# SampleGrid Project

Author: Joe Adamski

A sample web page displaying a simple grid in Angular that lists elements of a security vulnerability. The grid supports column sorting.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.2 and Angular 4.2.3.



## Getting Started

1) Install the latest version of NodeJS for your platform. Available here.
https://nodejs.org/en/download/

2) Install Angular CLI using npm:
- npm install -g @angular/cli

3) Download/Unzip this repository to your local machine.

4) From a command prompt change your current directory to the project root folder. This is the folder that contains package.json file and the /src and /e2e folders.
- cd [PATH_WHERE_YOU_PUT_REPOSITORY]/SampleGrid-master
or 
- cd [PATH_WHERE_YOU_PUT_REPOSITORY]/SampleGrid


4) From the project root folder install all depenedencies using npm. This might take some time.
- npm install

5) From the project root folder start the AngularCLI webserver that runs in NodeJS. The port option is shown incase you want to change the port number.
- ng serve --port 4200

6) From your browser navigate to the following URL:
   http://localhost:4200
   

## About

### What this project demonstrates.
This project demonstrates knowledge of working with NodeJS, Angular-CLI, Angular 2+, Typescript and understanding of general coding conventions.

### How the data shown was selected.
The Vulnerability data structure based on Vercode Greenlight application sample found on web.

## The Grid Component Selection.
Several grid options were considered. Ultimately decided to go with the agGrid.
Information is avaialble here: https://www.ag-grid.com/

My General Requirements:
- Downloadable via NPM w/o license.
- Standalone grid without requiring additional component framework baggage.
- Supports sorting
- Nice styling (This one looked nice)
- Mature implementation.
- Works (Had trouble with some others)

