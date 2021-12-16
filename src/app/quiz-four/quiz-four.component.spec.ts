import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFourComponent } from './quiz-four.component';

describe('QuizFourComponent', () => {
  let component: QuizFourComponent;
  let fixture: ComponentFixture<QuizFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
