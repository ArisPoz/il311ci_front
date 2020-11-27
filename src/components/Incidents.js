import React from 'react';
import PopUp from './PopUp';
import {Button} from 'reactstrap';

class Incidents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceRequestNumber: props.serviceRequestNumber,
            type: props.type,
            creationDate: props.creationDate,
            status: props.status,
            details: props.report,
            showPopup: false
        }
    }

    togglePop = () => {
        this.setState({
            showPopup: !this.state.showPopup
        });
    };

    render(){
        const { serviceRequestNumber, type, creationDate, status, details} = this.state;
        let styles = {
            maxWidth: '700px'
        };

        return (
            <div className="tc grow br3 pa3 ma2 dib bw2 shadow-5 incCard">
                <div className="float-right">
                    <Button color="danger" size="sm" to="/delete">X</Button>
                </div>
                <div onClick={this.togglePop.bind(this)} style={styles}>
                    <div className="card-header">
                    <h2>{serviceRequestNumber}</h2>
                    <h4 className="card-title btn btn-secondary disabled">{type}</h4>
                    </div>
                    <div className="card-body">
                    <small className="text-muted mb-2">Creation Date: </small>
                    <small className="mb-3">{creationDate.split("T", 1)}</small>
                    <p className="card-text">
                    <small className="text-muted mb-2">Status: </small>
                        {status}</p>
                    </div>
                    <div className="card-footer">
                        {this.state.showPopup ?  <PopUp  
                                reportId={details.reportId}  
                                completionDate={details.completionDate.split("T", 1)}
                                streetAddress={details.location.streetAddress}
                                zipCode={details.location.zipCode}
                        />  : 'Click for details...' } 
                    </div>
    
                </div>
            </div>
        );
    }
}

export default Incidents;