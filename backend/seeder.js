import dotenv from "dotenv"
import mongoose from "mongoose"
import users from "./data/users.js"
import products from "./data/products.js"
import User from "../Models/UserModel.js"
import Product from "../Models/ProductModel.js"
import Order from "../Models/OrderModel.js"

//WARNING: tHIS code will delete everything when importing and removing

//In  package.json: you will see this to use and run import files and destroy it
// "data:import":"node backend/seeder",
// "data:destroy":"node backend/seeder -d"

dotenv.config()
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const importData = async () => {
  try {
    await User.deleteMany()
    await Product.deleteMany()
    await Order.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)

    console.log("Data Imported!")
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log("Data Destroyed!")
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

//node path to seeder -d
//E.g node backend/seeder -d
if (process.argv[2] === "-d") {
  destroyData()
} else {
  importData()
}
