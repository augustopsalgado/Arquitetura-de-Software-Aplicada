import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FaPen } from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';
import { InputGroup } from 'react-bootstrap';
import * as ReactBootStrap from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


export const aeroportos = [
  {id:"1",estacao:"uberlandia", avioes:"15"},
  {id:"2",estacao:"sao paulo", avioes:"14"},
  {id:"3",estacao:"belo horizonte", avioes:"12"},
  {id:"4",estacao:"bahia", avioes:"10"}
]

export function renderaeroportos (aeroporto, index) {
  const [lgShow, setLgShow] = useState(false);
  return(
    <>
      <tr key={index}>
      <td>{aeroporto.id}</td>
      <td>{aeroporto.estacao}</td>
      <td>{aeroporto.avioes}</td>
      <td> 
        <Button className='mx-1' variant="info" onClick={() => setLgShow(true)}><FaPen color="white" /></Button>
        <Button className='mx-1' variant="danger"><AiOutlineClose /> </Button>
        </td>
    </tr>
    <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Editar valores
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
     
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Estação atual ({(aeroporto.estacao)})</Form.Label>
        <Form.Control type="text" placeholder="nova localização de estação" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Quantidade de avioes atual: {aeroporto.avioes}</Form.Label>
        <Form.Control type="text" placeholder="nova quantidade de aviões" />
        
      </Form.Group>


 
    </Form>
          <Modal.Footer>
          <Button variant="secondary" onClick={() => setLgShow(false)} >
            Cancelar
          </Button>
          <Button variant="primary" >
            Salvar alterações
          </Button>
        </Modal.Footer>
      

        </Modal.Body>
      </Modal>

</>
  )
}


const AdminAirports=()=>{

  const [show, setShow] = useState(false); //modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [search, setSearch] = useState("")
  
return(
    <div className="container container  d-flex align-items-center flex-column mt-5">
        <p>Admin</p>
        
        <p>Lista de aeroportos</p>
        <div className='m-2'>
        <Button variant="success" onClick={handleShow}>Criar novo aeroporto</Button>
        </div>
         <Form>
          <InputGroup>
          <Form.Control className='m-3' onChange={(e) => setSearch(e.target.value)} placeholder="Busque o aeroporto" />
          </InputGroup>
         </Form>

        {/* <ReactBootStrap.Table></ReactBootStrap.Table> */}
        <ReactBootStrap.Table striped bordered hover >
      <thead>
        <tr>
          <th>id</th>
          <th>estacao</th>
          <th>avioes</th>
        </tr>
      </thead>
      <tbody>
        {aeroportos.filter((aeroporto)=>{
          return search.toLowerCase() ===''? aeroporto: aeroporto.estacao.toLowerCase()
          .includes(search)
        })
        
        .map(renderaeroportos)}
     </tbody>
    </ReactBootStrap.Table>
       
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Novo Trajeto</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Estação</Form.Label>
        <Form.Control type="text" placeholder="estacao" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Quantidade de aviões disponíveis</Form.Label>
        <Form.Control type="text" placeholder="avioes" />
      </Form.Group>


 
    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar alterações
          </Button>
        </Modal.Footer>
      </Modal>
        
    </div>
)

}

export default AdminAirports