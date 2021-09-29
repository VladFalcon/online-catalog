import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import AircraftBar from "../components/AircraftBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchAircrafts, fetchDevices, fetchTypes} from "../http/deviceAPI";
import Pages from "../components/Pages";


const Catalog = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchAircrafts().then(data => device.setAircrafts(data))
        fetchDevices(null, null, 1, 12).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedAircraft.id, device.page, 12).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedAircraft,])

    return (

            <Row className="mt-3 ml-3" >
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <AircraftBar/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>

    );
});

export default Catalog;
