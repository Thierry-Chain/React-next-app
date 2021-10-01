// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from '../../../db'
export default function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query
    const neededUser = data.find((user) => user.id == id)
    console.log('id :', id, neededUser /*, 'from', data*/)
    if (neededUser) {
      res.status(200).json(neededUser)
    } else {
      res.status(404).json([])
    }
  }
  
  else if(req.method === 'DELETE'){
    const { id } = req.query
console.log('one',data.length)

const trash=data.find(dt=>dt.id == id)
const trashId=data.findIndex(dt=>dt.id== id)
data.splice(trashId,1)
console.log('two',data.length) 
console.log(data.length)
      res.status(200).json({done:`delete user ${trash}`})

  }

   else res.status(500).json({ error: 'other request type' })
   
}
