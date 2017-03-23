/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiseñoComponent } from './diseño.component';

describe('DiseñoComponent', () => {
  let component: DiseñoComponent;
  let fixture: ComponentFixture<DiseñoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiseñoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseñoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
