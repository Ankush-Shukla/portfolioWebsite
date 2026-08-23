import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExperience } from './my-experience';

describe('MyExperience', () => {
  let component: MyExperience;
  let fixture: ComponentFixture<MyExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyExperience],
    }).compileComponents();

    fixture = TestBed.createComponent(MyExperience);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
