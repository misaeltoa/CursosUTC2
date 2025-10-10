import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica3 } from './practica3';

describe('Practica3', () => {
  let component: Practica3;
  let fixture: ComponentFixture<Practica3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practica3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practica3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
