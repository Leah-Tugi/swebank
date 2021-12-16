import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFiveComponent } from './quiz-five.component';

describe('QuizFiveComponent', () => {
  let component: QuizFiveComponent;
  let fixture: ComponentFixture<QuizFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
