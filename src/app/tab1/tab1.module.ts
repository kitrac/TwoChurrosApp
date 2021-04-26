import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab1Page} from './tab1.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

import {Tab1PageRoutingModule} from './tab1-routing.module';
import {LocalesCercanosComponent} from "./locales-cercanos/locales-cercanos.component";
import {LocalComponent} from "./local/local.component";
import {PipesModule} from "../shared/pipes/pipes.module";
import {CardCuponesComponent} from "./card-cupones/card-cupones.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    PipesModule
  ],
  declarations: [Tab1Page, LocalesCercanosComponent, LocalComponent, CardCuponesComponent]
})
export class Tab1PageModule {
}
