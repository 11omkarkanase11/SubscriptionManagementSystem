import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradedplansComponent } from './upgradedplans.component';

describe('UpgradedplansComponent', () => {
  let component: UpgradedplansComponent;
  let fixture: ComponentFixture<UpgradedplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpgradedplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpgradedplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
