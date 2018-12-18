import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { MusicserviceService } from '../musicservice.service';

@Component({
  selector: 'app-genrepage',
  templateUrl: './genrepage.component.html',
  styleUrls: ['./genrepage.component.css']
})
export class GenrepageComponent implements OnInit {
public getinfo;
  constructor(private _route: ActivatedRoute, private router: Router,public Music:MusicserviceService) { 
    console.log("genrepage called")
  }

  ngOnInit() {
  }

}
