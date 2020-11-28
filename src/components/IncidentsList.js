import React from 'react';
import axios from 'axios';
import Pagination from "react-js-pagination";
import Incidents  from './Incidents';
import Schroll from './Scroll';
import SearchBox from './SearchBox';

class IncidentsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reportDetails: [],
      activePage:0,
      totalPages: null,
      itemsCountPerPage:null,
      totalItemsCount:0,
      searchfield: ''
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.fetchURL = this.fetchURL.bind(this);
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    console.log(this.state.searchfield);
  }

  fetchURL(page) {

    axios.get(`http://localhost:8080/reports?page=${page}&size=30`)
      .then( response => {

          const totalPages = response.data.totalPages;
          const itemsCountPerPage = response.data.size;
          const totalItemsCount = response.data.totalElements;

          this.setState({totalPages: totalPages})
          this.setState({totalItemsCount: totalItemsCount})
          this.setState({itemsCountPerPage: itemsCountPerPage})

          const results = response.data.content;

          const updatedResults = results.map(results => {

            var timestamp = new Date(results.pubDate)
            var dateString = timestamp.toGMTString()
            return {
                ...results, dateString
              }
            });

            this.setState({reportDetails: updatedResults});
            console.log(updatedResults);
            console.log(this.state.activePage);
            console.log(this.state.itemsCountPerPage);

        }
      );
    }

  componentDidMount () {
      this.fetchURL(this.state.activePage)
    }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber})
    this.fetchURL(pageNumber)

    }

  populateRowsWithData = () => {
    const {reportDetails, searchfield} = this.state;
    
    const reportData = reportDetails.map(report => {
        return <Incidents
            key = {report.reportId}
            creationDate = {report.creationDate}
            completionDate = {report.completionDate}
            status = {report.status}
            serviceRequestNumber = {report.serviceRequestNumber}
            type = {report.type.serviceType}
            report = {report}
          />;
      });

      console.log(reportData);

      const filtered = reportData.filter(report =>{
        return report.props.status.toLowerCase().includes(searchfield.toLowerCase());
      });

      return filtered;
    }

  render(){
    const {totalItemsCount, activePage, itemsCountPerPage} = this.state;
    return (
      <div >
            <div className="d-flex justify-content-center">
              <h1>Total Reports: <span>{totalItemsCount}</span></h1>
            </div>
            <SearchBox searchChange={this.onSearchChange}/>
            <div className="d-flex justify-content-center center">
                <Pagination
                  hideNavigation
                  activePage={activePage}
                  itemsCountPerPage={itemsCountPerPage}
                  totalItemsCount={totalItemsCount}
                  pageRangeDisplayed={10}
                  itemClass='page-item fs10'
                  linkClass='btn'
                  nextPageText
                  onChange={this.handlePageChange}
                />
            </div>
            <Schroll>{this.populateRowsWithData()}</Schroll>
      </div>
    );
  }
}

export default IncidentsList;