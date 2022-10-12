import { Component, Output, EventEmitter } from '@angular/core';
import { TranscriptService } from '../services/transcript.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {
  @Output() paragraphEmitter = new EventEmitter();
  paragraphs = [];
  paragraphValue: number = 1;

  constructor(private homestarIpsum: TranscriptService){}

  onClick(number: string){
    let parsedInt = +number;
    this.paragraphs = this.homestarIpsum.getParagraphs(parsedInt);
    this.paragraphValue = 1;
    this.paragraphEmitter.emit(this.paragraphs);
  }

  onAddClick(){
    if(this.paragraphValue < 20){
      this.paragraphValue = this.paragraphValue + 1;
    }
  }

  onRemoveClick(){
    if(this.paragraphValue >= 2){
      this.paragraphValue = this.paragraphValue - 1;
    }
  }

}
