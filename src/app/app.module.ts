import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {HeaderComponent} from "./header/header.component";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import {AdminModule} from './admin/admin.module';


@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, AboutComponent, ContactComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, AdminModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
