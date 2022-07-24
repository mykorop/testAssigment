import {Component} from "@angular/core";
import {SidenavService} from "../../services/sidenav.service";
import { onSideNavChange, animateText } from '../../animations/animations';

@Component({
  selector: 'app-left-side-panel-component',
  templateUrl: './left-side-panel.html',
  styleUrls: ['./left-side-panel.scss'],
  animations: [onSideNavChange, animateText]
})
export class LeftSidePanel {

  public countries = [
    'Poland',
    'Ukraine',
    'Germany'
  ];

  public sideNavState: boolean = true;
  public showContent: boolean = true;

  constructor(private _sidenavService: SidenavService) { }

  public onSineNavToggle() {
    this.sideNavState = !this.sideNavState

    setTimeout(() => {
      this.showContent = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavLeftState$.next(this.sideNavState)
  }
}
