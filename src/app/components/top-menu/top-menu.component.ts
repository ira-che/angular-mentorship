import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MenuItem } from '../../common/interfaces/menu.item.interface';

// import { AutoUnsub } from '../../decorators/auto-unsubscribe.decorator';
import { RequestService } from '../../services/request.service';

// @AutoUnsub()
@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  public menu: Observable<MenuItem[]>;

  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit(): void {
    this.menu = this.requestService.getMenuItems();
  }

  public trackByFunc = (index: number, item: MenuItem): number | MenuItem => item === undefined ? 0 : index;
}
