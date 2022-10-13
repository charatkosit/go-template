import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import { ShoppingModule } from './modules/shopping/shopping.module';
import { SapModule } from './modules/sap/sap.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';

import { MessagesComponent } from './components/header/messages/messages.component';
import { LanguageComponent } from './components/header/language/language.component';
import { NotifyComponent } from './components/header/notify/notify.component';
import { UserComponent } from './components/header/user/user.component';
import { ControlSidebarComponent } from './components/header/control-sidebar/control-sidebar.component';
import { FullscreenComponent } from './components/header/fullscreen/fullscreen.component';
import { SearchComponent } from './components/header/search/search.component';
import { AppService } from './services/app.service';
import { RestService } from './services/rest.service';
import { BlankComponent } from './components/blank/blank.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CartNewComponent } from './components/header/cart-new/cart-new.component';
import { UserHeaderComponent } from './components/header/user-header/user-header.component';

import { SapMenuComponent } from './components/sidemenu/components/sap-menu/sap-menu.component';
import { ShoppingMenuComponent } from './components/sidemenu/components/shopping-menu/shopping-menu.component';
import { SearchMenuComponent } from './components/sidemenu/components/search-menu/search-menu.component';
import { ProfileMenuComponent } from './components/sidemenu/components/profile-menu/profile-menu.component';
import { SettingsMenuComponent } from './components/sidemenu/components/settings-menu/settings-menu.component';
import { ShareService } from './services/share.service';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    ContentComponent,
    FooterComponent,
    MessagesComponent,
    LanguageComponent,
    NotifyComponent,
    UserComponent,
    ControlSidebarComponent,
    FullscreenComponent,
    SearchComponent,
    BlankComponent,
    DashboardComponent,
    CartNewComponent,
    UserHeaderComponent,
    SapMenuComponent,
    ShoppingMenuComponent,
    SearchMenuComponent,
    ProfileMenuComponent,
    SettingsMenuComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    AdminModule,
    AuthModule,
    ShoppingModule,
    SapModule,
  

    AppRoutingModule  //****AppRoutingModule ต้องอยู่ด้านล่างเสมอ  
  ],
  providers: [AppService, RestService,ShareService],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
