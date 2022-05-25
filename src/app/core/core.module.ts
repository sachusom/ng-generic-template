import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AppLoaderComponent } from './components/app-loader/app-loader.component';

@NgModule({
  declarations: [
    AppLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AppLoaderComponent]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error("You should import core module only in the root module");
    }
  }
}
