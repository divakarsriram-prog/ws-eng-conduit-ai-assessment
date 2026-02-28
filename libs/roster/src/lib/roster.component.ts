import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

type RosterEntry = {
  username: string;
  profileLink: string;
  articlesAuthoredCount: number;
  favoritesReceivedCount: number;
  firstArticleDate: string | null;
};

@Component({
  selector: 'realworld-roster',
  templateUrl: './roster.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class RosterComponent implements OnInit {
  roster: RosterEntry[] = [];
  loading = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loading = true;

    this.http.get<RosterEntry[]>('/api/users/roster').subscribe({
      next: (data) => {
        this.roster = data ?? [];
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load roster.';
        this.loading = false;
      },
    });
  }
}
