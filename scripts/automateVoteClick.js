const puppeteer = require("puppeteer");

const automateVoteClick = async (votingOption, browser) => {
  const page = await browser.newPage();
  await page.goto("https://pollev.com/qainterview880");

  await page.waitForSelector("button.mdc-button--text");
  await page.click("button.mdc-button--text");
  await page.waitForSelector(".scrim.fixed.h-full.w-full.bg-black", {
    hidden: true,
  });

  const votingOptions = await page.$$(
    ".component-list.component-response-multiple-choice__response-options > div"
  );
  let foundVotingOption = false;

  while (!foundVotingOption && votingOptions.length > 0) {
    for (const votingOptionElement of votingOptions) {
      const button = await votingOptionElement.$("button");
      const optionName = await button.$eval(
        "div:nth-child(2)",
        (el) => el.textContent
      );

      if (optionName.toLowerCase() === votingOption.toLowerCase()) {
        foundVotingOption = true;
        await button.click();
      }
    }
  }

  if (!foundVotingOption) {
    const errorMessage =
      "Voting option not found, please check your inputted voting option and try again.";
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
};

module.exports = automateVoteClick;
