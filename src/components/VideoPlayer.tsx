import React, { useRef } from 'react'

import ReactPlayer from 'react-player'

interface IVideoPlayer {
	url: string
}

const VideoPlayer: React.FC<IVideoPlayer> = ({ url }) => {
	const playerRef = useRef(null)
	// const [isPlaying, setIsPlaying] = useState(false)

	return (
		<ReactPlayer
			ref={playerRef}
			url={url}
			// playing={isPlaying}
			controls={true}
			width={'100%'}
			height={'100%'}
			config={{
				youtube: {
					playerVars: {
						showinfo: 0,
						rel: 0,
						playsinline: 1,
						modestbranding: 1,
						iv_load_policy: 3,
					},
				},
			}}
		/>
	)
}

export default VideoPlayer
