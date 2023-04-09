import React from 'react';
import Header from '../Header/header';
import './admin.css';

const Admin = () => {
  return (
    <div>
        
<div>
  <h2>File Upload &amp; Image Preview</h2>
  <p className="lead">No Other Files <b>Only CSVs</b></p>
  <form id="file-upload-form" className="uploader">
    <input id="file-upload" type="file" name="fileUpload" accept="image/*" />
    <label htmlFor="file-upload" id="file-drag">
      <img id="file-image" src="#" alt="Preview" className="hidden" />
      <div id="start">
        <i className="fa fa-download" aria-hidden="true" />
        <div>Select a file or drag here</div>
        <div id="notimage" className="hidden">Please select an image</div>
        <span id="file-upload-btn" className="btn btn-primary">Select a file</span>
      </div>
      <div id="response" className="hidden">
        <div id="messages" />
        <progress className="progress" id="file-progress" value={0}>
          <span>0</span>%
        </progress>
      </div>
    </label>
    <a>
      <input type="button" className="btn btn-success" defaultValue="SUBMIT" /></a>
    
  </form>
</div>

    </div>
  )
}

export default Admin