# My React Native App

This code is written by Ali El-Helbawi for ITXI to be evaluate my approach, code structuring, UI/UX, and how much the overall deliverable adheres to the requirement.

## How to Run the App

Follow these steps to set up and run the app on your computer.

### 1. Install Requirements

Before running the app, install the following:

- [Node.js](https://nodejs.org/) (Recommended version: LTS)
- [Git](https://git-scm.com/) (For downloading the project)
- [Android Studio](https://developer.android.com/studio) (For Android emulator)
- [Xcode](https://developer.apple.com/xcode/) (For iPhone simulator, Mac only)

### 2. Download the Project

Open **Terminal** (Mac) or **Command Prompt** (Windows) and run:

```sh
git clone https://github.com/Ali-El-Helbawi/itxi-exercice.git
cd itxi-exercice
```

### 3. Install Dependencies and Pods

Run this command to install the necessary files:

```sh
npm install
cd ios/
pod install
```

### 4. Run project

commands:

```sh
npm run start # to run project
npm run android # to run on Android emulator
npm run ios # to run on IOS emulator
```

### 5. Test deep-linking

commands:

```sh

adb shell am start -W -a android.intent.action.VIEW -d "itxi://main/settings/setCompanyID" # to run on Android emulator and oped Set Company ID screen

xcrun simctl openurl booted itxi://main/settings/setCompanyID # to run on IOS emulator and oped Set Company ID screen
```
