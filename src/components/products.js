import filicio from '../../public/assets/images/filicio.jpg';
import nevas from '../../public/assets/images/NEVAS.jpg';
import BlingH20 from '../../public/assets/images/BlingH20.jpg';
import O_Amazon from '../../public/assets/images/Amazon.jpg';
import svalbardi from '../../public/assets/images/svalbardi.jpg';
import Uisge_Source from '../../public/assets/images/Uisge Source.jpg';
import ROI from '../../public/assets/images/ROI.png';
import MINUS_181 from '../../public/assets/images/Minus_181.jpg';
import Berg from '../../public/assets/images/Berg.jpg';
import VOSS from '../../public/assets/images/VOSS.png';
import BLVD from '../../public/assets/images/BLVD.jpg';

let products = [
    {
        id: 0,
        name: 'Filicio Jewelry Water',
        price: '1390', //for one liter
        sale: false,
        capacity: [500,800,1000],
        desc: 'FILLICO produces one of the most expensive luxury brands of mineral water in the world and is famous for its extraordinary bottles.The bottle is formed from satined glass. Inlays of gold and Swarovski crystals complete the absolute picture of luxury. As such, Fillico only makes 5,000 bottles per month.',
        img: filicio,
    },
    {
        id: 1,
        name: 'NEVAS',
        price: '1180',
        sale: false,
        capacity: [500,800,1000],
        desc: 'NEVAS Water combines the water of two natural springs and thus the best of mineralization and taste. As the first cuvée in the water segment, mixed with fine sparkling carbon dioxide, NEVAS Water not only convinces with its unmistakable taste, but also with the highest quality.',
        img: nevas
    },
    {
        id: 2,
        name: 'Bling H2O',
        price: '219',
        sale: false,
        capacity: [500,800,1000],
        desc: 'BLING H20/English Mountain is virtually nitrate-free, sodium-free, and contains minimal chlorides. The 100 milligrams per liter of Bicarbonate account for the pH of 7.66, an optimal pH level for those who appreciate a slightly sweet taste. Country of Origin: U.S.A.',
        img: BlingH20
    },
    {
        id: 3,
        name: 'Svalbarði',
        price: '185',
        sale: false,
        capacity: [500,800,1000],
        desc: 'Gathered and bottled in the arctic outpost of Longyearbyen, Svalbarði iceberg water is an exclusive fine water. With no nitrates or pollutants the ultra low-minerality makes for a light mouthfeel, with a slight bite and sweetness. Svalbarði is an experience for the palate, much like a fine wine.',
        img: svalbardi
    },
    {
        id: 4,
        name: 'Ô Amazon',
        price: '110',
        sale: false,
        capacity: [500,800,1000],
        desc: 'Ô Amazon Air Water was born  of the constant search  sustainable solutions for  the development of our  Planet by development of a technology that could condense water from the air for a suitable for consumption. ',
        img: O_Amazon
    },
    {
        id: 5,
        name: 'Uisge Source',
        price: '94',
        sale: false,
        capacity: [500,800,1000],
        desc: 'A hard spring water with high mineral content to bring out the best in whiskies from the Highland region. Naturally filtered through brittle rock such as red sandstone and limestone. Sourced from St Colman'+'s Well in Ross-shire, located close to some of the popular Highland Distilleries.',
        img: Uisge_Source
    },
    {
        id: 6,
        name: 'ROI',
        price: '59',
        sale: false,
        capacity: [500,800,1000],
        desc: 'ROI water is unlike any other mineral water in the world. As the most magnesium-rich water there is, it offers various benefits, but only when enjoyed in moderation. The unique ROI mineral water provides various health effects, depending on the way it is drunk. Drink ROI fast and warm to accelerate bowel activity.',
        img: ROI
    },
    {
        id: 7,
        name: 'MINUS 181',
        price: '50',
        sale: false,
        capacity: [500,800,1000],
        desc: 'MINUS 181 - German Artesian Water. The clear, pure water of MINUS 181 rests at a depth of 181 meters. It gives a feeling of calm and balance in hectic everyday life and offers a very personal moment of silence. It is a first-class mineral water for connoisseurs and connoisseurs.',
        img: MINUS_181
    },
    {
        id: 8,
        name: 'Berg',
        price: '46',
        sale: false,
        capacity: [500,800,1000],
        desc: 'It is an all-natural, truly virginal water with no traces of minerals. Its unmistakable taste is clean, light and pure. Berg Water comes from Icebergs, a Unique Source: Our geography gives us a unique opportunity to access to this natural resource.',
        img: Berg
    },
    {
        id: 9,
        name: 'VOSS',
        price: '33',
        sale: false,
        capacity: [500,800,1000],
        desc: 'VOSS premium water is bottled at an artesian source in the pristine wilderness of Southern Norway. VOSS is shielded from pollutants for centuries under layers of ice and rock. This pristine aquifer produces a naturally pure water, free of sodium, low in minerals and incomparable in taste.',
        img: VOSS
    },
    {
        id: 10,
        name: 'BLVD',
        price: '27',
        sale: false,
        capacity: [500,800,1000],
        desc: 'Made from plastic material, the BLVD 20 L Two-piece Water Can Set body is rust-free, tough, and durable. So, you can roughly handle them without worrying about damage. Boasting a leakproof design, these water cans let you store water without the fear of leakage. So, you won'+'t find a wet mess around them due to leakage.',
        img: BLVD
    },

    
    
]

export default products.sort((a,b) => a.name > b.name);