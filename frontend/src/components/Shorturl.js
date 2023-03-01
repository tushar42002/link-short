import React, { useContext, useState } from 'react'
import LinkContext from '../context/LinkContext'
import { Link } from 'react-router-dom';

export const Shorturl = (props) => {

  const context = useContext(LinkContext);
  const { shortUrl, oneUrl } = context
  
  const userId = localStorage.getItem('id')?localStorage.getItem('id'):'0';

  const [url, setUrl] = useState({})

  const webLink = window.location.href

  const onChange = (e) => {
    setUrl(e.target.value);
  }
  const createUrl = (e) => {
     e.preventDefault();
    shortUrl( userId , url);
  }



  return (
    <>
      <div className='form-outline w-50 m-auto' style={{ zIndex: '2' }}>
        <input type="url" className='form-control text-light' onChange={onChange} name="url" id="typeURL"  value={url} style={{ borderBottom: '1px solid #fff', borderRadius: '0px'  }} />
        <label className='form-label text-light' htmlFor="typeURL">Enter URL</label>
      </div>
      <button className='btn btn-primary mt-3'onClick={createUrl}>Create short Url</button>
      <div className='text-light mt-5'> <Link className='ps-5 ms-4' to={`${webLink}/${oneUrl.url}`} id='link'> `${webLink}/${oneUrl.url}` </Link></div>
    </>
  )
}
