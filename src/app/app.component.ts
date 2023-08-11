import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleSet, Coding } from './double-list/doubleset.interface';
import { DoubleListComponent } from './double-list/double-list.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, DoubleListComponent, ButtonModule, DialogModule]
})
export class AppComponent {
  title = 'double-list';
  docItem = {} as Coding;
  // doubleSet: DoubleSet = {
  //   title: '醫生姓氏',
  //   subTitle: '醫生',
  //   groups: [
  //     {
  //       "name": "王",
  //       "items": [
  //         {
  //           "code": "123",
  //           "display": "王大勇"
  //         },
  //         {
  //           "code": "888",
  //           "display": "王大勇"
  //         }
  //       ]
  //     },
  //     {
  //       "name": "李",
  //       "items": [
  //         {
  //           "code": "125",
  //           "display": "李小蓮"
  //         },
  //         {
  //           "code": "126",
  //           "display": "李大雄"
  //         }
  //       ]
  //     },
  //     {
  //       "name": "趙",
  //       "items": [
  //         {
  //           "code": "127",
  //           "display": "趙那英"
  //         },
  //         {
  //           "code": "128",
  //           "display": "趙明城"
  //         }
  //       ]
  //     },
  //     {
  //       "name": "丁",
  //       "items": [
  //         {
  //           "code": "129",
  //           "display": "丁叮噹"
  //         },
  //         {
  //           "code": "130",
  //           "display": "丁小雨"
  //         }
  //       ]
  //     },
  //     {
  //       "name": "劉",
  //       "items": [
  //         {
  //           "code": "131",
  //           "display": "劉阿嬌"
  //         },
  //         {
  //           "code": "132",
  //           "display": "劉小明"
  //         }
  //       ]
  //     },
  //     {
  //       "name": "林",
  //       "items": [
  //         {
  //           "code": "133",
  //           "display": "林小蓮"
  //         },
  //         {
  //           "code": "134",
  //           "display": "林大雄"
  //         }
  //       ]
  //     },
  //     {
  //       "name": "黃",
  //       "items": [
  //         {
  //           "code": "135",
  //           "display": "黃阿嬌"
  //         },
  //         {
  //           "code": "136",
  //           "display": "黃小明"
  //         }
  //       ]
  //     },
  //     {
  //       "name": "周",
  //       "items": [
  //         {
  //           "code": "137",
  //           "display": "周小蓮"
  //         },
  //         {
  //           "code": "138",
  //           "display": "周大雄"
  //         }
  //       ]
  //     },
  //     {
  //       "name": "吳",
  //       "items": [
  //         {
  //           "code": "139",
  //           "display": "吳阿嬌"
  //         },
  //         {
  //           "code": "140",
  //           "display": "吳小明"
  //         }
  //       ]
  //     },
  //     {
  //       "name": "謝",
  //       "items": [
  //         {
  //           "code": "141",
  //           "display": "謝阿花"
  //         },
  //         {
  //           "code": "142",
  //           "display": "謝謝你"
  //         }
  //       ]
  //     },
  //     {
  //       "name": "陳",
  //       "items": [
  //         {
  //           "code": "143",
  //           "display": "陳阿嬌"
  //         },
  //         {
  //           "code": "144",
  //           "display": "陳小明"
  //         }
  //       ]
  //     },
  //     {
  //       "name": "張",
  //       "items": [
  //         {
  //           "code": "145",
  //           "display": "張小蓮"
  //         },
  //         {
  //           "code": "146",
  //           "display": "張大雄"
  //         }
  //       ]
  //     }
  //   ]
  // }
  doubleSet: DoubleSet = {
    title: '縣市',
    subTitle: '鄉鎮地區',
    groups: [
      {
        "name": "臺北市",
        "items": [
          {
            "display": "臺北市中正區",
            "code": "100"
          },
          {
            "display": "臺北市大同區",
            "code": "103"
          },
          {
            "display": "臺北市中山區",
            "code": "104"
          },
          {
            "display": "臺北市松山區",
            "code": "105"
          },
          {
            "display": "臺北市大安區",
            "code": "106"
          },
          {
            "display": "臺北市萬華區",
            "code": "108"
          },
          {
            "display": "臺北市信義區",
            "code": "110"
          },
          {
            "display": "臺北市士林區",
            "code": "111"
          },
          {
            "display": "臺北市北投區",
            "code": "112"
          },
          {
            "display": "臺北市內湖區",
            "code": "114"
          },
          {
            "display": "臺北市南港區",
            "code": "115"
          },
          {
            "display": "臺北市文山區",
            "code": "116"
          }
        ]
      },
      {
        "name": "基隆市",
        "items": [
          {
            "display": "基隆市仁愛區",
            "code": "200"
          },
          {
            "display": "基隆市信義區",
            "code": "201"
          },
          {
            "display": "基隆市中正區",
            "code": "202"
          },
          {
            "display": "基隆市中山區",
            "code": "203"
          },
          {
            "display": "基隆市安樂區",
            "code": "204"
          },
          {
            "display": "基隆市暖暖區",
            "code": "205"
          },
          {
            "display": "基隆市七堵區",
            "code": "206"
          }
        ]
      },
      {
        "name": "新北市",
        "items": [
          {
            "display": "新北市萬里區",
            "code": "207"
          },
          {
            "display": "新北市金山區",
            "code": "208"
          },
          {
            "display": "新北市板橋區",
            "code": "220"
          },
          {
            "display": "新北市汐止區",
            "code": "221"
          },
          {
            "display": "新北市深坑區",
            "code": "222"
          },
          {
            "display": "新北市石碇區",
            "code": "223"
          },
          {
            "display": "新北市瑞芳區",
            "code": "224"
          },
          {
            "display": "新北市平溪區",
            "code": "226"
          },
          {
            "display": "新北市雙溪區",
            "code": "227"
          },
          {
            "display": "新北市貢寮區",
            "code": "228"
          },
          {
            "display": "新北市新店區",
            "code": "231"
          },
          {
            "display": "新北市坪林區",
            "code": "232"
          },
          {
            "display": "新北市烏來區",
            "code": "233"
          },
          {
            "display": "新北市永和區",
            "code": "234"
          },
          {
            "display": "新北市中和區",
            "code": "235"
          },
          {
            "display": "新北市土城區",
            "code": "236"
          },
          {
            "display": "新北市三峽區",
            "code": "237"
          },
          {
            "display": "新北市樹林區",
            "code": "238"
          },
          {
            "display": "新北市鶯歌區",
            "code": "239"
          },
          {
            "display": "新北市三重區",
            "code": "241"
          },
          {
            "display": "新北市新莊區",
            "code": "242"
          },
          {
            "display": "新北市泰山區",
            "code": "243"
          },
          {
            "display": "新北市林口區",
            "code": "244"
          },
          {
            "display": "新北市蘆洲區",
            "code": "247"
          },
          {
            "display": "新北市五股區",
            "code": "248"
          },
          {
            "display": "新北市八里區",
            "code": "249"
          },
          {
            "display": "新北市淡水區",
            "code": "251"
          },
          {
            "display": "新北市三芝區",
            "code": "252"
          },
          {
            "display": "新北市石門區",
            "code": "253"
          }
        ]
      },
      {
        "name": "宜蘭縣",
        "items": [
          {
            "display": "宜蘭縣宜蘭",
            "code": "260"
          },
          {
            "display": "宜蘭縣頭城",
            "code": "261"
          },
          {
            "display": "宜蘭縣礁溪",
            "code": "262"
          },
          {
            "display": "宜蘭縣壯圍",
            "code": "263"
          },
          {
            "display": "宜蘭縣員山",
            "code": "264"
          },
          {
            "display": "宜蘭縣羅東",
            "code": "265"
          },
          {
            "display": "宜蘭縣三星",
            "code": "266"
          },
          {
            "display": "宜蘭縣大同",
            "code": "267"
          },
          {
            "display": "宜蘭縣五結",
            "code": "268"
          },
          {
            "display": "宜蘭縣冬山",
            "code": "269"
          },
          {
            "display": "宜蘭縣蘇澳",
            "code": "270"
          },
          {
            "display": "宜蘭縣南澳",
            "code": "272"
          },
          {
            "display": "宜蘭縣釣魚臺列嶼",
            "code": "290"
          }
        ]
      },
      {
        "name": "新竹縣",
        "items": [
          {
            "display": "新竹縣竹北",
            "code": "302"
          },
          {
            "display": "新竹縣湖口",
            "code": "303"
          },
          {
            "display": "新竹縣新豐",
            "code": "304"
          },
          {
            "display": "新竹縣新埔",
            "code": "305"
          },
          {
            "display": "新竹縣關西",
            "code": "306"
          },
          {
            "display": "新竹縣芎林",
            "code": "307"
          },
          {
            "display": "新竹縣寶山",
            "code": "308"
          },
          {
            "display": "新竹縣竹東",
            "code": "310"
          },
          {
            "display": "新竹縣五峰",
            "code": "311"
          },
          {
            "display": "新竹縣橫山",
            "code": "312"
          },
          {
            "display": "新竹縣尖石",
            "code": "313"
          },
          {
            "display": "新竹縣北埔",
            "code": "314"
          },
          {
            "display": "新竹縣峨眉",
            "code": "315"
          }
        ]
      }
    ]
  }
  visible: boolean = false;
  showDialog() {
    this.visible = true;
  }

}
