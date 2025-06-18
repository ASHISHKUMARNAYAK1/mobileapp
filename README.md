
# UpClick Mobile App

This is the mobile version of the UpClick trading automation system, built with React Native + Expo.

## 📦 Features
- Admin: Post signals to all users
- Trader: View signals, executed orders
- WebSocket real-time updates
- Connect broker via OAuth

## 🚀 Setup

```bash
npm install -g expo-cli
cd mobileapp
npm install
expo start
```

## 📱 Build APK

```bash
npx expo install eas-cli
eas login
eas build -p android --profile preview
```
