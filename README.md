# WeVibe Web Music Broadcaster v1.0.0

### Screenshots

![Music Broadcaster Interface](https://github.com/ocaiorod/music-broadcaster/assets/145228144/6b9a9437-d9f6-4e10-a53b-47e88cdbd02f)
![Login Screen](https://github.com/ocaiorod/music-broadcaster/assets/145228144/d1b0f749-e383-49d1-893c-7e9cf780a638)
![Register Screen](https://github.com/ocaiorod/music-broadcaster/assets/145228144/0a4b4dc9-efe3-4d93-ba9a-a6edf980d271)

[WeVibe](https://ocaiorod.github.io/music-broadcaster/index.html) is a web application music broadcaster project inspired by Web Spotify. In this current version, it only has two types of screens. One to log in and register before join the application  and other one with the application by itself running. The screens are interconnected in a loop, allowing you to exit the application and log back in whenever you want. 

Currently there is only support for admin login credentials that will give access to use the application.

The project has a local and limited library of songs that were injected directly into the application, simulating the profile of a user who already uses it. 

In this version we only support a desktop type of resolution.

### Login Page

* Only the top-right "Login" button on the page is working in this version and It directly opens a small menu. The user can functionally log in and the menu offers essential functions such as Remember me, Forgot password and Signup buttons.

* The Signup menu is also available and upon completing registration, the user is redirected directly to login. The password confirmation and the terms of use checkbox are already working too.

* The Forgot password menu is not available yet in this version.

### Application Page

* In this version you can play any of the songs available in the layout. 

* Back, forward, pause and play functions are working perfectly. The music can also be advanced or rewinded by clicking on the player's progress bar. 

* Volume button is also working perfectly and it can be adjusted using the intensity bar from highest to muted.

* All songs present in the "My Favs" section can be played by clicking directly on the play button for each one and all of them works perfectly with the player buttons.

* "Discover" section is also functional in this version of the application, but the search bar, despite allowing typing, still does not display any results.

* The two buttons in the header of this section are correctly interacting with the user according to their functions and all songs in the "Popular Songs" section are working perfectly with the music player. 

* Artist icons in the "Popular Artists" section are not clickable yet, but the scroll works perfectly. 

* The entire interface has a highlight system to always visually highlight the current music that is playing.

* You can logoff by clicking on the profile picture that reveals an exit button.

### Technologies

* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [Bootstrap Icons](https://icons.getbootstrap.com/)
* [Iconify Library](https://icon-sets.iconify.design/uil/)
* HTML & CSS

## How to run ✅

There is no mystery to running the project. Just open the files in Visual Studio Code and run the file named "home.html" which is the HTML file for the application's login page. 
To enter the application you can do it in two ways:

* Run the "index.html" file directly and the app's page will open directly in the browser.

* Run the home.html file and log in with the following credentials: 

login: admin@ | password: admin

## ⏭️ Coming soon!

* Playlists section
* Recommended section
* Auto-play
* Forgot password form
* Light mode
* Week Albums section
