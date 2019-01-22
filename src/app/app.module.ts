import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Components } from './components/components.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Components
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
