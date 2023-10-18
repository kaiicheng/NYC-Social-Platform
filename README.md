# Social Media Platform

https://nyc-social-platform.web.app/
<!-- https://kai-social-platform.web.app/ -->

A NYC social media platform built with React, Firebase, and Semantic UI React.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication with Firebase
- Posting and sharing content
- User profiles
- Search functionality
- Responsive design
- and more...

## Demo

You can check out a live demo of the platform at [Demo Link](https://your-demo-link.com).

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- Firebase account and project set up
- Algolia account and API keys (for search functionality)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/social-media-platform.git


# Hosting on Firebase

* Step 1
Download Firebase in terminal
```
npm install -g firebase-tools
```

* Step 2
Login Firebase
```
firebase login
```

* Step 2
Initialize Firebase
```
firebase init
```

* Step 3
Choose "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys"

* Step 4
Use a existing project (Set up project on Firebase website in advance)

* Step 5
What do you want to use as your public directory? 
Type "build"

* Step 6
Configure as a single-page app (rewrite all urls to /index.html)? 
Select "Y"

* Step 7
Set up automatic builds and deploys with GitHub? 
Select "No"

* Step 8
Build
```
npm run build
```

* Step 9
Deploy website application
```
firebase deploy
```