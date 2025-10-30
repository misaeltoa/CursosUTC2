import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SergioLuis } from './sergio-luis';

describe('SergioLuis', () => {
  let component: SergioLuis;
  let fixture: ComponentFixture<SergioLuis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SergioLuis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SergioLuis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
