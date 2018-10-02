import React from 'react';
import {Component} from 'react';
import {Input, Card, CardTitle, Col, Row} from 'reactstrap';

export default class Tester extends Component {
    constructor(props) {
      super(props);
      this.state = 
      {
        value: '',
        reversed:'',
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.checkWord = this.checkWord.bind(this);
    }
  
    handleChange(event) {
        var regex =/\W/g;
      this.setState({value: event.target.value.replace(regex,'').toLowerCase()});
      this.setState({reversed: event.target.value.split('').reverse().join('') }); 
      event.preventDefault();
    }
  
    checkWord(event){
        
        if(this.state.value === this.state.reversed){
            this.palindromeList();
            } else{
            this.nonPalindromeList();
        }
        event.preventDefault();
    }

    palindromeList(){
            var item = this.state.value;
            var list = document.createElement('li');
            list.innerHTML=item;
            document.getElementById('pL').appendChild(list);
    }

    nonPalindromeList(){
        var item = this.state.value;
        var list = document.createElement('li');
        list.innerHTML=item;
        document.getElementById('nL').appendChild(list);
}
  
    render() {
      return (
          <div>
        <form onSubmit={this.checkWord}>
          <label>New Word: 
            <Input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input className='btn btn-success' type="submit" value= "submit" />
        </form>
         <Row>
             <Col md ="6">
             <Card body id="paliList">
                 <CardTitle>Words that are Palindromes:</CardTitle>
                 <ul id = "pL">
                     
                 </ul>
             </Card>
             </Col>
             <Col md ="6">
             <Card body id="nonList">
                 <CardTitle>Words that are not Palindromes:</CardTitle>
                 <ul id = "nL">
                     
                 </ul>
             </Card>                
             </Col >
         </Row>
     </div>
      );
    }
  };


