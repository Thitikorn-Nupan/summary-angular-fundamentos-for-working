import {Component, OnInit} from '@angular/core';
import {GoogleSocialLoginService} from '../../../service/google-social-login.service';
import {Message} from '../../../models/api/message';

@Component({
  selector: 'app-content',
  standalone: false,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{

  content: string = "";

  constructor(private readonly googleSocialLoginService: GoogleSocialLoginService) {}

  ngOnInit(): void {
    this.googleSocialLoginService.getPrivateContent().subscribe((data: Message) => this.content = data.message);
  }
}
