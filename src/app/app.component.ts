import { Component, OnInit } from '@angular/core';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  records: any[] = [];

  constructor(private dataService: DataserviceService) {}

  ngOnInit(): void {
    this.dataService.getRecords().subscribe(data => {
      this.records = data;
    });
  }
 
}
