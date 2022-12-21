import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './components/box-component/box.component';
import { ContentExplorerComponent } from './pages/content-explorer/content-explorer.component';
import { ContentUploaderComponent } from './pages/content-uploader/content-uploader.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
