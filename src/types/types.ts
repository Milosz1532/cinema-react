export interface IMovie {
	_id: number
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
		today: IMovie[]
		tomorrow: IMovie[]
	}
}
