import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {

  problems = [
    {
      description: 'What is truth?',
      code: 'function problem() { return __;}'
    },
    {
      description: 'Simple Math',
      code: 'function problem() { return 42 === 6 * __;}'
    }
  ];
  problem: any;
  problemId: string;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.problemId = this.route.snapshot.paramMap.get('id');


  }

}
