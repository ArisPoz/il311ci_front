import React from 'react';
import {Button} from 'reactstrap';
import './PopUp.css';  

class Popup extends React.Component {  
  render() {  
        return (  
            <div>
                <div className="float-right">
                    <Button color="warning" size="sm" to="/edit">Edit</Button>
                </div>
                <h2>Report ID: {this.props.reportId}</h2>
                <h4>Completion Date: {this.props.completionDate}</h4>
                <h4>Location: {this.props.streetAddress}</h4>
                <h4>Zip code: {this.props.zipCode}</h4>
            </div>  
        );  
    }  
}  

export default Popup;