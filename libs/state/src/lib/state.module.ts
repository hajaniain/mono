import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './counter.reducer';

@NgModule({
  imports: [CommonModule, StoreModule.forRoot({ count: counterReducer })],
  exports: [],
})
export class StateModule {}
