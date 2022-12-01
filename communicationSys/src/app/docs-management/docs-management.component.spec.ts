import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsManagementComponent } from './docs-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('DocsManagementComponent', () => {
  let component: DocsManagementComponent;
  let fixture: ComponentFixture<DocsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule,RouterTestingModule],
      declarations: [ DocsManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
