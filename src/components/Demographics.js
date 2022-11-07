import React,{useState, useEffect} from 'react'
import DemographicsLabel from './DemographicsLabel'
import { Col, Row } from 'reactstrap'



export default function Demographics({data}) {


    console.log(data)

  return (
    <>
    <div className='w-100 mt-3 p-2'>
    <h4>Demographics</h4>
    {Demographics != "" && 
    <Row>
        <Col>
    <DemographicsLabel icon={"location_city"} label={"Capital city"} result={data.capital} />
    <DemographicsLabel icon={"location_on"} label={"Region"} result={data.region} />
    <DemographicsLabel icon={"toll"} label={"Currencies"} result={data.currencies.length != 0 && data.currencies[0].name } />
    </Col>
    <Col>
    <DemographicsLabel icon={"groups"} label={"Population"} result={data.population} />
    <DemographicsLabel icon={"language"} label={"Languages"} result={data.languages.length != 0 && data.languages[0].name} />
    </Col>
    </Row>
    }
</div>

    </>
  )
}
