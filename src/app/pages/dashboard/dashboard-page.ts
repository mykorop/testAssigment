import {Component, ViewChild} from "@angular/core";
import {SidenavService} from "../../services/sidenav.service";
import {onMainContentChangeLeft, onMainContentChangeRight} from "../../animations/animations";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.html',
  styleUrls: ['./dashboard-page.scss'],
  animations: [ onMainContentChangeLeft, onMainContentChangeRight ]
})
export class DashboardPage {
  @ViewChild('leftDrawer') leftDrawer: any;
  @ViewChild('rightDrawer') rightDrawer: any;

  public onSideNavChangeLeft = true;
  public onSideNavChangeRight = true;

  constructor(private _sidenavService: SidenavService) {
    this._sidenavService.sideNavLeftState$.subscribe( res => {
      console.log(res)
      this.onSideNavChangeLeft = res;
    })

    this._sidenavService.sideNavRightState$.subscribe( res => {
      console.log(res)
      this.onSideNavChangeRight = res;
    })
  }

  public toggleChatView(chartClicked: string) {
    if (this.leftDrawer.opened || this.rightDrawer.opened) {
      this.leftDrawer.close();
      this.rightDrawer.close();
    } else {
      this.leftDrawer.open();
      this.rightDrawer.open();
    }
  }

}
