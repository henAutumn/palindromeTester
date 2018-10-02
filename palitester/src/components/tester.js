import React from 'react';
import {Component} from 'react';
import {Input, Card, CardTitle, Col, Row} from 'reactstrap';

export default class Tester extends Component {
    
  
    
  
    render() {
      return (
          <div>
        <form >
          <label>New Word: 
            <Input  />
          </label>
          <input className='btn btn-success' type="submit" value= "submit" />
        </form>
         <Row>
                 
         </Row>
     </div>
      );
    }
  };


