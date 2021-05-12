import { tap, map } from 'rxjs/operators';
import { PastLaunchesListGQL } from './../services/spacexGraphql.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchListComponent implements OnInit {
  public pastLaunches$: Observable<any>;

  constructor(private pastLaunchesService: PastLaunchesListGQL) {
    this.pastLaunches$ = this.pastLaunchesService.fetch({ limit: 20 }).pipe(
      tap((data) => console.log('Launch list data', data)),
      map((res) => res.data.launchesPast)
    );
  }

  ngOnInit(): void {}
}
