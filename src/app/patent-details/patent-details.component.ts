import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/app.service';

@Component({
  selector: 'app-patent-details',
  templateUrl: './patent-details.component.html',
  styleUrl: './patent-details.component.scss'
})
export class PatentDetailsComponent implements OnInit {
  patentId: any = '';
  patentData: any;
  displayedColumns  = ['fileName', 'fileType','fileLinkPath', 'fileFromTime', 'fileToTime', 'fileSize'];
  constructor(private apiService: ApiService, private route: ActivatedRoute) { 
    console.log('PatentDetailsComponent constructor');
  }

  ngOnInit() {
    
     // Subscribe to the route parameters observable
     this.route.paramMap.subscribe(params => {
      // Retrieve the 'id' parameter from the route
      this.patentId = params.get('id');
      this.apiService.getPatent(this.patentId).subscribe((data) => {
        this.patentData = data;
      });
    });
  }
}
