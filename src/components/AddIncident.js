import React, { useState } from "react";
import DataService from "../services/DataService";

const AddIncident = () => {
  const initialState = {
    completionDate: null,
    creationDate: null,
    reportId: null,
    serviceRequestNumber: null,
    status: null,
    type: {
      serviceType: null,
      typeId: null
    },
    location: {
        latitude: 0,
        locationId: null,
        locationLogLat: null,
        longitude: 0,
        streetAddress: null,
        xCoordinate: 0,
        yCoordinate: 0,
        zipCode: null
    },
    authority: {
        authorityId: null,
        censusTracts: 0,
        communityArea: 0,
        communityAreas: 0,
        historicalWards: 0,
        policeDistrict: 0,
        ssa: 0,
        ward: 0,
        wards: 0,
        zipCodes: 0
    }
  };
  const [report, setReport] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (name, value) => {
    setReport({ ...report, [name]: value });
  };

  const saveReport = () => {
    var data = {
      completionDate: report.completionDate,
      creationDate: report.creationDate,
      reportId: null,
      serviceRequestNumber: report.serviceRequestNumber,
      status: report.status,
      type: {
        serviceType: report.serviceType,
        typeId: null
      },
      location: {
          latitude: report.latitude,
          locationId: null,
          locationLogLat: report.locationLogLat,
          longitude: report.longitude,
          streetAddress: report.streetAddress,
          xCoordinate: report.xCoordinate,
          yCoordinate: report.yCoordinate,
          zipCode: report.zipCode
      },
      authority: {
          authorityId: null,
          censusTracts: report.censusTracts,
          communityArea: report.communityArea,
          communityAreas: report.communityAreas,
          historicalWards: report.historicalWards,
          policeDistrict: report.policeDistrict,
          ssa: report.ssa,
          ward: report.ward,
          wards: report.wards,
          zipCodes: report.zipCodes
      }
    };

    DataService.create(data)
      .then(response => {
        setReport({
            completionDate: response.data.completionDate,
            creationDate: response.data.creationDate,
            reportId: null,
            serviceRequestNumber: response.data.serviceRequestNumber,
            status: response.data.status,
            type: {
              serviceType: response.data.serviceType,
              typeId: null
            },
            location: {
                latitude: response.data.latitude,
                locationId: null,
                locationLogLat: response.data.locationLogLat,
                longitude: response.data.longitude,
                streetAddress: response.data.streetAddress,
                xCoordinate: response.data.xCoordinate,
                yCoordinate: response.data.yCoordinate,
                zipCode: response.data.zipCode
            },
            authority: {
                authorityId: null,
                censusTracts: response.data.censusTracts,
                communityArea: response.data.communityArea,
                communityAreas: response.data.communityAreas,
                historicalWards: response.data.historicalWards,
                policeDistrict: response.data.policeDistrict,
                ssa: response.data.ssa,
                ward: response.data.ward,
                wards: response.data.wards,
                zipCodes: response.data.zipCodes
            }
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newReport = () => {
    setReport(initialState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newReport}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="serviceRequesstNumber">Service Request Number</label>
            <input
              type="text"
              className="form-control"
              id="serviceRequesstNumber"
              required
              value={report.serviceRequestNumber}
              onChange={handleInputChange}
              name="serviceRequesstNumber"
            />
          </div>

          <div className="form-group">
            <label htmlFor="creationDate">Creation Date</label>
            <input
              type="date"
              className="form-control"
              id="creationDate"
              required
              value={report.creationDate}
              onChange={handleInputChange}
              name="creationDate"
            />
          </div>

          <div className="form-group">
            <label htmlFor="completionDate">Completion Date</label>
            <input
              type="date"
              className="form-control"
              id="completionDate"
              value={report.completionDate}
              onChange={handleInputChange}
              name="completionDate"
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <br />
            <select name="status" value={report.status} onChange={handleInputChange} required id="status">
                <option value="1">Abandoned Vehicle Complaint</option>
                <option value="2">Garbage Cart Black Maintenance/Replacement</option>
                <option value="3">Graffiti Removal</option>
                <option value="4">Pothole in Street</option>
                <option value="5">Rodent Baiting/Rat Complaint</option>
                <option value="6">Sanitation Code Violation</option>
                <option value="7">Street Lights - All/Out</option>
                <option value="8">Street Light Out</option>
                <option value="9">Tree Debris</option>
                <option value="10">Tree Trim</option>
            </select> 
          </div>

          <div className="form-group">
            <label htmlFor="streetAddress">Street Address</label>
            <input
              type="text"
              className="form-control"
              id="streetAddress"
              value={report.streetAddress}
              onChange={e => handleInputChange()}
              name="streetAddress"
            />
          </div>

          <div className="form-group">
            <label htmlFor="zipCode">ZIP Code</label>
            <input
              type="text"
              className="form-control"
              id="zipCode"
              value={report.streetAddress}
              onChange={handleInputChange}
              name="zipCode"
            />
          </div>

          <div className="form-group">
            <label htmlFor="policeDistrict">Police District</label>
            <input
              type="text"
              className="form-control"
              id="policeDistrict"
              value={report.streetAddress}
              onChange={handleInputChange}
              name="policeDistrict"
            />
          </div>

          <div className="form-group">
            <label htmlFor="communityArea">Community Area</label>
            <input
              type="text"
              className="form-control"
              id="communityArea"
              value={report.streetAddress}
              onChange={handleInputChange}
              name="communityArea"
            />
          </div>

          <div className="form-group">
            <label htmlFor="censusTracts">Census Tracts</label>
            <input
              type="text"
              className="form-control"
              id="censusTracts"
              value={report.streetAddress}
              onChange={handleInputChange}
              name="censusTracts"
            />
          </div>

          <div className="form-group">
            <label htmlFor="ssa">SSA</label>
            <input
              type="text"
              className="form-control"
              id="ssa"
              value={report.streetAddress}
              onChange={handleInputChange}
              name="ssa"
            />
          </div>

          <button onClick={saveReport} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddIncident;