const { faker } = require("@faker-js/faker")

class User {
    constructor(){
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.password = faker.internet.password();
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.number();
        // this.id = faker.database.uuid();
    }
}

class Company {
    constructor(){
        this.name = faker.company.name();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            state: faker.address.state()
        }
    }
}
const express = require("express")
const app = express()

app.get("/", function (req, res) {
  res.send("Hello World")
})

app.get("/api/users/new", (req, res) => {
  res.json(new Company)
})

app.get("/api/companies/new", (req, res) => {
  res.json(new User)
})

app.get("/api/user/company", (req, res) => {
  res.json({
    user: User,
    company: Company,
  })
})

app.listen(8000)