import { TPublication } from "./validations/publications";

interface IYearWisePublications {
    year: number;
    publications: TPublication[];
}
export const refactorPublications = (publications: TPublication[]) => {
    const objs: IYearWisePublications[] = [];
    for(const publication of publications) {
        const year = publication.year;
        const index = objs.findIndex(obj => obj.year === year);
        if(index === -1) {
            objs.push({
                year,
                publications: [publication]
            });
        } else {
            objs[index].publications.push(publication);
        }
    }
    //console.log(objs);
    return objs;
}