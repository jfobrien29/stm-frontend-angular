import { Component, OnDestroy } from '@angular/core';
import { LinkService } from '../../services/link-service.service';
import { SimpleLink } from 'src/app/models/link';
import { Router } from '@angular/router';
import { ReplaySubject, interval } from 'rxjs';
import { takeUntil, delay, mapTo, map } from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnDestroy {

  showSpinner = false;
  private readonly destroyed = new ReplaySubject(1);

  dots = ['!', '!!', '!!!', '!!'];
  dotsObservable = interval(400).pipe(map((value) => this.dots[value % this.dots.length]));

  constructor(private readonly linkService: LinkService) { }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  getLinkAndNavigate() {
    console.log('Finding Link');

    this.linkService.getTargetLink().pipe(delay(500), takeUntil(this.destroyed)).subscribe((link: string) => {
      console.log('Link Found, Navigating...', link);
      window.location.href = link;
    });

    this.showSpinner = true;
  }
}
