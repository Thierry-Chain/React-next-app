import React from 'react'
import { useSelector } from 'react-redux'
export default function Test() {
  const user = useSelector((state) => state.drive.client.name)
  const userid = useSelector((state) => state.drive.client.clientId)
  return (
    <div>
      {user ? (
        <>
          <p>
            <b>User : </b>
            {user}
          </p>
          <p>
            <b>User id : </b>
            {userid}
          </p>
        </>
      ) : (
        <p>
          <strong>
            <big>
              <i>Login First</i>
            </big>
          </strong>
        </p>
      )}
    </div>
  )
}
