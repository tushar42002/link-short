import React from 'react'
import { Shorturl } from './Shorturl'
import { Links } from './Links'

const Home = () => {

  const style1 = {
    height : '500px',
    backdropFilter: 'blur(5px)',
    boxShadow : '0px 0px 10px -5px #fff'
  }

  return (
    <div className='mt-2 pt-5 rounded text-center' style={style1}>
      <Shorturl/>
      <Links/>
    </div>
  )
}

export default Home