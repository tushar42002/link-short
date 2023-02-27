import React from 'react'
import { useRef } from 'react';

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
            <th scope="col">links</th>
            <th scope="col">click to copy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><input type="text" value={'link'} id="1" /></th>
            <td style={{ cursor: 'pointer' }}>Copy</td>
          </tr>
          <tr>
            <th scope="row" className='w-75'>2</th>
            <td style={{ cursor: 'pointer' }}>Copy</td>
          </tr>
       

        </tbody>
      </table>
    </div>
  )
}
