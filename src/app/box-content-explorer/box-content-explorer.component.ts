import { Component, OnInit, Renderer2, Input } from "@angular/core";
import { environment } from '../environment/environment';
import { HeadService } from "../services/head.service";

const BOX_CONTENT_EXPLORER_CDNS_JS = 'https://cdn01.boxcdn.net/platform/elements/16.0.0/en-US/explorer.js';
const BOX_CONTENT_EXPLORER_CDNS_CSS = 'https://cdn01.boxcdn.net/platform/elements/16.0.0/en-US/explorer.css';

declare let Box: any;

@Component({
  selector: 'box-content-explorer',
  templateUrl: './box-content-explorer.component.html',
  styleUrls: ['./box-content-explorer.component.scss']
})

export class BoxContentExplorerComponent implements OnInit {
  @Input() folderId = '';

  constructor(
    private renderer: Renderer2,
    private headService: HeadService
  ) { }

  ngOnInit() {
    this.loadContetnExplorerJs()
    this.loadConstentExplorerCss()
  }

  private loadConstentExplorerCss():void {
    if (this.headService.isStylesheetLoaded(BOX_CONTENT_EXPLORER_CDNS_CSS)) return
    const styleElement = this.headService.loadStylesheetLink(this.renderer, BOX_CONTENT_EXPLORER_CDNS_CSS);

    styleElement.onerror = () => {
      console.warn('Could not load Content Explorer Stylesheet!');
    }
  }

  private loadContetnExplorerJs():void {
    if (this.headService.isScriptLoaded(BOX_CONTENT_EXPLORER_CDNS_JS)) return
    const scriptElement = this.headService.loadJsScript(this.renderer, BOX_CONTENT_EXPLORER_CDNS_JS);

    scriptElement.onload = () => {
      const contentExplorer = new Box.ContentExplorer();
      contentExplorer.show(this.folderId, environment.BoxDeveloperTokent, {
        container: '#box-content-explorer'
      });
    }

    scriptElement.onerror = () => {
      console.warn('Could not load Content Explorer Script!');
    }
  }
}

