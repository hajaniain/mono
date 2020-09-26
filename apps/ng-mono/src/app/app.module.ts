import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@mono/core';
import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { StateModule } from '@mono/state';

@NgModule({
  declarations: [AppComponent, MyCounterComponent],
  imports: [BrowserModule, CoreModule, StateModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
