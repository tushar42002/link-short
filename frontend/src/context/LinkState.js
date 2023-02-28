import React ,{ useState } from 'react'
import LinkContext from './LinkContext'

const LinkState = () => {

  const host = 'https//:localhost';
  const [links, setLinks] = useState({});
  const [oneUrl, setOneUrl] = useState({});

  const getUrls = async () => {
    const response = await fetch(`${host}/`)
  }

  const shortUrl = async (id,url) => {
    const response = await fetch(`${host}/`, {
      method: 'POST',
      headers: { 'content-Type': 'application/json'},
      body: JSON.stringify({id: id , Url: url})
    })
    const json = response.json();
     setOneUrl(json)
    console.log(json);
  }


  



  return (
    <LinkContext.Provider value={{links, oneUrl, getUrls, shortUrl}}>
       {props.children}
    </LinkContext.Provider>
  )
}

export default LinkState

