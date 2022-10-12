import { Injectable } from '@angular/core';

const hrModule = require('homestar-ipsum');

@Injectable({
  providedIn: 'root'
})
export class TranscriptService {
  constructor() { }

  getParagraphs(paragraphs: number){
    return hrModule.getMultipleParagraphs(paragraphs);
  }

}
