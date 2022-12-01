import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSuccesfulComponent } from './register-succesful.component';

describe('RegisterSuccesfulComponent', () => {
  let component: RegisterSuccesfulComponent;
  let fixture: ComponentFixture<RegisterSuccesfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSuccesfulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSuccesfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
