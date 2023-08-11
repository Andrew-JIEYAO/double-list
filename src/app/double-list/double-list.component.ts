import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { Coding, DoubleSet, Group } from './doubleset.interface';
import { SplitterModule } from 'primeng/splitter';

@Component({
  selector: 'his-double-list',
  standalone: true,
  imports: [SplitterModule, NgFor, NgClass],
  templateUrl: './double-list.component.html',
  styleUrls: ['./double-list.component.scss']
})
export class DoubleListComponent implements OnInit{

  @Input() value = {} as DoubleSet;
  @Input() item = {} as Coding;
  @Output() itemChange = new EventEmitter<Coding>();

  currentGroup?: Group;

  ngOnInit(): void {
    this.currentGroup = this.value.groups[0];
  }

  onGroupClick(groupName: string) {
    this.currentGroup =this.value.groups.find(x=>x.name === groupName);
  }

  onItemClick(item: Coding) {
    this.itemChange.emit(item);
  }
}
