import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, InventoryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // ✅ Required for API calls
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
