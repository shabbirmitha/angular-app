import { NgFor } from '@angular/common';
import { Component, INJECTOR, Input, OnInit } from '@angular/core';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  @Input() githubRepos:any[];
  @Input() githubLang:any[];
  @Input() totalRepos:any;
  
  page:number=1;
  constructor() {

  }

  
  ngOnInit(): void {
    
  }

}
