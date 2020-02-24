import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloModule } from '@mono/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HelloModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
