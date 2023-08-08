import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleSet, CodeName } from './double-set/doubleset.interface';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DoubleSetComponent } from "./double-set/double-set.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, ButtonModule, DialogModule, DoubleSetComponent]
})
export class AppComponent {
  title = 'double-set';
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
            "code": "456",
            "name": "王大勇"
          },
          {
            "code": "234",
            "name": "王小華"
          }
        ]
      },
      {
        "name": "李",
        "items": [
          {
            "code": "987",
            "name": "李小蓮"
          },
          {
            "code": "654",
            "name": "李大雄"
          }
        ]
      },
      {
        "name": "張",
        "items": [
          {
            "code": "345",
            "name": "張小芳"
          },
          {
            "code": "876",
            "name": "張大明"
          }
        ]
      },
      {
        "name": "陳",
        "items": [
          {
            "code": "876",
            "name": "陳小蓮"
          },
          {
            "code": "987",
            "name": "陳大鵬"
          }
        ]
      },
      {
        "name": "林",
        "items": [
          {
            "code": "567",
            "name": "林小紅"
          },
          {
            "code": "543",
            "name": "林阿豪"
          }
        ]
      },
      {
        "name": "吳",
        "items": [
          {
            "code": "654",
            "name": "吳小薇"
          },
          {
            "code": "234",
            "name": "吳大山"
          }
        ]
      },
      {
        "name": "周",
        "items": [
          {
            "code": "654",
            "name": "周大島"
          },
          {
            "code": "987",
            "name": "周小倩"
          }
        ]
      },
      {
        "name": "蔡",
        "items": [
          {
            "code": "543",
            "name": "蔡小華"
          },
          {
            "code": "654",
            "name": "蔡大勇"
          }
        ]
      },
      {
        "name": "楊",
        "items": [
          {
            "code": "987",
            "name": "楊大雄"
          },
          {
            "code": "234",
            "name": "楊小蓮"
          }
        ]
      },
      {
        "name": "劉",
        "items": [
          {
            "code": "234",
            "name": "劉小芳"
          },
          {
            "code": "876",
            "name": "劉大明"
          }
        ]
      },
      {
        "name": "葉",
        "items": [
          {
            "code": "876",
            "name": "葉小芳"
          },
          {
            "code": "234",
            "name": "葉大明"
          }
        ]
      },
      {
        "name": "呂",
        "items": [
          {
            "code": "567",
            "name": "呂大島"
          },
          {
            "code": "543",
            "name": "呂小琳"
          }
        ]
      },
      {
        "name": "江",
        "items": [
          {
            "code": "234",
            "name": "江大勇"
          },
          {
            "code": "876",
            "name": "江小薇"
          }
        ]
      },
      {
        "name": "許",
        "items": [
          {
            "code": "987",
            "name": "許小島"
          },
          {
            "code": "234",
            "name": "許大琳"
          }
        ]
      },
      {
        "name": "徐",
        "items": [
          {
            "code": "654",
            "name": "徐小山"
          },
          {
            "code": "234",
            "name": "徐大紅"
          }
        ]
      },
      {
        "name": "鄭",
        "items": [
          {
            "code": "876",
            "name": "鄭小蓮"
          },
          {
            "code": "543",
            "name": "鄭大山"
          }
        ]
      },
      {
        "name": "黃",
        "items": [
          {
            "code": "654",
            "name": "黃小芳"
          },
          {
            "code": "987",
            "name": "黃大雄"
          }
        ]
      }
    ]
  }

  showDialog() {
    this.visible = true;
  }
}
