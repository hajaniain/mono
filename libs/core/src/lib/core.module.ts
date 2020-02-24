import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HelloModule } from './hello/hello.module';

@NgModule({
  imports: [CommonModule, HelloModule],
  exports: [HelloModule]
})
export class CoreModule {}
