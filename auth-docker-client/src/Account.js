import {Col, Row} from "react-bootstrap";
import Register from "./Register";
import Login from "./Login";

function Account() {
  return (
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Register/>
        </Col>

        <Col xs={12} sm={12} md={6} lg={6}>
          <Login/>
        </Col>
      </Row>
  );
}

export default Account;