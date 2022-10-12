import { Component, Input } from '@angular/core';

import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-paragraphs',
  templateUrl: './paragraphs.component.html',
  styleUrls: ['./paragraphs.component.css']
})
export class ParagraphsComponent {
  @Input() paragraphs = [];
  @Input() paragraphInt: number = 1;

  constructor(private _clipboardService: ClipboardService) { }

  onClickCopyText(text: string){
    this._clipboardService.copy(text);
  }
}
