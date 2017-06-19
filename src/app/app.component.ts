import { Component, OnInit } from '@angular/core';

import { Vulnerability } from './model/vulnerability.model';
import { VulnerabilityService } from './vulnerability.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  title = 'Security Vulnerabilities';
  vulnerabilities:Vulnerability[];

  constructor(public vulnerabilityService: VulnerabilityService) {
  }

  ngOnInit() {
    this.vulnerabilities=this.vulnerabilityService.getVulnerabilities()
  }
}
