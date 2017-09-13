import { Component, OnInit } from '@angular/core';

import { DataRepositoryService } from "../services/data-repository"
import { ActivatedRoute } from "@angular/router";

@Component({
  styleUrls: ['../styles/catalog.css'],
  template: `
    {{clubId}}
  `,
})
export class ClubComponent implements OnInit{

    clubId: string;

    constructor(public route: ActivatedRoute){


    }
    ngOnInit(){
        this.clubId = this.route.snapshot.paramMap.get('id');
    }
}