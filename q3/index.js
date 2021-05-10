const axios = require('axios');
const cheerio = require('cheerio');

const args = process.argv.slice(2)[0]
if(!args) {
    console.log('NOT FOUND FUNDCODE')
    return
}
axios({
    method: 'get', 
    url: 'https://codequiz.azurewebsites.net',
    headers: {
      Cookie: `hasCookie=true`
    }
}).then(function (response) {
    const data = response.data
    const $ = cheerio.load(data);
    const scrapedData = {};
    $('body > table > tbody > tr').each((index, element) => {
        if (index === 0) return true;
        const tds = $(element).find("td");
        const name = $(tds[0]).text();
        const nav = $(tds[1]).text();
        scrapedData[name] = nav
    })
    if(scrapedData[args]) {
        console.log(scrapedData[args])
    }else {
        console.log('NOT FOUND')
    }
})
