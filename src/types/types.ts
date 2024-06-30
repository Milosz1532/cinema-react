export interface IMovie {
	id: string
	title: string
	genre: string
	productionYear: number
	duration: number
	imgUrl: string
}

export interface IActor {
	id: number
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
