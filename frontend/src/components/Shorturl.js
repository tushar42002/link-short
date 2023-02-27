import React from 'react'

export const Shorturl = () => {
    
  return (
    <>
      <div className='form-outline w-50 m-auto' style={{ 'z-index': '2' }}>
        <input type="url" className='form-control text-light' name="url" id="typeURL" style={{ borderBottom: '1px solid #fff', borderRadius: '0px'  }} />
        <label className='form-label text-light' htmlFor="typeURL">Enter URL</label>
      </div>
      <button className='btn btn-primary mt-3'>Create short Url</button>
      <div className='text-light mt-5' style={{display: 'grid', gridTemplateColumns: '2fr 1fr'}}> <span className='ps-5 ms-4' id='link'>Lorem ipsum dolor sit amet consectetur </span> <span id='copy'>copy</span></div>
    </>
  )
}
