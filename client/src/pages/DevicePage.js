import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/BigStar.png'
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";


const DevicePage = () => {
    const [device, setDevice] = useState({})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    // const device =   {id: 1, name: 'An-130 fuselage', price: 300000, rating: 5, img: 'https://24minus.ru/800/600/https/pbs.twimg.com/media/Dtt12xbW4AAVGJi.jpg', inform: 'hello' };
    // const info = {info: 'Longeron is the load-bearing component of a framework. Form a longitudinal set of wings, fuselage, empennage, rudders and ailerons.\n' +
    //         '                    The longitudinal elements of the frame run along the entire length of the fuselage. Together with the skin they perceive the normal bending forces of the fuselage. Plain stringers and side members are usually made from extruded or bent sections.\n' +
    //         '                    Spars differ from stringers in greater rigidity.\n' +
    //         '                    For heavy loads, composite spars can be used by consisting of several interconnected profiles. For edging large cutouts in the fuselage, box-section spars are often used - beams, which consist of extruded profiles connected by ribs and spar.'}
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4} className="mt-5">
                    <Image width={300} height={250} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2 className="text-danger">{device.name}</h2>
                        <div className="d-flex align-items-center justify-content-center"
                        style={{background: `url(${bigStar}) no-repeat center center`, width: 250, height:250, backgroundSize: 'cover', fontSize: 64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="mt-5 d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 250, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>From: {device.price} USD</h3>
                        <Button variant={"outline-dark"}>Add to cart</Button>
                    </Card>
                </Col>
            </Row>

            <Row className="d-flex mt-5 align-items-center justify-content-center" >
                <h1 className='mb-3 text-primary'>Description</h1>
                <Row className='text-justify' style={{background : 'whitesmoke', fontSize: 24}}>
                    {/*{device.info}*/}
                    {device.inform}
                </Row>
            </Row>

        </Container>
    );
};

export default DevicePage;
