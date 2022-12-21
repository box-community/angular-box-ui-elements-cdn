import { Component } from '@angular/core';
import { BoxComponent } from 'src/app/components/box-component/box.component';
import { BoxComponentsType } from '../../enums/box-component';

@Component({
  selector: 'content-explorer',
  templateUrl: './content-explorer.component.html',
  styleUrls: ['./content-explorer.component.scss']
})

export class ContentExplorerComponent {
  contentExplorer = {
    folderId: '0',
    boxCdnJS: 'https://cdn01.boxcdn.net/platform/elements/16.0.0/en-US/explorer.js',
    boxCdnCss: 'https://cdn01.boxcdn.net/platform/elements/16.0.0/en-US/explorer.css',
    name: BoxComponentsType.ContentExplorer
  }
}
