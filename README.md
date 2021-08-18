# React Employee Directory

## Project Description

The employee directory is a single-page web application built with React. It uses data fetched from the Random Users API.

## Project Screenshot

![Employee List](public/images/image1.png)

![Name Search Filter](public/images/image2.png)

![Reverse Sort by Name](public/images/image3.png)

## Link to Deployed Project

https://stevenstefanov.github.io/employee-directory

## Installation

To be able to run this application locally:

1. Make sure to install [node.js](https://nodejs.dev/) on your local machine.
2. Clone or download the employee directory repository. Navigate to the root directory of the copy in your CLI and run the following command to install all required dependencies:
```
    npm install
```
3. Lastly, run the following to start a development server on localhost:
```
    npm start
```

## Usage

* When the page loads, 20 users will be loaded in randomly from the Random Users API.
* Start typing any name in the input field to filter the currently displayed users.
* You can sort users alphabetically by name, either by ascending or descending order.
* Emails are generated as a **mailto:** link which will open your local machines' default email application.

## Credits

Thank you to Columbia's Full-Stack Web Developer bootcamp for all the assistance and for teaching me all that I have learned.

## Licence

Copyright (c) 2021 Steven Stefanov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.