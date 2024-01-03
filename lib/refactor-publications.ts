interface IYearWisePublications {
    year: number;
    publications: Publication[];
}
export const refactorPublications = (publications: Publication[]) => {
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
    return objs;
}