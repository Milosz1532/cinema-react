export interface IMovie {
	id: string
	title: string
	genre: string
	productionYear: number
	duration: number
	imgUrl: string
}

export interface IShowtime {
	id: string
	movieId: string
	screenId: string
	date: Date
	time: string
	language: string
	movieType: string
}

export interface IMovieDetails {
	id: string
	title: string
	description: string
	genre: string
	director: string
	cast: IActor[]
	productionCountry: string
	productionYear: number
	duration: number
	imgUrl: string
	bannerUrl: string
	ageRating: string
	trailerUrl: string
	showtimes: IShowtime
	otherMovies: IMovie[]
}

export interface IActor {
	id?: string
	name: string
	imgUrl: string
	characterName: string
}

export interface IHomeShowtime {
	id: string
	movieId: string
	title: string
	genre: string
	productionYear: number
	duration: number
	imgUrl: string
}

export interface IHomeData {
	kidsRepertoire: IMovie[]
	generalRepertoire: IMovie[]
	top5Movies: IMovie[]
	showtime: {
		today: IHomeShowtime[]
		tomorrow: IHomeShowtime[]
	}
}
