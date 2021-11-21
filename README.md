<b>Team name:</b>
Quattro Ballyhoo!

<b>Team roles</b><br>
Project Manager: Jenny Evans<br>
Developer: Elodie Mathieu<br>
Developer: Valentina Cuencas<br>
Scrum Master: Keshshoth Kanagalingam<br>

<b>Product Name and Description</b><br>
Eye4Fish generates reports and alerts for scientists and authorities who are tracking disruptions in fish ecosystems in near real-time, based on information pulled from multiple data sources, including social media, open-source and crowd-sourced websites. The tool will compare each user entered data point to a baseline database consisting of information regarding fish species and their ecosystem requirements to find any abnormalities.

<b>Product Vision</b><br>
For marine biologists, fisheries scientists, climate activists and other professionals who need a monitoring and alert system for detecting where fish species are living outside of their natural ecosystems, the Eye4Fish is a website that pulls information from multiple data sources in near real time and alerts the user and authorities to any anomalies in the data. Unlike our competitors, our product pulls recreational fishing data from multiple sources and informs the user in near real-time about potential problems in the environment.

<b>Developer's Notes</b><br>
As a developer editing and running this program, you want to make sure there are certain dependencies and packages downloaded on your computer in order for the program to run properly.

One of the most important packages to download is Node because it is used to run the program on the command line. Instructions on how to download Node are included here: https://nodejs.dev/learn/how-to-install-nodejs

The dependencies included from the package file are:
Convert-csv-to-json: this package was used for a quick approach to convert from a csv to json in order to upload into the database.
Mongoose: this package was used to be able to connect to the MongoDB database.
Prompt & Prompt sync: both of these packages were used in order to obtain user input from the command line. 

There are a variety of files included in the whole project file:
Index.js: The main file that holds the majority and main functionality of the program. 
Import.js: File that includes code for converting a file from cvs to json.
myOutputFile.js: File that includes the data from species which was used to import into the database after converting from csv.

Uploading the json data files into the MongoDB database
There are two ways to upload the json data files into the MongoDB database. The first one is using the command line. Make sure the connection between MongoDB and your program is successful. The second one is using Compass which is a software that can be downloaded onto your computer (https://www.mongodb.com/products/compass), providing a quick and easy way to upload json files into the database. 
