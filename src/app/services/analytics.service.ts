// src/app/services/analytics.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private measurementId = 'G-1S48D6TXH3';
  private apiUrl = 'https://www.googleapis.com/analytics/v3/data/ga';

  constructor(private http: HttpClient) {}

  initializeAnalytics(): void {
    // Add Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    const gtag = function (...args: any[]) {
      window.dataLayer.push(arguments);
    };
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', this.measurementId);
  }

  // Add methods to fetch analytics data
  getPageViews(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pageviews`);
  }
}
