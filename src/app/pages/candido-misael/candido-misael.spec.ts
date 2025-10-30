import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidoMisael } from './candido-misael';

describe('CandidoMisael', () => {
  let component: CandidoMisael;
  let fixture: ComponentFixture<CandidoMisael>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidoMisael]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidoMisael);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
