import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSocialLinkedinComponent } from './user-social-linkedin.component';

describe('UserSocialLinkedinComponent', () => {
  let component: UserSocialLinkedinComponent;
  let fixture: ComponentFixture<UserSocialLinkedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSocialLinkedinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSocialLinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
