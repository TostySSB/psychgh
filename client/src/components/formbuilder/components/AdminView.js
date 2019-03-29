import React, { Component } from "react";
import CSVDownloader from "./CSVDownloader";
import XLSDownloader from "./XLSDownloader";
import URLDisplay from "./URLDisplay";
import {getFormID, getFormURL} from "../utils";

import {DropdownButton, MenuItem}  from "react-bootstrap";

export default class PractitionerView extends Component {
  componentDidMount() {
    const adminToken = this.props.params.adminToken;
    this.formID = getFormID(adminToken);
    this.props.getRecords(adminToken);
    this.props.loadSchema(this.formID);
  }
  render() {
    const properties = this.props.schema.properties;
    const title = this.props.schema.title;
    const ready = Object.keys(properties).length !== 0;
    const schemaFields = this.props.uiSchema["ui:order"];
    const formUrl = getFormURL(this.formID);

    let content = "loading";
    if (ready) {
      content = (
      <div>
        <h3>Results for {title}</h3>
        <DropdownButton title="Download results" id="bg-nested-dropdown" className="pull-right">
          <li>
            <CSVDownloader
              schema={this.props.schema}
              fields={schemaFields}
              records={this.props.records} />
          </li>
          <li>
            <XLSDownloader
              schema={this.props.schema}
              fields={schemaFields}
              records={this.props.records} />
          </li>
        </DropdownButton>
        <URLDisplay url={formUrl} />
        <table className="table table-striped">
        <thead>
          <tr>{
            schemaFields.map((key) => {
              return <th key={key}>{properties[key].title}</th>;
            })
          }</tr>
        </thead>
        <tbody>
        {this.props.records.map((record, idx) => {
          return (<tr key={idx}>{
            schemaFields.map((key) => {
              return <td key={key}>{String(record[key])}</td>;
            }
          )}
          </tr>);
        })}
        </tbody>
        </table>
      </div>);
    }
    return <div className="test">{content}</div>;
  }
}
