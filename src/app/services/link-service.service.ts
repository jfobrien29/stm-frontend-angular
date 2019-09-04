import { Injectable } from '@angular/core';
import {SimpleLink, SAMPLE_LINKS} from '../models/link';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  getTargetLink(): Observable<SimpleLink> {
    const randomLink = this.getRandomLink();
    return of(randomLink);
  }

  private getRandomLink(): SimpleLink {
    const randomIndex = Math.floor(Math.random() * SAMPLE_LINKS.length);
    return SAMPLE_LINKS[randomIndex];
  }
}
