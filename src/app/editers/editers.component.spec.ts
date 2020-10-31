import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditersComponent } from './editers.component';

describe('EditersComponent', () => {
  let component: EditersComponent;
  let fixture: ComponentFixture<EditersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
