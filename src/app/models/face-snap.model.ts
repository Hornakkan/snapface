export class FaceSnap {
    // // Méthode #1 : Création de classe "verbeuse"
    // title: string;
    // description: string;
    // createdDate: Date;
    // snaps: number;
    // imageUrl: string;

    // constructor(myTitle: string, myDescription: string, myDate: Date, mySnaps: number, myUrl: string) {
    //     this.title = myTitle;
    //     this.description = myDescription;
    //     this.createdDate = myDate;
    //     this.snaps = mySnaps;
    //     this.imageUrl = myUrl;
    // }


    // // Méthode #2 : Création de classe "moins verbeuse"
    // constructor(public title: string, 
    //             public description: string, 
    //             public createdDate: Date, 
    //             public snaps: number, 
    //             public imageUrl: string,
    //             public location?: string) {
    // }

    // Méthode #3 : Création de classe plus lisible, sans constructeur
    // Du coup, il faudra modifier la création des FaceSnaps dans AppComponent 
    // pour simplement créer des objets qui ont les propriétés requises
    id!: number;
    title!: string;
    description!: string;
    createdDate!: Date;
    snaps!: number;
    imageUrl!: string;
    location?: string;
}