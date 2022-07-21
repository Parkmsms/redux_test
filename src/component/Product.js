import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link} from "react-router-dom";

const  Product = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>상품태그 #1</Accordion.Header>
        <Accordion.Body>
          상품1-1
        </Accordion.Body>
        <Accordion.Body>
          상품1-2
        </Accordion.Body>
        <Accordion.Body>
          상품1-3
        </Accordion.Body>
        <Accordion.Body>
          상품1-4
        </Accordion.Body>

      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>상품태그 #2</Accordion.Header>
        <Accordion.Body>
          상품2-1
        </Accordion.Body>
        <Accordion.Body>
          상품2-2
        </Accordion.Body>
        <Accordion.Body>
          상품2-3
        </Accordion.Body>
        <Accordion.Body>
          상품2-4
        </Accordion.Body>
        <Accordion.Body>
          상품2-5
        </Accordion.Body>
        <Accordion.Body>
          상품2-6
        </Accordion.Body>

      </Accordion.Item>
      <Link to="/">
    <button>home</button>
        </Link>
        <Link to="/test">
    <button>뒤로가기</button>
        </Link>
    </Accordion>
  
  );
}

export default Product;
