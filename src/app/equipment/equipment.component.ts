import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentBeingEdited: string = null;

  equipmentItems: string[] = ['Habitat dome','Drones', 'Food containers','Oxygen tanks'];

  constructor() { }

  ngOnInit() {
  }

  add(equipmentItem: string) {
    this.equipmentItems.push(equipmentItem);
  }
  
  remove(equipmentItem: string) {
    let index = this.equipmentItems.indexOf(equipmentItem);
    this.equipmentItems.splice(index, 1);
  }

  edit(equipmentItem: string) {
    this.equipmentBeingEdited = equipmentItem;
 }

  save(oldEquipmentItem: string, newEquipmentItem: string) {
  let index = this.equipmentItems.indexOf(oldEquipmentItem);
  this.equipmentItems[index] = newEquipmentItem;
  this.equipmentBeingEdited = null;
  }

 /*save(name: string, member: object) {
  member['name'] = name;
  this.memberBeingEdited = null;
  }*/

}
