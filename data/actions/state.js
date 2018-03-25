export const setFilms = (films) => {
    return {
        type: "setFilms",
        payload: films,
        loading: false
    };
};