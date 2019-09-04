import { Component } from '@angular/core';
import { LinkService } from '../../services/link-service.service';
import { SimpleLink } from 'src/app/models/link';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor(private readonly linkService: LinkService, private readonly router: Router) { }

  getLinkAndNavigate() {
    console.log('Finding Link');
    this.linkService.getTargetLink().subscribe((link: SimpleLink) => {
      console.log('Link Found, Navigating...', link);
    });
  }
}
