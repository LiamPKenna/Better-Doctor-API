# _Doctor Lookup_

#### _Web application utilizing the Better Doctor API to allow users to search for a doctor, November 22nd 2019_

#### By _**Liam Kenna**_

## Description

_This site was built utilizing the Better Doctor API and zipcodeapi.com to allow users to make searches of medical providers using the following fields:_

* _Provider Specialty_
* _Medical Issue_
* _Location (via zip code)_
* _Doctor's name (First, Last, or Full)_

_For example:_

| Input:  | Output:   |
|---|---|
|selected specialty: Foot Surgery| A list of doctors in the Portland Area with that specialty|

_All searches default to Portland, OR unless the user enters a zip code_

## Setup/Installation Requirements

* _Clone to local machine and open index.html in the browser_
* _Create .env file in root directory_
* _Get a free API key from https://www.zipcodeapi.com and add to .env as ZIP_KEY={your key}_
* _Get a free API key from https://developer.betterdoctor.com and add to .env as API_KEY={your key}_
* _Run "npm i" to install dependencies_
* _Run "npm run start" to begin dev server and load site_
* _This site can be viewed in it's current form at https://LiamPKenna.github.io/wk6_


_To explore the source code, feel free to browse on github or clone to your local machine_

## Known Bugs

_Better Doctor API is no longer operational. This app is not currently usable_

## Support and contact details

_Any issues or concerns, please email liam@liamkenna.com_

## Technologies Used

_HTML, CSS, Bootstrap, jQuery, JavaScript, Webpack, Jest_

### License

*This software is available under the ISC License*

Copyright (c) 2019 **_Liam Kenna_**
