import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import NavbarComponent from "../navbar/Navbar";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const EmployeeDetail = (props) => {
  const { id } = props.match.params;
  const history = useHistory();
  const employees = useSelector((state) => state.employees);
  console.log(new Date() + " detay sayfasına girildi.")
  return (
    <div>
      <NavbarComponent />
      <Row>
        <Col
          md="12"
          className="d-flex flex-row  flex-wrap mx-auto justify-content-center"
        >
          <Card className="w-100">
            <Card.Body>
             
                <Button onClick={() => {
                  history.push("/employees");
                }}
                  variant="light"
                  size="lg"
                  className="card__image-button"
                >
                  &#8592;
                </Button>
        
              <Card.Title className="cards__title  ml-2 text-center d-flex justify-content-center">
                <Card className="text-center w-75">
                  <Card.Header>Çalışan Detayı</Card.Header>
                  <Card.Body>
                    <Card.Title>{employees.payload[id].jobTitle}</Card.Title>
                    <Card.Text>
                      <p>Adres : {employees.payload[id].address}</p>
                      <p>Email : {employees.payload[id].email}</p>
                      <p>Telefon : {employees.payload[id].phoneNumber} </p>
                      <p>Oy Sayısı : {employees.payload[id].voteNumber}</p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    {employees.payload[id].firstName}{" "}
                    {employees.payload[id].lastName}
                  </Card.Footer>
                </Card>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeDetail;
