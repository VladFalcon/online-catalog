import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import CreateType from "../components/modals/CreateType";
import CreateAircraft from "../components/modals/CreateAircraft";
import CreateDevice from "../components/modals/CreateDevice";


const Admin = () => {
    const [aircraftVisible, setAircraftVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button
                style={{fontSize: 24}}
                variant={"outline-primary"}
                className="mt-5 p-3"
                onClick={() => setTypeVisible(true)}
            >
                Add new category
            </Button>
            <Button
                style={{fontSize: 24}}
                variant={"outline-primary"}
                className="mt-5 p-3"
                onClick={() => setAircraftVisible(true)}
            >
                Add new aircraft
            </Button>
            <Button
                style={{fontSize: 24}}
                variant={"outline-primary"}
                className="mt-5 p-3"
                onClick={() => setDeviceVisible(true)}
            >
                Add new spare part
            </Button>
            <CreateAircraft show={aircraftVisible} onHide={() => setAircraftVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateDevice  show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>
    );
};

export default Admin;