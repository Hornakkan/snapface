export class FaceSnap {
    // // Création de classe "verbeuse"
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

    // Création de classe "raccourcie"
    constructor(public title: string, 
                public description: string, 
                public createdDate: Date, 
                public snaps: number, 
                public imageUrl: string) {
    }
}