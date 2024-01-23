const puppeteer = require("puppeteer");
const scrapePollResults = require("./scripts/scrapePollResults.js");
const automateVoteClick = require("./scripts/automateVoteClick.js");

(async (votingOption = "Neutral") => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
  });
  try {
    const page = await browser.newPage();
    await page.goto(
      "https://viz.polleverywhere.com/multiple_choice_polls/AxE2ULWiYsaGgmZ0Zundf"
    );
    const oldVotingResults = await scrapePollResults(browser);
    await automateVoteClick(votingOption, browser);
    const updatedVotingResults = await scrapePollResults(browser);
    const pollResults = {
      "Previous Poll Results": oldVotingResults,
      "Updated Poll Results": updatedVotingResults,
    };

    // Left this console.log() for interviewer convenience
    console.log(pollResults);

    // Here we can assert changes between before and after voting click
    return pollResults;
  } catch (error) {
    console.error("An error occurred: ", error);
  } finally {
    await browser.close();
  }
})(process.argv[2]);
