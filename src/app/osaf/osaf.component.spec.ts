import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsafComponent } from './osaf.component';

describe('OsafComponent', () => {
  let component: OsafComponent;
  let fixture: ComponentFixture<OsafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
