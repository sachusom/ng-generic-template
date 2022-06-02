import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevGuideBreadcrumbComponent } from './dev-guide-breadcrumb.component';

describe('DevGuideBreadcrumbComponent', () => {
  let component: DevGuideBreadcrumbComponent;
  let fixture: ComponentFixture<DevGuideBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevGuideBreadcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevGuideBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
