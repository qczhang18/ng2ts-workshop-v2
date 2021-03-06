import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { SliderComponent } from './slider/slider.component';
import { ColorSliderComponent } from './color-slider/color-slider.component';

import { State } from './store/state';
import { colorReducer } from './store/reducer';

import { Store, createStore } from 'redux';

export function storeFactory() {
  return createStore(colorReducer);
}

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    SliderComponent,
    ColorSliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{provide: 'appStore', useFactory: storeFactory}],
  bootstrap: [AppComponent]
})
export class AppModule { }
