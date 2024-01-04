import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const db=new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"Form-1",
  password:"jk32@12345AA",
  port:5432
})
db.connect()




app.get("/", async(req, res) => {
 let answer= await db.query("SELECT country_code FROM VCOUNTRY");
//  for (let i = 0; i < answer.rows.length; i++) {

//   let outcome=answer.rows[i].country_code;
//  let countries=[]
//  countries.push(outcome)
//  console.log(outcome)
//  console.log(countries)
// }

let countries=[]

answer.rows.forEach((country) => {
  countries.push(country.country_code)  
});

console.log(countries)

res.render("index.ejs",{
  countries:countries,
  total:countries.length
})
db.end();})



app.listen(port,()=>{
  console.log("Server is Hot & Running")
});