import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsegeComponent } from './csege.component';

describe('CsegeComponent', () => {
  let component: CsegeComponent;
  let fixture: ComponentFixture<CsegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
