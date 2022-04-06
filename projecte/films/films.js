
function getAllDirectors(movies) {
    let oneDirector = [];
    oneDirector = movies.map(movie => {
        return movie.director;
    });
    console.table(oneDirector);
    return oneDirector;
}

/* function getPelisFromDirector(director) {
    let selectDirector = [];
    selectDirector = movies.filter(dir => {
        return dir.filter === director;
    });
    console.table(selectDirector);
    return selectDirector;
}
 */
function getPelisFromDirector(director) {
    let selectDirector = movies.filter(dir => {
        return dir.director === director;
    });
    console.table(selectDirector);
    return selectDirector;
}


// sort function
