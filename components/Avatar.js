import React from 'react'

function Avatar({url, className}) {
	return <img className={`h-10 rounded-full w-10 cursor-pointer transition duration-150 transform hover:scale-110 ${className}`} 
	loading="lazy"
     src={url}
     alt="profile pic"
	 />;

}

export default Avatar