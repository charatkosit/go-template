import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import { ShoppingModule } from './modules/shopping/shopping.module';

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
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AuthModule,
    AdminModule,
    ShoppingModule,
    AppRoutingModule  //****AppRoutingModule ต้องอยู่ด้านล่างเสมอ  
  ],
  providers: [AppService , RestService ],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
