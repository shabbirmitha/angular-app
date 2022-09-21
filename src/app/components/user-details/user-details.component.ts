import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { NgxSpinnerService } from 'ngx-spinner'
import { map, timeout } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {

  public githubUserName:string;
  public githubProfile:any;
  public githubRepos:any[];
  public githubLang:Array<any>;
  public totalRepos:any;
  public errorMessage:string;

  constructor(private githubService:GithubService,
    private ngxSpinner:NgxSpinnerService) { }

  public searchUser(){

    if(this.githubUserName === undefined || this.githubUserName == ''){
      alert('Please enter a username.');
      return;
    }

    //spinner
    this.ngxSpinner.show();

    //profile
    this.githubService.getProfile(this.githubUserName).subscribe((data)=>{
      this.githubProfile = data;
      setTimeout(()=>{
        this.ngxSpinner.hide();
      }, 10000);
    },(error)=>{
      this.errorMessage = error;
    });
    

    //repos
    this.githubService.getRepo(this.githubUserName).subscribe((data)=>{
      this.githubRepos = data;
      this.totalRepos = data.length;
      this.ngxSpinner.hide();
    },(error)=>{
      this.errorMessage = error;
    });

    // this.githubRepos.forEach(repo => {
    //   this.githubService.getLang(this.githubUserName, repo.name).subscribe((data)=>{
    //     this.githubLang = data;
    //   },(error)=>{
    //     this.errorMessage = error;
    //   });
    // });
      

  }

  ngOnInit(): void {
  }


  
}
