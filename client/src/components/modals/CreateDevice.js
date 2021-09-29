import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import {Context} from "../../index";
import {set} from "mobx";
import {createDevice, fetchAircrafts, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";

const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [inform, setInform] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchAircrafts().then(data => device.setAircrafts(data))
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('aircraftId', device.selectedAircraft.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('inform',inform)
        createDevice(formData).then(data => onHide())
    }
    // const removeInfo = (number) => {
    //     setInfo(info.filter(i => i.number !== number))
    // }
    // const changeInfo = (key, value, number) => {
    //     setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    // }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new space part
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{device.selectedType.name || "Select category"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{device.selectedAircraft.name || "Select aircraft"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.aircrafts.map(aircraft =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedAircraft(aircraft)}
                                    key={aircraft.id}
                                >
                                    {aircraft.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Enter device name"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Enter device price"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Form.Control
                        value={inform}
                        onChange={e => setInform(e.target.value)}
                        rows={3}
                        as="textarea"
                        style={{height: 200}}
                        className="mt-3"
                        placeholder="Enter description"

                    />

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={addDevice} >Add</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;