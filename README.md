This is a typeahead project for fetching the 50 states

To use project:

1. Clone project from github (Click "code", copy the "ssh" link)

2. In VSCode terminal, choose a folder to clone the file in. Next type "git clone" then take the copied linked from step one and paste it after "git clone". For example "git clone git@github.com:jonnny013/exercise1.git" 

3. run "npm install" to download dependencies

4. run "npm start" and open your browser to 'http://localhost:3001'


###

In this small application, the data is stored on the server as it is known beforehand and will not change.

Since the data is quite light, only one call is made to the server at the beginning and saved to a variable for further usage.


###

A note on the handling of the data on the front end, while I could spend some time putting the searched list into a variable and sending it to the backend, I decided on just focusing on UI only. For better/easier handling of the data, I strongly recommend using a framework like REACT.