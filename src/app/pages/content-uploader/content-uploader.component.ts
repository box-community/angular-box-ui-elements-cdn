import { Component } from '@angular/core';
import { BoxComponent } from 'src/app/components/box-component/box.component';
import { BoxComponentsType } from '../../enums/box-component';

@Component({
  selector: 'content-uploader',
  templateUrl: './content-uploader.component.html',
  styleUrls: ['./content-uploader.component.scss']
})

export class ContentUploaderComponent {
  contentUploader = {
    folderId: '0',
    boxCdnJS: 'https://cdn01.boxcdn.net/platform/elements/16.0.0/en-US/uploader.js',
    boxCdnCss: 'https://cdn01.boxcdn.net/platform/elements/16.0.0/en-US/uploader.css',
    name: BoxComponentsType.ContentUploader
  }
}
