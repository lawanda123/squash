import { Component, OnInit } from '@angular/core';

import { DataRepositoryService } from "../services/data-repository"
import { ActivatedRoute } from "@angular/router";

@Component({
  styles: [`
  p {
      border-radius: 15px 50px;
      background: #D3D3D3;
      padding: 20px; 
      width: 500px;
      height: 450px;}
 .rcorners6 {
    float: right;
    margin-top:30px;
            } `] ,

  template: `
   <p >
   {{clubId}}
   <img src="/assets/images/ff.jpg" alt="Smiley face" height="230" width="280">
   The Squash Online Booking system software allows members to make and manage court bookings online from any location with an internet connection. A small computer kiosk can also be setup within the club so members can view the availability of courts, check who should be on the courts and make a booking.
   </p>
   <div>
   
   </div>

  `
})
export class ClubComponent implements OnInit{

    clubId: string;

    constructor(public route: ActivatedRoute){


    }
    ngOnInit(){
        this.clubId = this.route.snapshot.paramMap.get('id');
    }
}