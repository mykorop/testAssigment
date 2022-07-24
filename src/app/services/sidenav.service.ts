import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable()
export class SidenavService {

  public sideNavLeftState$: Subject<boolean> = new Subject();
  public sideNavRightState$: Subject<boolean> = new Subject();

  constructor() { }

}
