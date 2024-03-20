import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallplanComponent } from './viewallplan.component';

describe('ViewallplanComponent', () => {
  let component: ViewallplanComponent;
  let fixture: ComponentFixture<ViewallplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewallplanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewallplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
