import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSuccesfulComponent } from './login-succesful.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginSuccesfulComponent', () => {
  let component: LoginSuccesfulComponent;
  let fixture: ComponentFixture<LoginSuccesfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ LoginSuccesfulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSuccesfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
