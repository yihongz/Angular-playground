import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  constructor(private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(
      res => console.log(res, res.id, res.username)
    )

    this.activedRoute.queryParams.subscribe(
      res => console.log(res)
    )

    setInterval(() => {
      this.router.navigate(['/']);
    }, 5000)
  }

}
