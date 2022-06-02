import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSocialTwitterComponent } from './user-social-twitter.component';

describe('UserSocialTwitterComponent', () => {
  let component: UserSocialTwitterComponent;
  let fixture: ComponentFixture<UserSocialTwitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSocialTwitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSocialTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
