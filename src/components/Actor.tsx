import React from 'react'

import { IActor } from '../types/types'

const Actor: React.FC<IActor> = ({ id, imgUrl, name, characterName }) => {
	return (
		<div className='c_actor_container'>
			<div className='c_actor_img_container'>
				<img src={imgUrl} alt={`${name} photo`} />
			</div>
			<p className='c_actor_name m-0 mt-2'>{name}</p>
			<p className='c_actor_character_name'>{characterName}</p>
		</div>
	)
}

export default Actor
