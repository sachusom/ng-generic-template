
import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { ModulesModule } from './modules/modules.module';
import { PipesModule } from './pipes/pipes.module';

const exportable = [
  ComponentsModule,
  DirectivesModule,
  ModulesModule,
  PipesModule,
];

@NgModule({
  imports: exportable,
  exports: exportable,
  providers: [DatePipe]
})
export class SharedModule { }
