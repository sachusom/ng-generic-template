import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIdCardComponent } from './user-id-card.component';

describe('UserIdCardComponent', () => {
  let component: UserIdCardComponent;
  let fixture: ComponentFixture<UserIdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserIdCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
