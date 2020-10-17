import tv from "./images/products/tv.jpg"
import grinder from "./images/products/grinder.jpg"
import iphone from "./images/products/iphone.jpg"
import airpod from "./images/products/airpod.jpg"
import keyboard from "./images/products/keyboard.jpg"
import mic from "./images/products/mic.jpg"
import watch from "./images/products/watch.jpg"
import note20u from "./images/products/note-20.jpg"

export const PRODUCTS = [
  {
    _id: 1,
    name: "Samsung Note 20 Ultra",
    images: `${note20u}`,
    description:
      "Measured diagonally, Galaxy Note20's screen size is 6.7' in the full rectangle and 6.6' with accounting for the rounded corners and Galaxy Note20 Ultra's screen size is 6.9' in the full rectangle and 6.8' with accounting for the rounded corners",
    brand: "Apple",
    category: "Phones",
    price: 999.99,
    countInStock: 3,
    rating: 4.0,
    numReviews: 400,
  },
  {
    _id: 2,
    name: "Color Screen Smart Bracelet D13 Waterproof Bracelet",
    images: `${watch}`,
    description:
      "Bluetooth technology lets you connect itwith compatible devices wirelessly High-quality AAC audio offers immersive listening experience built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Watches",
    price: 89.99,
    countInStock: 3,
    rating: 2.5,
    numReviews: 4,
  },
  {
    _id: 3,
    name: "iPhone 12 Pro Max",
    images: `${iphone}`,
    description:
      "Apple has officially announced its 2020 flagship iPhones: the $999 iPhone 12 Pro and $1,099 12 Pro Max, featuring support for 5G and a new squared-off design that’s reminiscent of the iPhone",
    brand: "Apple",
    category: "Phones",
    price: 1200.99,
    countInStock: 3,
    rating: 5.0,
    numReviews: 4,
  },
  {
    _id: 4,
    name: "TCL 32-Inch HD Digital Flat TV + 12 Months",
    images: `${tv}`,
    description:
      "Founded in 1981, TCL has developed over the last 30 years to position itself among the world's leading TV manufacturers. The group's exceptional manufacturing capacities and its international dimension now enable it to make innovation a priority.",
    brand: "Apple",
    category: "Televisions",
    price: 699.99,
    countInStock: 3,
    rating: 0.0,
    numReviews: 4,
  },
  {
    _id: 5,
    name:
      "Mini Clip-on Lapel Lavalier Mic Wired Microphone For Phone For Laptop",
    images: `${mic}`,
    description:
      "Made of high quality material, durable and high precision. It's also perfect for voice recording. Plug and play,no extra gear needed. Ultra thin and lightweight design, saving your space.Compact, attractive appearance, high sensitivity",
    brand: "Apple",
    category: "Electronics",
    price: 8.0,
    countInStock: 3,
    rating: 3.5,
    numReviews: 4,
  },
  {
    _id: 6,
    name:
      "Saisho Electric Jug (S-402SS) + Double Burner Gas Stove + 3-in-1 Blender(1.8)",
    images: `${grinder}`,
    description:
      "Easy to use, this handy kitchen appliance comes with an automatic turn-off feature that is activated once the water is boiled.",
    brand: "Apple",
    category: "Electronics",
    price: 94.99,
    countInStock: 3,
    rating: 3.0,
    numReviews: 4,
  },
  {
    _id: 7,
    name: "Flexible USB External Keyboard - Black",
    images: `${keyboard}`,
    description:
      "This black keyboard is very comfortable to use‎.‎ The low profile key cap structure provides an excellent touch and the water resistant function prevents damage that comes with accidental liquid spillage.",
    brand: "Apple",
    category: "Electronics",
    price: 189.99,
    countInStock: 3,
    rating: 2.5,
    numReviews: 4,
  },
  {
    _id: 8,
    name: "Airpods wireless Bluetooth Headphones",
    images: `${airpod}`,
    description:
      "Bluetooth technology lets you connect itwith compatible devices wirelessly High-quality AAC audio offers immersive listening experience built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: 222.99,
    countInStock: 3,
    rating: 4.5,
    numReviews: 4,
  },
]
