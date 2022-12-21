import { Component } from '@angular/core';
import { BoxComponentsType } from './types/box-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-box-ui-elements-cdn';
  contentExplorer = {
    folderId: '0',
    boxCdnJS: 'https://cdn01.boxcdn.net/platform/elements/16.0.0/en-US/explorer.js',
    boxCdnCss: 'https://cdn01.boxcdn.net/platform/elements/16.0.0/en-US/explorer.css',
    name: BoxComponentsType.ContentExplorer
  }
  contentUploader = {
    folderId: '0',
    boxCdnJS: 'https://cdn01.boxcdn.net/platform/elements/16.0.0/en-US/uploader.js',
    boxCdnCss: 'https://cdn01.boxcdn.net/platform/elements/16.0.0/en-US/uploader.css',
    name: BoxComponentsType.ContentUploader
  }
}