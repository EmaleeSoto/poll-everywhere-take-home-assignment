# Poll Automation Script

This is my submission for Poll Everywhere's take-home assignment for the QA Engineer role. This application is responsible for automating clicking a poll option as well as automating observing the poll results both before and after a vote is clicked on.

## How to Run Locally

To run this script locally on your machine, follow these steps:

### Prerequisites

1. **Node.js and npm**: Node.js and npm need to be installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/EmaleeSoto/poll-everywhere-take-home-assignment.git
   ```

2. Navigate to the project root directory:

3. Install the **'Puppeteer'** framework using npm:

   ```bash
   npm i puppeteer
   ```
   
4. If you receive an error related to Chromium startup failure, you may need to install the Chrome Browser with the following command:

   ```bash
   npx puppeteer browsers install chrome
   ```

### Usage

The script automates the process of clicking a button. It also records the state of the poll results both before and after the clicking of the button. This allows for potential testing so that a user can later assert the expected poll result. Below are the steps to run the script in terminal.

1. Open your terminal and navigate to the project root directory.
2. Run the **'pollAutomation.js'** script with a specified voting option as a command-line argument:

   ```bash
   node pollAutomation.js <votingOption>
   ```

   Replace **'votingOption'** with the name of the specific poll option you'd like to test. If no argument is provided, the script will default to testing the **'Neutral'** poll option.

3. For the purposes of this assignment, the script returns both the previous poll results and the updated poll results. These results are printed to the console for your observation within the context of this exercise.
