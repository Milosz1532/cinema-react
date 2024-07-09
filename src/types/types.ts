export interface IMovie {
	id: string
	title: string
	genre: string
	productionYear: number
	duration: number
	imgUrl: string
	ageRating?: string
}

export interface ISeat {
	type: string
	_id: string
}

export interface IScreen {
	id: string
	name: string
	rows: ISeat[][]
}

export interface IShowtime {
	id: string
	movieId: string
	screenId: string
	time: string
	language: string
	movieType: string
}

export interface IShowTimeDetails {
	id: string
	date: string
	time: string
	language: string
	movieType: string
	movie: IMovie
	screen: IScreen
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
	showtimes: {
		today: IShowtime[]
		tomorrow: IShowtime[]
		dayAfterTomorrow: IShowtime[]
	}
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
