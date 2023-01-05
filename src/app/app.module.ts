import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from '@app/components/box-component/box.component';
import { ContentExplorerComponent } from '@app/pages/content-explorer/content-explorer.component';
import { ContentUploaderComponent } from '@app/pages/content-uploader/content-uploader.component';
import { HeadService } from '@app/services/head.service';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    ContentExplorerComponent,
    ContentUploaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    HeadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
