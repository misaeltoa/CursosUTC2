import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JonathanAlexis } from './jonathan-alexis';

describe('JonathanAlexis', () => {
  let component: JonathanAlexis;
  let fixture: ComponentFixture<JonathanAlexis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JonathanAlexis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JonathanAlexis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
