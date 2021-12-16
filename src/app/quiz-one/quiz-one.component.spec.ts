import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizOneComponent } from './quiz-one.component';

describe('QuizOneComponent', () => {
  let component: QuizOneComponent;
  let fixture: ComponentFixture<QuizOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
