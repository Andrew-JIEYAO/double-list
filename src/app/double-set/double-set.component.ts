import { Component, EventEmitter, Input, Output } from '@angular/core';
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
export class DoubleSetComponent {

  @Input() value = {} as DoubleSet;
  @Input() item = {} as CodeName;
  @Output() itemChange = new EventEmitter<CodeName>();

  selectedGroup: string = '';
  selectedCode?: string;

  onSelectGroup(name: string) {
    this.selectedGroup = name;
    this.selectedCode = '';
  }

  getCodeNames(name: string): CodeName[] {
    const group = this.value.groups.find(i => i.name === name) || this.value.groups[0];
    return group ? group.items : [];
  }

  onCodeNameClick(codeName: CodeName) {
    this.selectedCode = codeName.code;
    this.itemChange.emit(codeName);
  }
}
