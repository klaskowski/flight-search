import { Component, OnInit, Input } from '@angular/core';
import { AirportsService } from '../airports.service';

@Component({
  selector: 'airport-input',
  templateUrl: './airport-input.component.html',
  styleUrls: ['./airport-input.component.css']
})
export class AirportInputComponent implements OnInit {

  @Input() placeholder: string;
  value = '';
  suggestions = []
  selected = null

  constructor(private airportsService: AirportsService) { }

  ngOnInit() {
  }

  onFromChange(newValue: string){
    this.suggestions = this.airportsService.airports.items.filter(i => i.airport);
  }

  onMouseEnter(s){
    s.selected = true
    this.selected = s
  }

  onMouseLeave(s){
    s.selected = false
    this.selected = null
  }

  nextSuggestion(){
    if(!this.selected && this.suggestions.length){
      this.selected = this.suggestions[0]
    } else {
      let newIndex = this.suggestions.findIndex(s => s == this.selected) + 1; //2->3
      //this.selected = this.suggestions[newIndex];
      this.selected = this.suggestions[this.wrapValue(newIndex, 0, this.suggestions.length-1) ]
    }
  }

  previousSuggestion(){
    if(!this.selected && this.suggestions.length){
      this.selected = this.suggestions[this.suggestions.length - 1]
    } else {
      let newIndex = this.suggestions.findIndex(s => s == this.selected) - 1;
      this.selected = this.suggestions[this.wrapValue(newIndex, 0, this.suggestions.length-1) ]
    }
  }

  private wrapValue(val, min, max){
    return val < min 
    ? max
    : val > max
      ? min
      : val
  }
}
