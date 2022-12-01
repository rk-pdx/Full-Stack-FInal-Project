# Full-Stack-Final-Project

Final project for Full-Stack Web Development.

Information for Vite
Created vite project - https://vitejs.dev/guide/#scaffolding-your-first-vite-project
Vite information - https://vitejs.dev/

The default port used by the client is 5173. To change the port used on the client side, go to the vite.config.js file. Uncomment the server and change the port value.

The default port used by the server is 5001.

Information for React
React docs https://reactjs.org/

Running the Progam Locally:

    Start The Client side:
        - Open a new terminal and from the home directory of the project    "Full-Stack-Final-Project" cd into the "client" folder.
        - Type the following command in the terminal of the client folder:
            - "npm run dev"
        - You'll see the following two lines:
            ➜  Local:   http://127.0.0.1:5173/
            ➜  Network: use --host to expose
        - The Local: http://127.0.0.1:5173 is where the application will be running and accessible on your local machine.

    Start the Server side:
        - Either by opening a new terminal in the project home directory or starting a split terminal, from the "Full-Stack-Final-Project" directory
        cd into the "server" folder via "cd server".
        - Type the following command within the server folder:
            - "npm run dev"
        - You'll see the following lines:
            > server@1.0.0 dev
            > nodemon server
            [nodemon] 2.0.20
            [nodemon] to restart at any time, enter `rs`
            [nodemon] watching path(s): *.*
            [nodemon] watching extensions: js,mjs,json
            [nodemon] starting `node server src/server.js`
            Server running at http://localhost:5001
        - Server running at http://localhost:5001 is where the server side routes are accessible.

    Start Up The App:
        - Open a web browser and paste the local host url we got from starting the client side "http://127.0.0.1:5173/"
        - The application should load and be ready to use.

Libraries: - 'mongodb'
Install Command: "npm install mongodb"

    - 'cors'
        Install Command: "npm install cors"

    - 'body-parser'
        Install Command: "npm install body-parser"

Used Modules: - 'react'; - 'axios';
Install Command: "npm install axios"

    - 'react-router-dom';
        Install Command: "npm install react-router-dom"

    - 'react-uuid';
        - Install Command: "npm install react-uuid"
