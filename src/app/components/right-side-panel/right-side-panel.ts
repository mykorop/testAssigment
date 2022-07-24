import {Component} from "@angular/core";
import {SidenavService} from "../../services/sidenav.service";
import {animateText, onSideNavChange} from "../../animations/animations";

@Component({
  selector: 'app-right-side-panel-component',
  templateUrl: './right-side-panel.html',
  styleUrls: ['./right-side-panel..scss'],
  animations: [ animateText, onSideNavChange ]
})
export class RightSidePanel {
  public sideNavState: boolean = true;
  public showContent: boolean = true;

  constructor(private _sidenavService: SidenavService) { }

  public onSineNavToggle() {
    this.sideNavState = !this.sideNavState

    setTimeout(() => {
      this.showContent = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavRightState$.next(this.sideNavState)
  }
}
