import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LvyCompilerComponent } from './lvy-compiler.component';

describe('LvyCompilerComponent', () => {
  let component: LvyCompilerComponent;
  let fixture: ComponentFixture<LvyCompilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LvyCompilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LvyCompilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
