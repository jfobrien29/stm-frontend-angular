import { Injectable } from '@angular/core';
import { SimpleLink, SAMPLE_LINKS } from '../models/link';
import { FirebaseService } from './firebase.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DocumentChangeAction } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private readonly fbService: FirebaseService) { }

  getTargetLink(): Observable<string> {
    return this.fbService.getLinks().pipe(map(links => this.getRandomFbLink(links)));
  }

  private getRandomFbLink(links: DocumentChangeAction<unknown>[]): string {
    const randomIndex = Math.floor(Math.random() * links.length);
    const linkDoc = links[randomIndex].payload.doc.data() as {link: string};
    return linkDoc.link;
  }
}
