import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Table, Button } from "react-bootstrap";
import NavbarComponent from "../navbar/Navbar";
import { useDispatch } from "react-redux";
import * as employeeActions from "../../redux/actions/employeeActions";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { UPDATE_STATE } from "../../redux/actions/actionTypes";

const EmployeeList = () => {
  const employees = useSelector((state) => state.employees);
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  
  useEffect(() => {
    if (history.action === "POP") {
      getEmployees();
      console.log(new Date() + " müşteri listesi görüntülendi")
    } else {
      setList(employees.payload);
      console.log(new Date() + " müşteri listesi görüntülendi")
    }
  }, []);

  const getEmployees = () => {
    const query = `query AllEmployees {
      allEmployees{
        id
        firstName
        lastName
        jobTitle
        voteNumber,
        address,
        phoneNumber,
        email
      }
    }`;

    dispatch(employeeActions.getEmployees(query)).then((items) => {
      setList(items);
    });
    console.log(new Date() + " müşteri bilgileri getirildi.")
  };

  const voteDown = (index) => {
    let voteDataDown = list.map((content) => {
      if (content.id === list[index].id) {
        if (content.voteNumber > 0) {
          content.voteNumber = list[index].voteNumber - 1;
        }
      }
      return content;
    });
    const sortedDataVoteDown = voteDataDown.sort((a, b) => {
      return a === b ? a : b.voteNumber - a.voteNumber;
    });
    setList(sortedDataVoteDown);
    dispatch({
      type: UPDATE_STATE,
      payload: sortedDataVoteDown,
    });
    console.log(new Date() + " oy azaltma işlemi gerçekleştirildi.")
  };

  const voteUp = (index) => {
    let voteDataUp = list.map((content) => {
      if (content.id === list[index].id) {
        content.voteNumber = list[index].voteNumber + 1;
      }
      return content;
    });
    const sortedDataVoteUp = voteDataUp.sort((a, b) => {
      return a === b ? a : b.voteNumber - a.voteNumber;
    });
    setList(sortedDataVoteUp);
    dispatch({
      type: UPDATE_STATE,
      payload: sortedDataVoteUp,
    });
    console.log(new Date() + " oy arttırma işlemi gerçekleştirildi.")
  };

  return (
    <div>
      <NavbarComponent />
      <Container fluid>
        <Table striped bordered hover variant="dark" className="mt-5">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Job Title</th>
              <th>Oy Sayısı</th>
              <th>Oy Ver</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.jobTitle}</td>
                <td>{item.voteNumber}</td>
                <td>
                  <Button variant="success" onClick={() => voteUp(index)}>
                    <i className="bi bi-plus-lg"></i>
                  </Button>{" "}
                  <Button variant="danger" onClick={() => voteDown(index)}>
                    <i className="bi bi-dash"></i>
                  </Button>{" "}
                  <Button
                    variant="info"
                    onClick={() => {
                      history.push("/employee/" + index);
                    }}
                  >
                    Detay
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default EmployeeList;
