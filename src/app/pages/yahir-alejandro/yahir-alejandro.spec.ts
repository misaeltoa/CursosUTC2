import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YahirAlejandro } from './yahir-alejandro';

describe('YahirAlejandro', () => {
  let component: YahirAlejandro;
  let fixture: ComponentFixture<YahirAlejandro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YahirAlejandro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YahirAlejandro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
