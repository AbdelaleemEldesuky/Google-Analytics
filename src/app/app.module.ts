import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalyticsService } from './services/analytics.service';
import { DashboardComponent } from './components/dashboard.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    HttpClientModule, // Make sure HttpClientModule is imported
    AppRoutingModule,
  ],
  providers: [AnalyticsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
