const puppeteer = require('puppeteer')

// const scraper = async (url)=>{
module.exports = async (url)=>{
    // launch browser
    const browser = await puppeteer.launch()
    // navigate to new page
    const page = await browser.newPage()
    // go to the page specified by the input url
    await page.goto(url)

    const [el] = await page.$x('//*[@id="pi-tab-0"]/figure/a/img')
    const src = await el.getProperty('src')
    const imgUrl = await src.jsonValue()
    
    const [el2] = await page.$x('//*[@id="mw-content-text"]/div/aside/section[2]/div[1]/div')
    const txt = await el2.getProperty('textContent')
    const race = await txt.jsonValue()
    
    const [el3] = await page.$x('//*[@id="mw-content-text"]/div/aside/section[2]/div[2]/div')
    const txt2 = await el3.getProperty('textContent')
    const gender = await txt2.jsonValue()

    const [el4] = await page.$x('//*[@id="mw-content-text"]/div/aside/section[2]/div[3]/div')
    const txt3 = await el4.getProperty('textContent')
    const age = await txt3.jsonValue()

    const [el5] = await page.$x('//*[@id="mw-content-text"]/div/aside/section[2]/div[5]/div')
    const txt4 = await el5.getProperty('textContent')
    const birthday =  await txt4.jsonValue()

    const [el6] = await page.$x('//*[@id="mw-content-text"]/div/aside/section[2]/div[6]/div')
    const txt5 = await el6.getProperty('textContent')
    const height = await txt5.jsonValue()
    
    const [el7] = await page.$x('//*[@id="mw-content-text"]/div/aside/section[2]/div[7]/div')
    const txt6 = await el7.getProperty('textContent')
    const weight = await txt6.jsonValue()

    const [el8] = await page.$x('//*[@id="mw-content-text"]/div/aside/section[2]/div[8]/div')
    const txt7 = await el8.getProperty('textContent')
    const hairColor = await txt7.jsonValue()

    const [el9] = await page.$x('//*[@id="mw-content-text"]/div/aside/section[2]/div[9]/div')
    const txt8 = await el9.getProperty('textContent')
    const eyeColor = await txt8.jsonValue()

    let bloodType
    const [el10] = await page.$x('//*[@id="mw-content-text"]/div/aside/section[2]/div[10]/div')
    if (typeof el10 === 'undefined'){
        bloodType = null
    }else{
        const txt9 = await el10.getProperty('textContent')
        bloodType = await txt9.jsonValue()
    }

    // const [el11] = await page.$x('//*[@id="mw-content-text"]/div/aside/section[3]/div[2]/div/a[1]')
    // const txt10 = await el11.getProperty('textContent')
    // const affiliation = await txt10.jsonValue()


    const [el12] = await page.$x('//*[@id="mw-content-text"]/div/aside/h2')
    const txt11 = await el12.getProperty('textContent')
    const name = await txt11.jsonValue()

    browser.close()
    return {imgUrl,race,gender,age,birthday,height,weight,hairColor,eyeColor,bloodType,name}
}
// scraper(`https://nanatsu-no-taizai.fandom.com/wiki/Gowther`)
