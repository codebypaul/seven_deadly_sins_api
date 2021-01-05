const router = require('express').Router()
const scraper = require('../scraper')
const Character = require('../models/Character')
const cheerio = require('cheerio')
const request = require('request')

// desc
// route
router.get('/',async (req,res)=>{
    try{
        const characters = await Character.find()
        res.status(200).json(characters)
    }catch(err){
        res.status(400)
        console.log(err);
    }
})

// desc
// route
router.get('/:name',async (req,res)=>{
    try{
        const character = await Character.findOne({name:req.params.name})
        res.status(200).json(character)
    }catch(err){
        res.status(400)
        console.log(err);
    }
})

// desc
// route
// router.post('/', async (req,res)=>{
//     try{
//         const character = await Character.findOne({
//             name:req.body.name
//         })
//         if (!character) {
//             const scrapedInfo = await scraper(`https://nanatsu-no-taizai.fandom.com/wiki/${req.body.name}`)
//             const { race,gender,birthday,height,weight,hairColor,eyeColor,bloodType,name,imgUrl } = scrapedInfo
//             const newCharacter = new Character({
//                 name,
//                 race,
//                 gender,
//                 birthday,
//                 height,
//                 weight,
//                 hairColor,
//                 eyeColor,
//                 bloodType,
//                 imgUrl
//             })
//             // this is web scraping with cheerio using the request package
//             // request(`https://nanatsu-no-taizai.fandom.com/wiki/${req.body.name}`,(error,response,html)=>{
//             //     if (!error && response.statusCode === 200){
//             //         cheerio is like using jQuery when we load cheerio we pass it all the html of the page
//             //         const $ = cheerio.load(html)
//             //         here we call our DOM element, then
//             //         $('').each((i,el)=>{
//             //             const item = $(el).text()
//             //             console.log(item);
//             //         })
//             //     }
//             // }) 
//             newCharacter.save()
//             res.status(201).json(newCharacter)
//         }else{
//             res.status(200).json(character)
//         }
//     }catch(err){
//         console.log(err)
//     }
// })

//*[@id="mw-content-text"]/div/table[1]/tbody/tr[2]/td[1]

// abilities
//*[@id="mw-content-text"]/div/ul[1]/li
//*[@id="mw-content-text"]/div/ul[1]/li

// gowther weapon
//*[@id="mw-content-text"]/div/ul[3]/li

// meliodas weapon

// desc
// route 
// router.put('/:name',async (req,res)=>{
//     const character = await Character.findOneAndUpdate({name:req.params.name})
//     res.send(character)
// })

// desc
// route
// router.delete('/:name',(req,res)=>{

// })



module.exports = router