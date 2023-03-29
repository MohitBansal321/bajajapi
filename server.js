const express = require('express')
const bodyparser=require('body-parser')
const app = express()

app.use(bodyparser.json())
function generateArrays(data){
  let even_numbers = []
  let odd_numbers = []
  let alphabets = []
  let userid = "mohit_bansal_16092001"
  let email = "mohit1291@chitkara.edu.in"
  let roll_number = "2010991291"
  
  for(const element of data){
        if(isNaN(element)){
          alphabets.push(element.toUpperCase())
        }else if(Number(element) % 2 === 0){
          even_numbers.push(element)
        }else{
          odd_numbers.push(element)
        }
  }
  
  return {
    is_success: true, 
    user_id: userid,
    email: email,
    roll_number: roll_number,
    even_numbers: even_numbers, 
    odd_numbers: odd_numbers, 
    alphabets: alphabets
  }
}

app.post('/bfhl', (req, res) => {
  const data = req.body['data']
  const response_data = generateArrays(data)
  res.json(response_data)
})

app.listen(3000, () => console.log('Server running at http://localhost:3000/'))