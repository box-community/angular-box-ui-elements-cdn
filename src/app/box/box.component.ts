import { Component, OnInit, Renderer2, Input } from "@angular/core";
import { environment } from '../environment/environment';
import { HeadService } from "../services/head.service";
import { BoxComponentsType } from '../types/box-component'

declare let Box: any;

export interface BoxComponentInterface {
  folderId: string;
  boxCdnJS: string;
  boxCdnCss: string;
  name: BoxComponentsType
}

@Component({
  selector: `box-component`,
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})

export class BoxComponent implements OnInit {
  @Input() componentData: BoxComponentInterface = {
    folderId: '',
    boxCdnJS: '',
    boxCdnCss: '',
    name: BoxComponentsType.ContentExplorer
  };

  constructor(
    private renderer: Renderer2,
    private headService: HeadService
  ) { }

  ngOnInit() {
    if (this.componentData.name) {
      this.loadJs(this.componentData.boxCdnJS)
      this.loadCss(this.componentData.boxCdnCss)
    }
  }

  private loadCss(href: string):void {
    if (href === '' || this.headService.isStylesheetLoaded(href)) return
    const styleElement = this.headService.loadStylesheetLink(this.renderer, href);

    styleElement.onerror = () => {
      console.warn(`Could not load ${this.componentData.name} Stylesheet!`);
    }
  }

  private loadJs(src: string):void {
    if (src === '' || this.headService.isScriptLoaded(src)) return
    const scriptElement = this.headService.loadJsScript(this.renderer, src);

    scriptElement.onload = () => {
      const contentUploader = new Box[this.componentData.name]();

      contentUploader.show(this.componentData.folderId, environment.BoxDeveloperToken, {
        container: `#${this.componentData.name.toLowerCase()}`
      });
    }

    scriptElement.onerror = () => {
      console.warn(`Could not load ${this.componentData.name} Script!`);
    }
  }
}

