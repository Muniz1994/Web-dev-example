import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [diceMembers, setDiceMembers] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [updateFetch, setUpdateFetch] = useState('');


  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/dicemembers/')
      .then(res => setDiceMembers(res.data))
      .catch(err => console.log(err))
  }, [updateFetch])

  const deleteMember = (id) => {
    console.log(id);

    axios.delete('http://127.0.0.1:8000/api/dicemembers/' + id + '/')
      .then(res => { setUpdateFetch(res) })
      .catch(err => console.log(err))

  }

  const AddMemberModal = () => {

    const [formValue, setFormValue] = useState('');

    const handleSubmit = (event) => {

      event.preventDefault();
      const newMember = {
        name: formValue
      }
      axios.post('http://127.0.0.1:8000/api/dicemembers/', newMember)
        .then(res => setUpdateFetch(res.data));

      handleClose();

    };

    const handleClose = () => setModalShow(false);

    return (
      <>
        <Modal show={modalShow} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new member</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formField">
                <Form.Label>New Member</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter member"
                  onChange={(event) => setFormValue(event.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }

  return (
    <>
      <AddMemberModal />
      <Container className='d-flex align-items-center'>
        <Row className='m-auto'>
          <Col lg={12}>
            <ListGroup>
              {diceMembers.map(elem =>
                <ListGroup.Item onClick={() => deleteMember(elem.id)} action variant="primary">{elem.name}</ListGroup.Item>
              )}
            </ListGroup>
          </Col>
          <Col className='pt-2'><Button onClick={() => setModalShow(true)} variant="primary">Add New Member</Button></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;