import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.component/application.service'
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Pet } from '../models/pet';

@Component({
    template: `
    <div *ngIf="cat">
        <h2>{{cat.name.$t}}</h2>
        <img src="{{cat.media.photos.photo[3].$t}}"/>
        <p><strong>Age: </strong>{{cat.age.$t}}</p>
        <p><strong>Sex: </strong>{{cat.sex.$t}}</p>
        <p><strong>Description: </strong>{{cat.description.$t}}</p>
    </div>
    `,
    // Providers
    providers: [ApplicationService],
    // Directives
    directives: [ROUTER_DIRECTIVES]
})

// Component class implementing OnInit
export class CatDetailsComponent implements OnInit {
    // Private properties for binding
    private sub: any;
    private cat: string[];

    constructor(private applicationService: ApplicationService, private route: ActivatedRoute) {

    }

    // Load data ones componet is ready
    ngOnInit() {
        // Subscribe to route params
        this.sub = this.route.params.subscribe(params => {

            let id = params['id'];

            // Retrieve Pet with Id route param
            this.applicationService.findPetById(id).subscribe(cat => this.cat = cat);
        });
    }

    ngOnDestroy() {
        // Clean sub to avoid memory leak
        this.sub.unsubscribe();
    }
}