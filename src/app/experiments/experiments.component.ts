import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experimentBeingEdited: string = null;

  experimentSamples: string[] = ['Mars soil sample', 'Plant growth in habitat', 'Human bone density'];

  constructor() { }

  ngOnInit() {
  }

  add(experimentItem: string) {
    this.experimentSamples.push(experimentItem);
  }
  
  remove(experimentItem: string) {
    let index = this.experimentSamples.indexOf(experimentItem);
    this.experimentSamples.splice(index, 1);
  }

  edit(experimentItem: string) {
    this.experimentBeingEdited = experimentItem;
 }

  save(oldExperimentItem: string, newExperimentItem: string) {
  let index = this.experimentSamples.indexOf(oldExperimentItem);
  this.experimentSamples[index] = newExperimentItem;
  this.experimentBeingEdited = null;
  }

}
