Steps to set-up:

1. Download Node js from – https://nodejs.org/download/ and install
2. Download Selenium server from http://docs.seleniumhq.org/download/
3. Navigate to any directory and download nightwatch from command line(npm install nightwatch)
4.Extract the folders from the NodeStrom folder and place directly in the [project-name]root folder
5. Now copy the nightwatch folder (which was downloaded by cmd in step 3) and place it – “Project/lib/nightwatch” path
6. Open Node directory (example – C:\Program Files\nodejs\node_modules) . Copy “npm” folder and place it in “Project/lib/npm” directory
7. Place selenium-server-standalone-{VERSION}.jar in Project/lib/selenium.
8.Download chrome driver and IE driver into lib folder.
9.Specify the path of runner.js which is present in project/lib/nightwatch folder in 'nightwatch.js' file. 

How to Run:

Navigate to your root directory in command project and type the below command

command:   node nightwatch.js -t tests/nordstrom-spec.js
