import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeName, DoubleSet } from './doubleset.interface';
import { SplitterModule } from 'primeng/splitter';

@Component({
  selector: 'his-double-set',
  standalone: true,
  imports: [CommonModule, SplitterModule],
  templateUrl: './double-set.component.html',
  styleUrls: ['./double-set.component.scss']
})
export class DoubleSetComponent implements OnInit{

  @Input() value = {} as DoubleSet;
  @Input() item = {} as CodeName;
  @Output() itemChange = new EventEmitter<CodeName>();

  selectedGroup: string = '';
  selectedCode?: string;
  selectedItems?: CodeName[];

  ngOnInit(): void {
    this.selectedItems = this.value.groups[0].items;
  }

  onSelectGroup(name: string) {
    this.selectedGroup = name;
    this.selectedCode = '';
    this.#getItems(name);
  }

  #getItems(name: string) {
    const group = this.value.groups.find(i => i.name === name);
    this.selectedItems =  group ? group.items : [];
  }

  onItemClick(item: CodeName) {
    this.selectedCode = item.code;
    this.itemChange.emit(item);
  }
}
