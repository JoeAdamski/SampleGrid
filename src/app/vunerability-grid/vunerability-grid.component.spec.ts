import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VunerabilityGridComponent } from './vunerability-grid.component';

describe('VunerabilityGridComponent', () => {
  let component: VunerabilityGridComponent;
  let fixture: ComponentFixture<VunerabilityGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VunerabilityGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VunerabilityGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
