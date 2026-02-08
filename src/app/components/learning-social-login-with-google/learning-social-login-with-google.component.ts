import {Component, OnInit} from '@angular/core';
import {GoogleSocialLoginService} from '../../service/google-social-login.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-learning-social-login-with-google',
  standalone: false,
  templateUrl: './learning-social-login-with-google.component.html',
  styleUrl: './learning-social-login-with-google.component.css'
})
export class LearningSocialLoginWithGoogleComponent implements OnInit {

  protected googleLoginUrl: string = "";
  protected content: boolean = false;

  constructor(private readonly googleSocialLoginService: GoogleSocialLoginService,
              private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadUrlGoogleLogin()
    this.catchRedirectParamFromGoogleLogin();
  }

  private catchRedirectParamFromGoogleLogin() : void {
    this.route.queryParams.subscribe(params => {
        if (params["code"] !== undefined) {
          // ?code=4%2F0ATX87lNe0hKknP1yZnzBmbAl8xVy5JuQDmkHbgGpNM4LoMG5EnzQw3gCu-dsW6Ccn__OQQ&scope=email%20profile%20https:%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https:%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20openid&authuser=0&prompt=none
          this.googleSocialLoginService.getToken(params["code"]).subscribe(result => {
            if (result) {
              this.content = result;
            } else {
              this.content = false;
            }
          });
        }
      }
    );
  }

  protected onGoogleLogin(): void {
    window.location.href = this.googleLoginUrl // work as clicked on tag a
  }

  private loadUrlGoogleLogin() : void {
    this.googleSocialLoginService.getGoogleLoginUrl().subscribe((data: any) => (this.googleLoginUrl = data.url));
    /*
      console.log(data)
      {
          "authURL": "https://accounts.google.com/o/oauth2/auth?client_id=478907922437-fg3gg0d7bk5km0chljlb53oeb6muh8ii.apps.googleusercontent.com&redirect_uri=http://localhost:4200&response_type=code&scope=email%20profile%20openid"
      }
    */
  }
}
