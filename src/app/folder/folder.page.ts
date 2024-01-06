import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from '../services/shared-data.service';
import { UserResponse } from '../services/userResponse';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  userResponse: UserResponse = new UserResponse();
  nombre: string = "";

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

    const response = this.sharedDataService.getUserResponse();
    console.log("Usuario recuperado inicio: ",response);
    this.userResponse = new UserResponse();
    this.userResponse.nombre = response?.nombre || "";
    this.nombre = this.userResponse.nombre;

  }
}
