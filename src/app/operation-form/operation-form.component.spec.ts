import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationFormComponent } from './operation-form.component';

describe('OperationFormComponent', () => {
  let component: OperationFormComponent;
  let fixture: ComponentFixture<OperationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperationFormComponent]
    });
    fixture = TestBed.createComponent(OperationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
