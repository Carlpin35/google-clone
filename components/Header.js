import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import {  MicrophoneIcon, SearchIcon, XIcon  } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import { IconButton } from '@material-ui/core';


function Header() {
const searchInputRef = useRef(null);
const router = useRouter();

const search = (e) => {
	e.preventDefault();

	const term = searchInputRef.current.value

	if (!term) return;

	router.push(`/search?term=${term}`)
}

	return (
		<header className="sticky top-0 bg-white">

          <div className="flex w-full p-6 items-center">
          	<img src="http://1000marcas.net/wp-content/uploads/2020/02/Google-logo.jpg" alt="" 
             height={40}
             width={120}
             className="cursor-pointer"
             onClick={() => router.push('/')}
			/>

			<form className="flex flex-grow px-6 py-2 ml-10 mr-5 border  border-gray-200 rounded-full shadow-lg items-center max-w-3xl">

			<input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text" />
			<XIcon className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3" 
             onClick={() => (searchInputRef.current.value = "")}
			/>
			<MicrophoneIcon className="h-5 text-blue-500 mr-3 hidden sm:inline-flex border-l-2 pl-4 border-gray-300" />
			<SearchIcon className="h-5 text-blue-500 hidden sm:inline-flex " />
			<button hidden type="submit" onClick={search}>Search</button>
			</form>

           <div className=" flex ml-auto">
			  <div className="hidden sm:inline-flex">
			<IconButton>
				<SettingsOutlinedIcon />
			</IconButton>

           <IconButton>
              <AppsIcon  />
           </IconButton>
            </div>
		   <Avatar  url="https://www.thesouthernreporter.co.uk/webimg/b25lY21zOjFkMGViNDJkLWE0NmUtNDVkOC05ODdmLWJlMmY2Y2I4ZGYxNzowMmQ2N2RkMi1iYWVhLTQ0MzItYWNhMy0yN2Y5MzBjMjg0OWI=.jpg?width=2048&enable=upscale" />
         </div>
          </div>

            
          <HeaderOptions />

			
		</header>
	)
}

export default Header