# Starlore - React Native Instagram Clone

> Starlore is a React Native Instagram clone built with **Expo**, featuring post uploads, comments, likes, and follow functionality. Optimized for **iOS and Android**.

---

## Features

- User authentication with **Clerk** 
- Realtime database powered by **Convex**
- Upload images from device storage using **Expo File System & Image Picker**
- View, like, and comment on posts
- Follow/unfollow users
- Responsive UI optimized for both iOS and Android
- Realtime updates with Convex

---

## Tech Stack

| Feature | Technology |
|---------|------------|
| Framework | React Native (Expo) |
| Authentication | Clerk |
| Database | Convex (Realtime) |
| Image Upload | Expo File System & Image Picker |
| UI | React Native Components + Tailwind (optional) |
| Platform | iOS & Android |

---
## Screenshots

| Screenshot 1 | Screenshot 2 | Screenshot 3 | Screenshot 4 |
|--------------|--------------|--------------|--------------|
| <img width="250" src="https://github.com/user-attachments/assets/9f78c850-28c1-4100-afae-243358d2db63" /> | <img width="250" src="https://github.com/user-attachments/assets/e7dcbe7a-2a85-4ffc-abff-8a02ece4df1d" /> | <img width="250" src="https://github.com/user-attachments/assets/94fa405f-a60b-4304-99ba-28324c9efd79" /> | <img width="250" src="https://github.com/user-attachments/assets/70dfdbf9-1880-4964-b138-3c99d8e1587a" /> |

| Screenshot 5 | Screenshot 6 | Screenshot 7 | Screenshot 8 |
|--------------|--------------|--------------|--------------|
| <img width="250" src="https://github.com/user-attachments/assets/9ad703d9-ce88-4c4b-97a9-f9f7731da86c" /> | <img width="250" src="https://github.com/user-attachments/assets/9fc76797-8841-45fc-a4bf-6aaf18e47048" /> | <img width="250" src="https://github.com/user-attachments/assets/59f2d5d7-6a9f-445e-a554-537bbe5ba0e7" /> | <img width="250" src="https://github.com/user-attachments/assets/e5de1b57-20be-4c97-8316-201b8588316d" /> |






## Installation & Setup

1. Clone the repo and install dependencies:

```bash
git clone https://github.com/yourusername/starlore.git
cd starlore
npm install
# or
yarn install

```
2. Create a .env.local file in the root directory and add your environment variables
   ```bash
   EXPO_PUBLIC_CONVEX_URL=your_convex_url
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_JWT_ISSUER_DOMAIN=your_clerk_domain
   ```
3. Start the app
   ```bash
   npx expo start
   # Run on iOS
   npx expo --i
   # Run on Android
   npx expo --a
   ```

## Documentation & Useful Links

- Expo Documentation

- Clerk Documentation

- Convex Documentation
