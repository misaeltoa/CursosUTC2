import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YahirMartinez } from './yahir-martinez';

describe('YahirMartinez', () => {
  let component: YahirMartinez;
  let fixture: ComponentFixture<YahirMartinez>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YahirMartinez]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YahirMartinez);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
