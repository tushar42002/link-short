import React from 'react'
import { Link } from 'react-router-dom'

export const Links = () => {

  const copy = (e) => {
    navigator.clipboard.writeText(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className='my-5 w-75 h-50 m-auto' style={{ overflowY: 'scroll' }}>
      <table class="table table-bordered  table-transparent text-light ">
        <thead>
          <tr>
            <th scope="col">long links</th>
            <th scope="col">short link</th>
            <th scope="col">clicks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>long url</td>
            <td> <Link to={'#'}>short link</Link></td>
            <td>1</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}
