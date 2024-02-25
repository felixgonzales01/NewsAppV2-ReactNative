# News App 2.0

NewsAppV2 is a mobile application built with React Native, designed to deliver the latest news from various categories directly to your mobile device. Utilizing the [NewsAPI](https://newsapi.org/), this app brings current events from around the globe to your fingertips.

## Features

- **Multiple News Categories**: Access news from categories like Business, Health, and General.
- **Top Headlines**: Get the latest top headlines from your country.
- **User-friendly Interface**: Simple and intuitive user interface for easy navigation.
- **Article Summaries**: Read summaries of articles directly within the app.
- **Direct Links to Full Articles**: Open full articles in your default browser with just a tap.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm or yarn
- React Native CLI
- An Android or iOS device or emulator

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/felixgonzales01/NewsAppV1-ReactNative.git
```

2. **Navigate to the project directory:**

```bash
cd NewsAppV1-ReactNative
```

3. **Install dependencies:**

```bash
npm install
```
or if you use yarn,
```bash
yarn install
```

4. **Set up the NewsAPI key:**

Navigate to `config/config.js` and insert your NewsAPI key:
```javascript
export const API_KEY = 'YOUR_API_KEY_HERE';
```

5. **Run the app:**

For Android:
```bash
npx react-native run-android
```

For iOS:
```bash
npx react-native run-ios
```

## Built With

- [React Native](https://reactnative.dev/) - The framework used to develop the mobile application.
- [Expo](https://expo.io/) - An open-source platform for making universal native apps.
- [React Navigation](https://reactnavigation.org/) - Routing and navigation for React Native apps.
- [NewsAPI](https://newsapi.org/) - API used to fetch news articles.
