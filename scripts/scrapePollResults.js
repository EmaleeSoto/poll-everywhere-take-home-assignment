const scrapePollResults = async (page) => {
  const resultsBody = await page.$$(
    "#options_multiple_choice_poll_instance_28696495 > div"
  );

  const allResults = {};
  for (const resultWrapper of resultsBody) {
    const [percentage, numberOfVoters, option] = await Promise.all([
      resultWrapper.evaluate(
        (el) =>
          el
            .querySelector(".flex.justify-end.self-center")
            .textContent.match(/\d+/)[0]
      ),
      resultWrapper.evaluate(
        (el) =>
          el
            .querySelector(".flex.justify-end.self-center:nth-child(2)")
            .textContent.match(/\d+/)[0]
      ),
      resultWrapper.evaluate(
        (el) => el.querySelector(".break-all > span").textContent
      ),
    ]);
    allResults[option] = percentage;
    allResults[`Votes for ${option}`] = numberOfVoters;
  }
  return allResults;
};

module.exports = scrapePollResults;
