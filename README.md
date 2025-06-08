<h1 align="center">Welcome to bye-money-app 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D18-blue.svg" />
  <a href="https://github.com/hattoriKanto/mobile-byemoney-app#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/hattoriKanto/mobile-byemoney-app/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

### 🏠 [Homepage](https://github.com/hattoriKanto/mobile-byemoney-app#readme)

## ✍🏼 Description

The ByeMoney App is your personal finance sidekick — built with React Native and powered by Supabase. Whether you're tracking daily coffee expenses or budgeting like a boss, this app helps you stay in control.

### ✨ Features

- 🧑‍💻 **User Authentication**
  Sign Up, Log In, Log Out - securely handled via Supabase Auth with email/password.

- 🛡️ **Email Verification with Deep Linking**
  Only verified users get in. Supabase + deep links = no shady logins here.

- 📦 **Expense CRUD**
  Users can create, update, and delete expenses in just a few taps — fast, simple, effective.

- 🛍️ **Smart Sorting**
  Sort your expenses by date, title, category, or amount. Find what you need in a snap.

- 🔜 **Charts & Insights** _(Coming Soon)_  
  Visualize your spending habits — see total amounts by month and year with colorful charts.

- 🔜 **Multi-Currency Support** _(Coming Soon)_  
  Traveling? Future versions will support multiple currencies — global wallet vibes.

## 🔑 Prerequisites

- node >=18
- npm >=9.0.0

## 🧪 Technologies

- ⚛️ **[React Native](https://reactnative.dev/)** - Write once, run anywhere (iOS & Android) with native performance and JavaScript vibes.
- 🎣 **[React Hook Form](https://react-hook-form.com/)** - Super smooth form handling with validations that just work.
- 📦 **[Zod](https://zod.dev/)** - TypeScript-friendly schema validation.
- 🧠 **[Zustand](https://zustand-demo.pmnd.rs/)** - Global state management that’s tiny but mighty.
- 🗂️ **[React Navigation](https://reactnavigation.org/)** - Stack & tab navigation that's sleek and reliable.
- 🐣 **[Supabase](https://supabase.com/)** - The open source Firebase alt for auth & data — Postgres powered!

### 🛠️ Essential Utilities

- 🔐 **[Async Storage](https://react-native-async-storage.github.io/async-storage/)** - Local storage for tokens, settings, and all your secret sauce.
- 🔧 **[React Native Config](https://github.com/lugg/react-native-config)** - Manage environment variables like a pro.
- 📆 **[React Native Date Picker](https://github.com/henninghall/react-native-date-picker)** - Sleek date/time picker for all your scheduling needs.
- 🧼 **[Keyboard Aware Scroll View](https://github.com/APSL/react-native-keyboard-aware-scroll-view)** - Handles keyboard issues like a champ.
- 🧾 **[Toast Messages](https://github.com/calintamas/react-native-toast-message)** - Feedback for your users, hot and fresh.
- 📊 **[React Native SVG](https://github.com/software-mansion/react-native-svg)** - Custom icons & charts? Say less.
- 💫 **[Loader Kit](https://www.npmjs.com/package/react-native-loader-kit)** - Cute loading animations for a smooth UX.

## 💪🏼 Install

```sh
npm install
```

## 💻 Usage

1. Start the Metro Bundler:

```sh
npm run start
```

2. Run the App on Your Device or Emulator:

🟢 Android:

```sh
npm run android
```

🍏 iOS:

```sh
npm run ios
```

⚠️ You’ll need either Android Studio (for Android) or Xcode (for iOS) set up — or a real device if you’re feeling brave.
👉 Need help with that? Check out the official setup guide

3. Supabase Setup:

- Create a project at **[supabase.com](https://supabase.com/)**.
- Grab your API URL and anon/public key from the project settings.
- Create a `.env` file in your project root and drop in the following:

```sh
SUPABASE_PUBLIC_KEY=YOUR_PUBLIC_KEY_API
SUPABASE_URL=YOUR_API_URL
```

## ⚠️ Disclaimer

This app has not been tested on iOS. It was developed and tested primarily on Android device.

## 👦🏼 Author

👤 **hattoriKanto**

- Github: [@hattoriKanto](https://github.com/hattoriKanto)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/hattoriKanto/mobile-byemoney-app/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2025 [hattoriKanto](https://github.com/hattoriKanto).<br />
This project is [MIT](https://github.com/hattoriKanto/mobile-byemoney-app/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
