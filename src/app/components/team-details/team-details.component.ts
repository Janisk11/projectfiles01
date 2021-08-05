import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  // team=[{
  // name :'',
  // designation:'',
  // about:'',
  // imageUrl:''
  // }]

  constructor( ) { }

  ngOnInit(): void {
  }

}
