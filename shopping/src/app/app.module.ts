import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { GrommingComponent } from './gromming/gromming.component';
import { Iphone14Component } from './iphone14/iphone14.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ProfileComponent } from './profile/profile.component';
import { SamsungS23Component } from './samsung-s23/samsung-s23.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SmartGadgetsComponent } from './smart-gadgets/smart-gadgets.component';
import { SmartWatchesComponent } from './smart-watches/smart-watches.component';
import { TravelEasyComponent } from './travel-easy/travel-easy.component';
import { VivoV27ProComponent } from './vivo-v27-pro/vivo-v27-pro.component';
import { XiaomiComponent } from './xiaomi/xiaomi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccessoriesComponent,
    GrommingComponent,
    Iphone14Component,
    LaptopsComponent,
    LoginComponent,
    MobilesComponent,
    ProfileComponent,
    SamsungS23Component,
    SignUpComponent,
    SmartGadgetsComponent,
    SmartWatchesComponent,
    TravelEasyComponent,
    VivoV27ProComponent,
    XiaomiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
