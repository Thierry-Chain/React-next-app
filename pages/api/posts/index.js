// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from '../../../db'
export default function handler(req, res) {
  
 if(req.method ==='POST'){
const newUser=(req.body)
console.log(data.length,newUser)
data.push(newUser)
    res.status(200).json(newUser)
console.log(data.length)

 }else{
    res.status(200).json(data)
 }
}
