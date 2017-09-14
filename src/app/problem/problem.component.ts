import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/core';

import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ transform: 'translateX(100%)', opacity: 0 }),
          animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
        ])
      ]
    )
  ]
})
export class ProblemComponent implements OnInit {

  problems = [
    {
      description: 'What is truth?',
      code: 'return __;'
    },
    {
      description: 'Simple Math',
      code: 'function problem() { return 42 === 6 * __;}'
    }
  ];
  problem: any;
  problemId: string;
  message: string;
  isCorrect: boolean;
  isShowResult = false;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.problemId = params['id'];
      this.problem = 'function problem() {' + this.problems[this.problemId].code + '}';
      this.message = '';
      this.isCorrect = false;
    });

  }

  checkAnswerClick(answer) {
    this.isShowResult = true;
    if (this.checkAnswer(answer)) {
      this.message = 'Correct!';
      this.isCorrect = !this.isCorrect;
    } else {
      this.message = 'Incorrect!';
      this.isCorrect = !this.isCorrect;
    }
  }
  checkAnswer(answer) {
    const test = this.problems[this.problemId].code.replace('__', answer);
    console.log(new Function(test));
    // typescriptではevalを使えないらしい
    return new Function(test)();
  }
}
