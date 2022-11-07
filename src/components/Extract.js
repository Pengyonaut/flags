import React, {useState} from 'react'
import { Button } from 'reactstrap'


export default function Extract({wikiDoc}) {

    const [readMore, setReadMore] = useState(false)

  return (
    <>
    <div className='w-100 mt-3 p-2'>
    <h4>About</h4>
    <p>{!readMore && wikiDoc.substring(0, 150) + "..."}</p>
    <p>{readMore && wikiDoc}</p>
    <div className='d-flex justify-content-center w-100 mt-3'>
    <Button color="primary" style={{borderRadius:"200px", width:"100%"}} onClick={() => setReadMore(!readMore)} size="md" >{!readMore ? <>Read more</> : <>Read Less</>}</Button>
    </div>
    </div>
</>
  )
}
