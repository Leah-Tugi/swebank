import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSixComponent } from './quiz-six.component';

describe('QuizSixComponent', () => {
  let component: QuizSixComponent;
  let fixture: ComponentFixture<QuizSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
