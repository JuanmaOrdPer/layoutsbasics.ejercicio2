import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Mockup() {
  return (
    <Container fluid>
     

      <Row>
       
        <Col md={8} className='mt-4'>
          <Card className="mb-4 p-3" style={{ height: 'calc(52.5%)' }}>
           <img 
           src ="./educastur.svg"
           alt ="imagen principal"
           style={{height: 'calc(100%)'}}
           />
          </Card>
          <Card className="mb-4 p-3" style={{ height: 'calc(25%)' }}>
            <h3>Noticias Generales</h3>
            <p>Aquí puedes añadir información adicional relacionada con el contenido principal.</p>
          </Card>
          <Card className="p-3" style={{ height: 'calc(25%)' }}>
            <h3>NOTICIAS innovación educativa</h3>
            <p>Aquí puedes añadir información adicional relacionada con el contenido principal.</p>
          </Card>
        </Col>

        <Col md={2} className='mt-4'>
          <Card className="mb-4 p-3" style={{ height: 'calc(25%)' }}>
            <img 
            src = "./educacion.svg"
            alt= "educacion"
            style={{height: 'calc(100%)'}}
            />
          </Card>

          <Card className="mb-4 p-3" style={{ height: 'calc(25%)' }}>
          <img 
            src = "./consejeria.svg"
            alt= "consejeria"
            style={{height: 'calc(100%)'}}
            />
          </Card>

          <Card className="mb-4 p-3" style={{ height: 'calc(25%)' }}>
          <img 
            src = "./fse.svg"
            alt= "cofinanciado"
            style={{height: 'calc(100%)'}}
            />
          </Card>

          <Card className="p-3" style={{ height: 'calc(25% )' }}>
          <img 
            src = "./estudiante.svg"
            alt= "estudiante"
            style={{height: 'calc(100%)'}}
            />
          </Card>
        </Col>
        <Col md={2} className='mt-4'>
          <Card className="mb-4 p-3" style={{ height: 'calc(25%)' }}>
            <h4>Educacion</h4>
            <p>Información o enlaces rápidos.</p>
          </Card>

          <Card className="mb-4 p-3" style={{ height: 'calc(25%)' }}>
            <h4>Consejeria</h4>
            <p>Más contenido complementario.</p>
          </Card>

          <Card className="mb-4 p-3" style={{ height: 'calc(25%)' }}>
            <h4>Cofinanciado</h4>
            <p>Últimos datos o eventos destacados.</p>
          </Card>

          <Card className="p-3" style={{ height: 'calc(25%)' }}>
            <h4>Estudiante</h4>
            <p>Información adicional o anuncios importantes.</p>
          </Card>
        </Col>


      </Row>
    </Container>
  );
}

export default Mockup;
