import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({ 
    providedIn: 'root'
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          title: 'Archibald',
          description: 'Mon meilleur ami depuis toujours !',
          createdDate: new Date(),
          snaps: 0,
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          location: 'Paris'
        },
        {
          title: 'Three Rock Mountain',
          description: 'Un endroit magnifique pour les randonnées.',
          createdDate: new Date(),
          snaps: 0,
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/1920px-Three_Rock_Mountain_Southern_Tor.jpg',
          location: 'La montagne'
        },
        {
          title: 'Un bon repas',
          description: 'Mmmh que c\'est bon !',
          createdDate: new Date(),
          snaps: 0,
          imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg'
        }      
      ];  
}