# rock-tracks


React/Redux application that connects to an Apple REST web service and returns a list of rock tracks.



To run this example:


- Download this repo or git clone 

From the repo folder run:

- npm install
- npm start

- open http://localhost:8080/ in the browser



Functionality overview:

- Makes API call to Apple REST web service (https://itunes.apple.com/search?term=rock&media=music)
 and returns a list of rock tracks in JSON format
- Uses redux-thunk as a middleware to fetch the data
- Uses Error Handling of Redux



Core structure:
Actions:
- Data is fetched by using Redux action 
- Has 3 actions: BEGIN, SUCCESS, FAILURE
- Before you start the API call, you dispatch the BEGIN action.

Reducers:
- Has 2 files for reducers: main file "reducers" and rootReducer, which combines all reducers.
- The reducer saves the products into the Redux store 
- It also sets a loading flag to true when the fetch begins, and false when it finishes or fails.

Components:
Main component is "TrackList":
- responsible for kicking off the data fetching and displaying data

Future works:
Due to the limited time not all functionalities satisfy the initial requirements. For example:
- the details of each track are not displayed in separate screen, instead there is a link (more details) which has
a click event that shows more content of the track for the specific index clicked
- there is no a button which should launch the browser and load the trackViewUrl.
- duration of the track is given in milliseconds but it was not formatted into Hours:Seconds format


So the future works consist of following actions:
1. The details of each track to be displayed on a separate screen. This can be achieved by using Navigation (StackNavigator), Router and react-native packages (for View, Link etc).
2. For middleware (API requests and fetching responses) use separate file, not actions for separation of concerns.
3. Adding GUI components to make more user-friendly and using separate CSS file for styling
4. Make a list dynamic and add filters for the list. Store them in proper storage file
5. Use different design patterns and design for devices by applying @media tag
6. Convert data and display in proper format. For example, the duration of the track convert (format) into Hours and Minutes by applying Math functions and package
 
