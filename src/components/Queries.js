import React from "react";
import DataService from "../services/DataService";
import { Label, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Queries extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selection: 'Query List',
            dropdownOpen: false,
            title: null,
            data: [],
            startDate: null,
            endDate: null,
            date: null,
            num1: null,
            num2: null,
            ulat: null,
            ulong: null,
            llat: null,
            llong: null
        }
    }

    toggle = (selection) => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            selection : selection
        });
    }
    
    query1 = () => {
        DataService.query("query1", {
                startDate : this.state.startDate,
                endDate: this.state.endDate
        }).then(respone => {this.setState({data: respone.data})});
        console.log("hello query1");
    }

    query2 = () => {
        DataService.query("query2", {
            startDate : this.state.startDate,
            endDate: this.state.endDate,
            typeId: this.state.num1
        }).then(respone => {this.setState({data: respone.data})});
        console.log("hello query2");
    }

    query3 = () => {
        DataService.query("query3", {
            date: this.state.date
        }).then(respone => {this.setState({data: respone.data})});
        console.log("hello query3");
    }

    query4 = () => {
        DataService.query("query4", {
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }).then(respone => {this.setState({data: respone.data})});
        console.log("hello query4");
    }


    query5 = () => {
        DataService.query("query5", {
            date: this.state.date,
            upperLat: this.state.ulat,
            upperLong: this.state.ulong,
            lowerLat: this.state.llat,
            lowerLong: this.state.llong
        }).then(respone => {this.setState({data: respone.data})});
        console.log(this.state.data);
        console.log("hello query5");
    }


    query6 = () => {
        DataService.query("query6", {
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }).then(respone => {this.setState({data: respone.data})});
        console.log("hello query6");
    }


    query7 = () => {
        DataService.query("query7", {
            numOfTimesInvolved: this.state.num1
        }).then(respone => {this.setState({data: respone.data})});
        console.log("hello query7");
    }


    query8 = () => {
        DataService.query("query8", {
            rank: this.state.num1
        }).then(respone => {this.setState({data: respone.data})});
        console.log("hello query8");
    }


    query9 = () => {
        DataService.query("query9", {
            numOfPremises: this.state.num1
        }).then(respone => {this.setState({data: respone.data})});
        console.log("hello query9");
    }

    query10 = () => {
        DataService.query("query10", {
            numOfPremises: this.state.num1
        }).then(respone => {this.setState({data: respone.data})});
        console.log("hello query10");
    }

    query11 = () => {
        DataService.query("query11", {
            numOfPremises: this.state.num1
        }).then(respone => {this.setState({data: respone.data})});
        console.log("hello query11");
    }

    query12 = () => {
        DataService.query("query12", {
            date: this.state.date,
            numOfPotHoles: this.state.num2,
            numOfPremises: this.state.num1
        }).then(respone => {this.setState({data: respone.data})});
        console.log("hello query12");
    }

    render(){
        return(
            <div>
                <h2>Select a query to execute ...</h2>
                <Dropdown className ="tc ma3" isOpen={this.state.dropdownOpen} 
                    toggle={(e) => this.toggle(e.currentTarget.textContent)}>
                    <DropdownToggle caret>
                        {this.state.selection}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Query1</DropdownItem>
                        <DropdownItem>Query2</DropdownItem>
                        <DropdownItem>Query3</DropdownItem>
                        <DropdownItem>Query4</DropdownItem>
                        <DropdownItem>Query5</DropdownItem>
                        <DropdownItem>Query6</DropdownItem>
                        <DropdownItem>Query7</DropdownItem>
                        <DropdownItem>Query8</DropdownItem>
                        <DropdownItem>Query9</DropdownItem>
                        <DropdownItem>Query10</DropdownItem>
                        <DropdownItem>Query11</DropdownItem>
                        <DropdownItem>Query12</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                {(() => {switch (this.state.selection) {
                    case "Query1":
                        return (
                            <div>
                                <p>Find  the  total  requests  per  type  that  were  created  within  a  specified 
                                    time  range  and  sort them in a descending order.</p>
                                <Label for="startDate">Enter start Date</Label>
                                <Input className="tc ma3" type="date" name="startDate" id="startDate" placeholder="Enter start date" onChange={(e) => this.setState({startDate: `${e.target.value}`})}/>
                                <Label for="endDate">Enter end Date</Label>
                                <Input className="tc ma3" type="date" name="endDate" id="endDate" placeholder="Enter end date" onChange={(e) => this.setState({endDate: `${e.target.value}`})}/>
                                <button onClick={this.query1} className="btn btn-secondary tc ma3 grow">
                                    Query 1
                                </button>
                            </div>);
                    case "Query2":
                        return (
                            <div> 
                                <p>Find the total requests per day for a specific request type and time range.</p>
                                <Label for="startDate">Enter start Date</Label>
                                <Input className="tc ma3" type="date" name="startDate" id="startDate" placeholder="Enter start date" onChange={(e) => this.setState({startDate: `${e.target.value}`})}/>
                                <Label for="endDate">Enter end Date</Label>
                                <Input className="tc ma3" type="date" name="endDate" id="endDate" placeholder="Enter end date" onChange={(e) => this.setState({endDate: `${e.target.value}`})}/>
                                <Input className="tc ma3" type="text" name="typeID" id="typeID" placeholder="Enter the type ID" onChange={(e) => this.setState({num1: `${e.target.value}`})}/> 
                                <button onClick={this.query2} className="btn btn-primary tc ma2 grow">
                                    Query 2
                                </button>
                            </div>);
                    case "Query3":
                        return (
                            <div>
                                <p>Find the most common service request per zipcode for a specific day.</p>
                                <Label for="date">Enter Date</Label>
                                <Input className="tc ma3" type="date" name="date" id="date" placeholder="Enter a date" onChange={(e) => this.setState({date: `${e.target.value}`})}/>
                                <button onClick={this.query3} className="btn btn-primary tc ma2 grow">
                                    Query 3
                                </button>
                            </div>);
                    case "Query4":
                        return (
                            <div>
                                <p>Find the average completion time per service request for a specific date range.</p>
                                <Label for="startDate">Enter start Date</Label>
                                <Input className="tc ma3" type="date" name="startDate" id="startDate" placeholder="Enter start date" onChange={(e) => this.setState({startDate: `${e.target.value}`})}/>
                                <Label for="endDate">Enter end Date</Label>
                                <Input className="tc ma3" type="date" name="endDate" id="endDate" placeholder="Enter end date" onChange={(e) => this.setState({endDate: `${e.target.value}`})}/>
                                <button onClick={this.query4} className="btn btn-primary tc ma2 grow">
                                    Query 4
                                </button>
                            </div>);
                    case "Query5":
                        return (
                            <div>
                                <p>Find the most common service request in a specified bounding box (as designated by
                                    GPS-coordinates) for a specific day.</p>
                                <Label for="date">Enter date</Label>
                                <Input className="tc ma3" type="date" name="date" id="date" placeholder="Enter a date" onChange={(e) => this.setState({date: `${e.target.value}`})}/>
                                <Input className="tc ma3" type="text" name="upperLat" id="upperLat" placeholder="Enter the upper cornet latitude of the bounding box" onChange={(e) => this.setState({ulat: `${e.target.value}`})}/>
                                <Input className="tc ma3" type="text" name="upperLong" id="upperLong" placeholder="Enter the upper cornet longitude of the bounding box" onChange={(e) => this.setState({ulong: `${e.target.value}`})}/>
                                <Input className="tc ma3" type="text" name="lowerLat" id="lowerLat" placeholder="Enter the lower cornet latitude of the bounding box" onChange={(e) => this.setState({llat: `${e.target.value}`})}/>
                                <Input className="tc ma3" type="text" name="lowerLong" id="lowerLong" placeholder="Enter the lower cornet longitude of the bounding box" onChange={(e) => this.setState({llong: `${e.target.value}`})}/>
                                <button onClick={this.query5} className="btn btn-primary tc ma2 grow">
                                    Query 5
                                </button>
                            </div>);
                    case "Query6":
                        return (
                            <div>
                                <p>Find the top-5 Special Service Areas (SSA) with regards to total number of requests 
                                    per day for a specific date range (for service requests types that SSA is available:
                                    abandoned vehicles,garbage carts, graffiti removal, pot holes reported)</p>
                                <Label for="startDate">Enter start Date</Label>
                                <Input className="tc ma3" type="date" name="startDate" id="startDate" placeholder="Enter start date" onChange={(e) => this.setState({startDate: `${e.target.value}`})}/>
                                <Label for="endDate">Enter end Date</Label>
                                <Input className="tc ma3" type="date" name="endDate" id="endDate" placeholder="Enter end date" onChange={(e) => this.setState({endDate: `${e.target.value}`})}/>
                                <button onClick={this.query6} className="btn btn-primary tc ma2 grow">
                                    Query 6
                                </button>
                            </div>);
                    case "Query7":
                        return (
                            <div>
                                <p>Find the license plates (if any) that have been involved in abandoned vehicle 
                                    complaints more than once.</p>
                                <Input className="tc ma3" type="text" name="numberInvolved" id="numberInvolved" placeholder="Enter the number of times involved" onChange={(e) => this.setState({num1: `${e.target.value}`})}/>
                                <button onClick={this.query7} className="btn btn-secondary tc ma2 grow">
                                    Query 7
                                </button>
                            </div>);
                    case "Query8":
                        return (
                            <div>
                                <p>Find the second most common color of vehicles involved in abandoned vehicle complaints.</p>
                                <Input className="tc ma3" type="text" name="rank" id="rank" placeholder="Enter rank" onChange={(e) => this.setState({num1: `${e.target.value}`})}/>
                                <button onClick={this.query8} className="btn btn-primary tc ma2 grow">
                                    Query 8
                                </button>
                            </div>);
                    case "Query9":
                        return (
                            <div>
                                <p>Find the rodent baiting requests where the number of premises baited is less than a
                                    specified number.</p>
                                <Input className="tc ma3" type="text" name="premisesNum" id="premisesNum" placeholder="Enter number of premises" onChange={(e) => this.setState({num1: `${e.target.value}`})}/>
                                <button onClick={this.query9} className="btn btn-primary tc ma2 grow">
                                    Query 9
                                </button>
                            </div>);
                    case "Query10":
                        return (
                            <div>
                                <p>Find the rodent baiting requests where the number of premises with garbage baited is less than a
                                    specified number.</p>
                                <Input className="tc ma3" type="text" name="premisesNum" id="premisesNum" placeholder="Enter number of premises" onChange={(e) => this.setState({num1: `${e.target.value}`})}/>
                                <button onClick={this.query10} className="btn btn-primary tc ma2 grow">
                                    Query 10
                                </button>
                            </div>);
                    case "Query11":
                        return (
                            <div>
                                <p>Find the rodent baiting requests where the number of premises with rats baited is less than a
                                    specified number.</p>
                                <Input className="tc ma3" type="text" name="premisesNum" id="premisesNum" placeholder="Enter number of premises" onChange={(e) => this.setState({num1: `${e.target.value}`})}/>
                                <button onClick={this.query11} className="btn btn-primary tc ma2 grow">
                                    Query 11
                                </button>
                            </div>);
                    case "Query12":
                        return (
                            <div>
                                <p>Find the police districts that have handled “pot holes” requests with more than one
                                    numberof potholes on the same day that they also handled “rodent baiting” requests 
                                    with more thanone number of premises baited, for a specific day.</p>
                                <Label for="date">Enter Date</Label>
                                <Input className="tc ma3" type="date" name="date" id="date" placeholder="Enter Date" onChange={(e) => this.setState({date: `${e.target.value}`})}/>
                                <Input className="tc ma3" type="text" name="premisesNum" id="premisesNum" placeholder="Enter number of premises" onChange={(e) => this.setState({num1: `${e.target.value}`})}/>
                                <Input className="tc ma3" type="text" name="potholesNum" id="potHolesNum" placeholder="Enter number of potholes" onChange={(e) => this.setState({num2: `${e.target.value}`})}/>
                                <button onClick={this.query12} className="btn btn-primary tc ma2 grow">
                                    Query 12
                                </button>
                            </div>);
                    default:
                        return (<h1>No query is selected...</h1>);
                    }
                })()}

                {this.state.data && this.state.data.length ?
                    <div className = "tc ma5">
                        <Label for="reposnse">Respone</Label>
                        <Input type="textarea" name="text" id="response" defaultValue={this.state.data}/>
                    </div>
                :null}
            </div>
        );
    }
}

export default Queries;