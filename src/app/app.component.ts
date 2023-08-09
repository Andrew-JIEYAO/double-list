import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleSet, CodeName } from './double-list/doubleset.interface';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DoubleListComponent } from './double-list/double-list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, ButtonModule, DialogModule, DoubleListComponent]
})
export class AppComponent {
  title = 'double-list';
  visible: boolean = false;
  docItem = {} as CodeName;

  doubleSet: DoubleSet = {
    title: '醫生姓氏',
    subTitle: '醫生',
    groups: [
      {
        "name": "王",
        "items": [
          {
            "code": "123",
            "name": "王大勇"
          },
          {
            "code": "124",
            "name": "王小華"
          }
        ]
      },
      {
        "name": "李",
        "items": [
          {
            "code": "125",
            "name": "李小蓮"
          },
          {
            "code": "126",
            "name": "李大雄"
          }
        ]
      },
      {
        "name": "趙",
        "items": [
          {
            "code": "127",
            "name": "趙那英"
          },
          {
            "code": "128",
            "name": "趙明城"
          }
        ]
      },
      {
        "name": "丁",
        "items": [
          {
            "code": "129",
            "name": "丁叮噹"
          },
          {
            "code": "130",
            "name": "丁小雨"
          }
        ]
      },
      {
        "name": "劉",
        "items": [
          {
            "code": "131",
            "name": "劉阿嬌"
          },
          {
            "code": "132",
            "name": "劉小明"
          }
        ]
      },
      {
        "name": "林",
        "items": [
          {
            "code": "133",
            "name": "林小蓮"
          },
          {
            "code": "134",
            "name": "林大雄"
          }
        ]
      },
      {
        "name": "黃",
        "items": [
          {
            "code": "135",
            "name": "黃阿嬌"
          },
          {
            "code": "136",
            "name": "黃小明"
          }
        ]
      },
      {
        "name": "周",
        "items": [
          {
            "code": "137",
            "name": "周小蓮"
          },
          {
            "code": "138",
            "name": "周大雄"
          }
        ]
      },
      {
        "name": "吳",
        "items": [
          {
            "code": "139",
            "name": "吳阿嬌"
          },
          {
            "code": "140",
            "name": "吳小明"
          }
        ]
      },
      {
        "name": "謝",
        "items": [
          {
            "code": "141",
            "name": "謝阿花"
          },
          {
            "code": "142",
            "name": "謝謝你"
          }
        ]
      },
      {
        "name": "陳",
        "items": [
          {
            "code": "143",
            "name": "陳阿嬌"
          },
          {
            "code": "144",
            "name": "陳小明"
          }
        ]
      },
      {
        "name": "張",
        "items": [
          {
            "code": "145",
            "name": "張小蓮"
          },
          {
            "code": "146",
            "name": "張大雄"
          }
        ]
      }
    ]

  }

  showDialog() {
    this.visible = true;
  }
}
