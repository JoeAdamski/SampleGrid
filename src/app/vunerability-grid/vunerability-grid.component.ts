import { Component, OnInit, Input } from '@angular/core';

import { Vulnerability, SeverityLabels } from './../model/vulnerability.model';

/* Table Heading Constants */
const HEADER_SEVERITY='Severity';
const HEADER_ISSUETYPE='Issue Type';
const HEADER_CWEID='CWE ID';
const HEADER_SOURCEPATH='Source Path';
const HEADER_SOURCEFILE='Source File';
const HEADER_LINE='Line';

// Styles to use for severity levels. Although we only use color
// for now, by placing the entire style here its easier to work with.
const SEVERITY_CELL_STYLE = [
  {color: 'green'},  // Low
  {color: 'blue'},   // Med
  {color: 'orange'}, // High
  {color: 'red'}     // Very High
]

/* Utility Functions */
function getSeverityValue(sev:string):number {
  return SeverityLabels.findIndex((value)=>value===sev);
}

function compareSeverities(value1:string, value2:string):number {
  return (getSeverityValue(value1)-getSeverityValue(value2))
}

// Fix problem with default sort being case sensitive.
function compareStrings(str1:string, str2:string):number {
  return (str1.toUpperCase().localeCompare(str2.toUpperCase()));
}

// Provide severity cell custom styling - get correct type...
function getSeverityCellStyle(params:any):any {
  return SEVERITY_CELL_STYLE[getSeverityValue(params.value)];
}

@Component({
  selector: 'vulnerability-grid',
  templateUrl: './vunerability-grid.component.html'
})
export class VunerabilityGridComponent implements OnInit {
  
  @Input() vulnerabilities:Vulnerability[];
  columnDefs:any;
  rowData:any;

  constructor() {
  }
  
  ngOnInit() {
    this.columnDefs = [
      {headerName: HEADER_SEVERITY, field: 'severityLabel', width: 100, comparator: compareSeverities, cellStyle: getSeverityCellStyle },
      {headerName: HEADER_ISSUETYPE, field: 'issueType', width: 300, comparator: compareStrings },
      {headerName: HEADER_CWEID, field: 'cweId', width: 80},
      {headerName: HEADER_SOURCEPATH, field: 'sourcePath', width: 250, comparator: compareStrings },
      {headerName: HEADER_SOURCEFILE, field: 'sourceFile', width: 120, comparator: compareStrings },
      {headerName: HEADER_LINE, field: 'line', width: 80}
    ]
    this.rowData = this.vulnerabilities;
  }

  onGridReady(params) {
      params.api.sizeColumnsToFit();
  }

}
