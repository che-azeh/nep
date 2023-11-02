import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckUserStatusPage } from './check-user-status.page';

describe('CheckUserStatusPage', () => {
  let component: CheckUserStatusPage;
  let fixture: ComponentFixture<CheckUserStatusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CheckUserStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
