import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';
import { AnalyticsMetrics } from '../models/analytics.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  anlyticData!: AnalyticsMetrics;
  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit(): void {
    this.loadAnalyticsData();
  }

  private loadAnalyticsData(): void {
    this.analyticsService.getPageViews().subscribe(
      (data) => {
        // Process and display analytics data
        this.anlyticData = data;
      },
      (error) => {
        console.error('Error fetching analytics data:', error);
      }
    );
  }
}
