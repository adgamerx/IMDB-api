const axios = require("axios");
const cheerio = require("cheerio");
const { data } = require("cheerio/lib/api/attributes");
const searchById = require("./idresp");

async function search(term) {

  try {
    var web = await axios.get(
      `https://www.imdb.com/find?q=${term}&s=tt&exact=true&ref_=fn_al_tt_ex`
    );
  } catch {
    return null;
  }

  const $ = cheerio.load(web.data);
  var info = {};
  info.title = $(
    `#main > div > div.findSection > table > tbody > tr:nth-child(1) > td.result_text > a`
  ).text();

  info.url =
    "https://www.imdb.com/" +
    $(
      "#main > div > div.findSection > table > tbody > tr:nth-child(1) > td.result_text > a"
    ).attr("href");

  info.id = $(
    `tr.findResult:nth-child(1) > td:nth-child(2) > a:nth-child(1)`
  )[0].attribs.href.split("/")[2];

  searchById.searchById(info.id);

}

// search("avengers");

module.exports = {
  serach: search
}
