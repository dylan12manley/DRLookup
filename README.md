# _API Practice_

#### _API Practice, November, 22th, 2019_

#### By _**Dylan Manley**_

## Description
_search for doctors using keywords, demonstrating API use.
__

## Setup/Installation Requirements

* _Click the clone or download button and copy the link_
* _Open your terminal and type "git clone (link)"_
* _On your terminal enter cd DRLookup_
* _On your terminal enter npm install_
* _On your terminal enter npm install webpack@4.39.3 --save-dev --save-exact_
* _On your terminal enter npm install webpack-cli@3.3.8 --save-dev_
* _On your terminal enter npm install style-loader@1.0.0 css-loader@3.2.0 --save-dev_
* _On your terminal enter npm install html-webpack-plugin@3.2.0 --save-dev_
* _On your terminal enter npm install clean-webpack-plugin@3.0.0 --save-dev_
* _On your terminal enter npm install uglifyjs-webpack-plugin@2.2.0 --save-dev_
* _On your terminal enter npm install webpack-dev-server@3.8.0 --save-dev_
* _On your terminal enter npm install eslint@6.3.0 --save-dev_
* _On your terminal enter npm install eslint-loader@3.0.0 --save-dev_
* _On your terminal enter npm install jquery --save_
* _On your terminal enter npm install popper.js --save_
* _On your terminal enter npm install jest@24.9.0 --save-dev_
* _On your terminal enter npm install @babel/core@7.6.4 --save-dev_
* _On your terminal enter npm install @babel/plugin-transform-modules-commonjs@7.6.0 --save-dev_
* _Create an .env folder on the root directory of the project_
* _Go to The Better Doctor website at this link: https://developer.betterdoctor.com/signup __
* _Create a login and follow the website to create your API Key_
* _Place your API key in the .env file like this: API_KEY =[your API key goes here]_   
* _On your terminal enter npm run start_

## Specs

|Specs|Input|Output|
|-|-|-|
|User enters a name to receive a list of doctors in the area that fit the search query.| Toofbusch| Dr. Firstname Toofbusch, example address, example phone number, example website, availablities|
|User enters a medical issue program returns list of doctors in local area that fit the search query|Bad breath|Dr. Firstname Toofbusch, example address, example phone number, example website, availablities|
|The application returns a notification that states what the error is, when the API call results in an error.|Toofbrusch|"Error Message"|
|Program returns "Doctor not found on Data Base.." if no doctors fit the search criteria|Toofbrusch|"Doctor not found on Data Base.."|

## Known Bugs


## Support and contact details

_Dylan Manley at dylan.manley@gmail.com_

## Technologies Used

_HTML, CSS, Javascript, bootstrap, webpack, jest, postman and jQuery_

### License

*This software is licensed under the MIT license agreement*

Copyright (c) 2019 **_Dylan Manley_**
