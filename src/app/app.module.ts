import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './product/product.module';
import { PageNotFoundComponent } from 'src/page-not-found.component';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { MessageModule } from './messages/message.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    UserModule,
    MessageModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, WelcomeComponent, PageNotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
