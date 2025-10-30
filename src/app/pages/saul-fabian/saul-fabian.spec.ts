import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaulFabian } from './saul-fabian';

describe('SaulFabian', () => {
  let component: SaulFabian;
  let fixture: ComponentFixture<SaulFabian>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaulFabian]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaulFabian);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
