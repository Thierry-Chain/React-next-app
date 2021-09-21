import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { useEffect } from 'react'
import axios from 'axios'
function Details() {
  const router = useRouter()
  const userId = router.query.userId
  //console.log(userId && `done->${userId}`)
  const fetcher = async () => {
    try {
      const res = await axios(`http://localhost:3004/posts/${userId}`)
      const myData = res?.data
      console.log('fetcher logged', myData, 'id', userId ? userId : 'disagree')
      return myData
    } catch (e) {
      console.warn('error')
    }
  }

  // const { data, status } = useQuery('getSingleUser', fetcher)

  return <div>start</div>
}
export default Details
export const getStaticProps = (context) => {}
