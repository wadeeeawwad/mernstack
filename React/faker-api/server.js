const express = require("express");
const { random, address } = require("faker");

var faker = require('faker');   
const app = express();
const port = 8000;



class User{
    constructor(){
      this.random_id = faker.random.uuid();
        this.firstName=faker.name.firstName();
        this.lastName=faker.name.lastName();
      this.email=  faker.internet.email();
      this.phoneNumber=faker.phone.phoneNumber();
      this.password=faker.internet.password();

    }
}
class Company{
    constructor(){
        this.random_id = faker.random.uuid();

      
       this.name = faker.name.findName();
       this.address={
           street:faker.address.streetName(),
           city:faker.address.city(),
           state:faker.address.state(),
           zipCode:faker.address.zipCode(),
           country:faker.address.country()
       }
    }
}

app.get("/api", (req,res) => {
    res.json({message: "it actually worked!!"})
});


app.get("/api/users/new", (req, res) => {
    const newUsers = new User();
    res.json( newUsers );
});



app.get("/api/companies/new", (req, res) => {
    const newCompany=new Company();


    res.json( newCompany );
});


app.get("/api/user/company", (req, res) => {
    const newUsers2 = new User();
    const newCompany2=new Company();


    res.json({User:newUsers2,Company:newCompany2});
});




app.listen( port, () => console.log(`Listening on port: ${port}`) );