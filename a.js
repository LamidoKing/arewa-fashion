import mongoose from 'mongoose'
import { Product } from './src/models'
import { PORT, PROD, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, APP_SECRET } from './src/config'

const { ObjectId } = mongoose.Types
const products = [
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: 'Gray Hooded Sweatshirt',
    slogan: 'The top hooded sweatshirt we offer',
    description:
      "Unless you live in a nudist colony, there are moments when the chill you feel demands that you put on something warm, and for those times, there's nothing better than this sharp MongoDB hoodie. Made of 100% cotton, this machine washable, mid-weight hoodie is all you need to stay comfortable when the temperature drops. And, since being able to keep your vital stuff with you is important, the hoodie features two roomy kangaroo pockets to ensure nothing you need ever gets lost.",
    stars: 0,
    category: 'Apparel',
    image: '/img/products/hoodie.jpg',
    price: 29.99
  },
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: 'Coffee Mug',
    slogan: 'Keep your coffee hot!',
    description:
      'A mug is a type of cup used for drinking hot beverages, such as coffee, tea, hot chocolate or soup. Mugs usually have handles, and hold a larger amount of fluid than other types of cup. Usually a mug holds approximately 12 US fluid ounces (350 ml) of liquid; double a tea cup. A mug is a less formal style of drink container and is not usually used in formal place settings, where a teacup or coffee cup is preferred.',
    stars: 0,
    category: 'Kitchen',
    image: '/img/products/mug.jpg',
    price: 12.5,
    reviews: [ { name: '', comment: '', stars: 5, date: 1.456067725049e12 } ]
  },
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: 'Stress Ball',
    slogan: 'Squeeze your stress away',
    description:
      'The moment life piles more onto your already heaping plate and you start feeling hopelessly overwhelmed, take a stress ball in hand and squeeze as hard as you can. Take a deep breath and just let that tension go. Repeat as needed. It will all be OK! Having something small, portable and close at hand is a must for stress management.',
    stars: 0,
    category: 'Swag',
    image: '/img/products/stress-ball.jpg',
    price: 5.0
  },
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: 'Track Jacket',
    slogan: 'Go to the track in style!',
    description:
      "Crafted from ultra-soft combed cotton, this essential jacket features sporty contrast tipping and MongoDB's signature embroidered leaf.",
    stars: 0,
    category: 'Apparel',
    image: '/img/products/track-jacket.jpg',
    price: 45.0,
    reviews: [
      { name: 'Shannon', comment: 'This is so warm and comfortable.', stars: 2, date: 1.455800194995e12 },
      { name: 'Bob', comment: 'Love this.', stars: 5, date: 1.455804800769e12 },
      { name: 'Jorge', comment: "Brown. It's brown.", stars: 4, date: 1.455804825509e12 }
    ]
  },
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: "Women's T-shirt",
    slogan: 'MongoDB shirt in-style',
    description:
      "Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB's signature leaf.",
    stars: 0,
    category: 'Apparel',
    image: '/img/products/white-mongo.jpg',
    price: 45.0
  },
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: 'Brown Carry-all Bag',
    slogan: 'Keep extra items here',
    description:
      'Let your style speak for itself with this chic brown carry-all bag. Featuring a nylon exterior with solid contrast trim, brown in color, and MongoDB logo',
    stars: 0,
    category: 'Swag',
    image: '/img/products/brown-bag.jpg',
    price: 5.0
  },
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: 'Brown Tumbler',
    slogan: 'Bring your coffee to go',
    description:
      'The MongoDB Insulated Travel Tumbler is smartly designed to maintain temperatures and go anywhere. Dual wall construction will keep your beverages hot or cold for hours and a slide lock lid helps minimize spills.',
    stars: 0,
    category: 'Kitchen',
    image: '/img/products/brown-tumbler.jpg',
    price: 9.0
  },
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: 'Pen (Green)',
    slogan: "The only pen you'll ever need",
    description:
      'Erase and rewrite repeatedly without damaging documents. The needlepoint tip creates clear precise lines and the thermo-sensitive gel ink formula disappears with erasing friction.',
    stars: 0,
    category: 'Office',
    image: '/img/products/green-pen.jpg',
    price: 2.0
  },
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: 'Pen (Black)',
    slogan: "The only pen you'll ever need",
    description:
      'Erase and rewrite repeatedly without damaging documents. The needlepoint tip creates clear precise lines and the thermo-sensitive gel ink formula disappears with erasing friction.',
    stars: 0,
    category: 'Office',
    image: '/img/products/pen.jpg',
    price: 2.0
  },
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: 'Green T-shirt',
    slogan: 'MongoDB community shirt',
    description:
      "Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB's signature leaf.",
    stars: 0,
    category: 'Apparel',
    image: '/img/products/green-tshirt.jpg',
    price: 20.0
  },
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: 'MongoDB The Definitive Guide',
    slogan: '2nd Edition',
    description:
      'Manage the huMONGOus amount of data collected through your web application with MongoDB. This authoritative introduction—written by a core contributor to the project—shows you the many advantages of using document-oriented databases, and demonstrates how this reliable, high-performance system allows for almost infinite horizontal scalability.',
    stars: 0,
    category: 'Books',
    image: '/img/products/guide-book.jpg',
    price: 20.0
  },
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: 'Leaf Sticker',
    slogan: 'Add to your sticker collection',
    description:
      'Waterproof vinyl, will last 18 months outdoors.  Ideal for smooth flat surfaces like laptops, journals, windows etc.  Easy to remove.  50% discounts on all orders of any 6+',
    stars: 0,
    category: 'Stickers',
    image: '/img/products/leaf-sticker.jpg',
    price: 1.0
  },
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: 'USB Stick (Green)',
    slogan: '1GB of space',
    description:
      "MongoDB's Turbo USB 3.0 features lightning fast transfer speeds of up to 10X faster than standard MongoDB USB 2.0 drives. This ultra-fast USB allows for fast transfer of larger files such as movies and videos.",
    stars: 0,
    category: 'Electronics',
    image: '/img/products/greenusb.jpg',
    price: 20.0,
    reviews: [ { name: 'Ringo', comment: "He's very green.", stars: 4, date: 1.45580490225e12 } ]
  },
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: 'USB Stick (Leaf)',
    slogan: '1GB of space',
    description:
      "MongoDB's Turbo USB 3.0 features lightning fast transfer speeds of up to 10X faster than standard MongoDB USB 2.0 drives. This ultra-fast USB allows for fast transfer of larger files such as movies and videos.",
    stars: 0,
    category: 'Electronics',
    image: '/img/products/leaf-usb.jpg',
    price: 20.0
  },
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: 'Scaling MongoDB',
    slogan: '2nd Edition',
    description:
      "Create a MongoDB cluster that will grow to meet the needs of your application. With this short and concise book, you'll get guidelines for setting up and using clusters to store a large volume of data, and learn how to access the data efficiently. In the process, you'll understand how to make your application work with a distributed database system.",
    stars: 0,
    category: 'Books',
    image: '/img/products/scaling-book.jpg',
    price: 29.0,
    reviews: [ { name: 'Horatio', comment: 'This is a pretty good book', stars: 4, date: 1.456086633854e12 } ]
  },
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: 'Powered by MongoDB Sticker',
    slogan: 'Add to your sticker collection',
    description:
      'Waterproof vinyl, will last 18 months outdoors.  Ideal for smooth flat surfaces like laptops, journals, windows etc.  Easy to remove.  50% discounts on all orders of any 6+',
    stars: 0,
    category: 'Stickers',
    image: '/img/products/sticker.jpg',
    price: 1.0
  },
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: 'MongoDB Umbrella (Brown)',
    slogan: 'Premium Umbrella',
    description:
      'Our crook handle stick umbrella opens automatically with the push of a button. A traditional umbrella with classic appeal.',
    stars: 0,
    category: 'Umbrellas',
    image: '/img/products/umbrella-brown.jpg',
    price: 21.0,
    reviews: [
      {
        name: 'Donald Trump',
        comment: 'This is the best umbrella you will ever use.',
        stars: 5,
        date: 1.456270097364e12
      },
      {
        name: 'Shannon',
        comment: 'Sturdy construction, but a little too big to fit in my bag for work.',
        stars: 3,
        date: 1.456270240382e12
      }
    ]
  },
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: 'MongoDB Umbrella (Gray)',
    slogan: 'Premium Umbrella',
    description:
      'Our crook handle stick umbrella opens automatically with the push of a button. A traditional umbrella with classic appeal.',
    stars: 0,
    category: 'Umbrellas',
    image: '/img/products/umbrella.jpg',
    price: 21.0
  },
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: 'MongoDB University Book',
    slogan: 'A concise summary of MongoDB commands',
    description: "Keep the MongoDB commands you'll need at your fingertips with this concise book.",
    stars: 0,
    category: 'Books',
    image: '/img/products/univ-book.jpg',
    price: 4.0
  },
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: 'MongoDB University T-shirt',
    slogan: 'Show Your MDBU Alumni Status',
    description:
      "Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB's signature leaf.",
    stars: 0,
    category: 'Apparel',
    image: '/img/products/univ-tshirt.jpg',
    price: 45.0
  },
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: 'USB Stick',
    slogan: '5GB of space',
    description:
      "MongoDB's Turbo USB 3.0 features lightning fast transfer speeds of up to 10X faster than standard MongoDB USB 2.0 drives. This ultra-fast USB allows for fast transfer of larger files such as movies and videos.",
    stars: 0,
    category: 'Electronics',
    image: '/img/products/leaf-usb.jpg',
    price: 40.0
  },
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: 'Water Bottle',
    slogan: 'Glass water bottle',
    description:
      'High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe',
    stars: 0,
    category: 'Kitchen',
    image: '/img/products/water-bottle.jpg',
    price: 23.0
  },
  {
    _id: new ObjectId(),
    storeId: '5bd419916f37611fe0300f7c',
    title: 'WiredTiger T-shirt',
    slogan: 'Unleash the tiger',
    description:
      "Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB's signature leaf.",
    stars: 0,
    category: 'Apparel',
    image: '/img/products/wt-shirt.jpg',
    price: 22.0
  }
]

mongoose.connect(`mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`)
const db = mongoose.connection

db.on('error', console.error)

db.on('open', () =>
  Product.findOne()
    .then(product =>
      !product && Promise.all([
        Product.collection.insertMany(products)
      ]))
    .then(() => console.log('connected to DB'))
    .catch(console.error))
