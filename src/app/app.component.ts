import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'solanje';
  name1: any = 'Bob';
  name2: any = 'Ivanka';
  name3: any = 'Prešeren';

  name: any = ['Petra', 'Rudi', 'Bojana'];

  dontShow = 'Rudi';

  ngOnInit(): void {
    this.name.push('Matej');
  }

  nuList: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // this.name.push('Petra')
}
