# Salary Calculator

This is a salary calculator made as an excercise for code reviewing.

---

## Requirements

### Node

Just go on [official Node.js website](https://nodejs.org/) and download the installer.

If the installation was successful, you should be able to run the following command.

    $ node --version

    $ npm --version

---

#### This project has been built on

    node v14.17.5
    npm 7.24.1

---

## Data configuration

Employee data can be changed on the following path
$ salary-calculator/data/data.txt

## Setting up environment

    $ git clone https://github.com/KazeSoftworks/salary-calculator
    $ cd salary-calculator
    $ npm i

## Testing the code

    $ npm run test

## Running the project

    $ npm run start

---

## Architecture

The architecture implemented on this project is designed based on Class Diagram Relationships

An employee has a name and can contain one or multiple Shifts that are composed of a day and when it starts and when it ends

The payment instead recieves the employee object and makes calculations depending on the shifts

![UML Class diagram](assets/UML.png?raw=true 'Title')

## Methodology

First I planned the possible components the project might need with an architecture diagram, with this I made the base folder structure

Once I defined the object models (Employee, Shift and Schedule). I created the File Reader and the Parser to be able to transform all the data from the text files to objects

The payment components are designed specifically to work with the Employee, Shift models. The first functions made were salary calculations that only had one type shift (RENE and ASTRID).

But a problem arised with two cases:

1. What happends if a work day has two shifts?
2. What happends on cases were the shift ends with 00:00 as the schedule ends in 23:59?

After dealing with this two cases several tests were made with different salaries that were manually calculated. After getting the desired results, the project is released

## Dependencies

    "jest": "^27.2.4"

This dependency is already included in package.json and is only needed for unit testing
