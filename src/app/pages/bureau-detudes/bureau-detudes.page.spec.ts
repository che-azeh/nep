import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BureauDetudesPage } from './bureau-detudes.page';

describe('BureauDetudesPage', () => {
  let component: BureauDetudesPage;
  let fixture: ComponentFixture<BureauDetudesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BureauDetudesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
