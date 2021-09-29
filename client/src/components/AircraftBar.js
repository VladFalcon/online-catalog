import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Row from "react-bootstrap/Row";
import {Card} from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const AircraftBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <Row className="d-flex">
            {device.aircrafts.map(aircraft =>
                <Card
                    key={aircraft.id}
                    className="p-3 ml-3"
                    style={{cursor: 'pointer'}}
                    onClick= {()=> device.setSelectedAircraft(aircraft)}
                    border={aircraft.id === device.selectedAircraft.id ? 'danger' : 'light'}
                >
                    {aircraft.name}
                </Card>

            )}
            
        </Row>
    );
});

export default AircraftBar;