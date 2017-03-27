/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HorseJumpComponent } from './horse-jump.component';

describe('HorseJumpComponent', () => {
  let component: HorseJumpComponent;
  let fixture: ComponentFixture<HorseJumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorseJumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorseJumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
