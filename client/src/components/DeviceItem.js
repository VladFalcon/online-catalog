import React from 'react';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import star from "../assets/star.png"
import Image from "react-bootstrap/Image";
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useHistory()
    return (
        <Col md={3} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card className="mt-3" style={{width : 200, cursor: 'pointer'}} border={"light"}>
                <Image src={process.env.REACT_APP_API_URL + device.img} width={200} height={150}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Plane...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={17} height={17} src={star}/>
                    </div>
                </div>
                <div>
                    {device.name}
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;