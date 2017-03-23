/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZerocountsComponent } from './zerocounts.component';

describe('ZerocountsComponent', () => {
  let component: ZerocountsComponent;
  let fixture: ComponentFixture<ZerocountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZerocountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZerocountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
