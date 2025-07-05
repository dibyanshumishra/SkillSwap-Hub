This is a website called "SkillSwap-Hub" using Node.JS| Express.JS| MongoDB, it is a platform to exchange your skill with one another , like a bater system , no money included. Just conversation between two people via webRTC.

The website is made with separation of Concerns (i.e- Industry Standards) have  followed. This is a only desktop website i have build using Node.JS, Express.JS and MongoDB for database and Tailwind CSS in EJS files

In this website --> 1) you can Create your own courses,
2) Read about other courses and contact the instructor on that particular course , 
3) Update/edit your course as you want,
4} Delete your course 
{Basically CRUD operations}

--=NOTE---
->Make sure to open receiver's side of video call in different page as "localhost:9000/users/call1" when the server is active.
->Open the (server.js) file in the command prompt and in the project's directiory, type "node server.js" to start the server for the working of the WebRTC.

Tools/Softwares used:- 
  1)EJS (for page rendering)
  2}webRTC (for video-call part)
  3)Nodemon
  4)JsonWebToken (for cookies and verification)
  5)Multer (for uploading of files and photos)
  6)cookie-parser (for cookies)
  7)dotenv (for protection of sensitive keys/passwords)
  8)Bcrypt (for secure login/registration)
        and many more...

  --Issues to be fixed --
  1)The project is made locally and havnt been deployed, need help with deployment { As I dont know how to deploy projects yet :) }
  2)WebRTC is worked locally in a single server , in a single device.
  3)Theres some issues from the sender's side for the video-call as its camera is not opening.
  4)Lack of proper Stun and Turn URL's , thats why it takes many tries to send the ICE candidates to the server from the sender's side.
  5)Tailwind CSS is used in EJS files use "play CDN".
