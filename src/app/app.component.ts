import { Component } from '@angular/core';
import { CountdownService } from './services/countdown.service';
import { Observable } from 'rxjs';
import { IInterval } from './model/interval.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  countdownScience: Observable<IInterval>
  countdownEngineering: Observable<IInterval>  

  constructor (private countdownService: CountdownService){
    let science = (1641297600 - 3600) * 1000;
    this.countdownScience = this.countdownService.getCountDown(science)
    this.countdownScience.subscribe(
        interval  => console.log('Countdown',interval),
        error => console.log('error',error),
        () => console.log('The countdown finish') 
    )
    let engineering = (1639569600 - 3600) * 1000;
    this.countdownEngineering = this.countdownService.getCountDown(engineering)
    this.countdownEngineering.subscribe()
 }
}
