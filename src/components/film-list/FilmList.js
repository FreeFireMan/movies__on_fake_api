import {useEffect, useState} from "react";
import {moviesService} from "../../services";


export const FilmList = () => {


    const fetchMovies = async () => {
        const {results, page, total_pages, total_results} = await moviesService.getMovies()
        console.log(results)
    }


    useEffect(() => {
        fetchMovies().then()
    }, [])

    return (
        <div>
            
        </div>
    );
}
