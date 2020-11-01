import bcrypt from "bcryptjs"

const users = [
  {
    name: "Afams Val",
    email: "afams@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "Anucha Nora",
    email: "anucha@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
  {
    name: "Emeka Okafor",
    email: "emeka@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
]

export default users
