import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createAircraft} from "../../http/deviceAPI";
// import {createBrand, createType} from "../../http/deviceAPI";

const CreateAircraft = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addAircraft = () => {
        createAircraft({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new aircraft
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Enter aircraft name"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick = {addAircraft} >Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateAircraft;
