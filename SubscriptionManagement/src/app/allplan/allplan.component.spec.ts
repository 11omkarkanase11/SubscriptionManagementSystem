import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllplanComponent } from './allplan.component';

describe('AllplanComponent', () => {
  let component: AllplanComponent;
  let fixture: ComponentFixture<AllplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllplanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
