# Code H - Android APK Build Instructions

## ✅ Changes Made

### 1. Homepage Title Changed
**File:** `client/src/pages/Home.tsx` (Line 11)
- **Before:** "Code H: Health Comes First"
- **After:** "Code H: Health & Help"

### 2. Medical Lessons Tab Added
**File:** `client/src/pages/DoctorDashboard.tsx`
- Added a new "Medical Lessons" card in the dashboard (4th card)
- Includes expandable section with:
  - Video Tutorials
  - Study Materials
  - Interactive Courses
  - Quick Stats (Completed Courses, Video Hours Watched, Certifications Earned)

---

## 📱 How to Build Android APK

Follow these steps on your Windows computer:

### Prerequisites
1. **Node.js** (v18 or higher) - Download from https://nodejs.org
2. **Android Studio** - Download from https://developer.android.com/studio
3. **Java JDK 17** - Included with Android Studio

---

### Step 1: Install Dependencies

```bash
cd CodeH-Modified

# Install root dependencies
npm install

# Install client dependencies
cd client
npm install

# Install Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/android
```

---

### Step 2: Build the React App

```bash
# From client directory
npm run build
```

This creates a `dist` folder with your web app.

---

### Step 3: Initialize Capacitor

```bash
# Still in client directory
npx cap init

# When prompted:
# App name: Code H
# App ID: com.codeh.healthcare (or your choice)
# Web Dir: dist
```

---

### Step 4: Add Android Platform

```bash
npx cap add android
```

This creates an `android` folder with your Android project.

---

### Step 5: Update Capacitor Configuration

Create `capacitor.config.ts` in the client folder:

```typescript
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.codeh.healthcare',
  appName: 'Code H',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
```

---

### Step 6: Sync Changes to Android

```bash
npx cap sync android
```

---

### Step 7: Open in Android Studio

```bash
npx cap open android
```

This opens the project in Android Studio.

---

### Step 8: Build APK in Android Studio

1. **Wait for Gradle Sync** to complete
2. Go to **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
3. Wait for build to complete
4. Click **locate** when prompted
5. Find your APK in: `android/app/build/outputs/apk/debug/app-debug.apk`

---

### Step 9: Install on Your Phone

**Option A: USB Cable**
1. Enable Developer Mode on your phone
2. Enable USB Debugging
3. Connect phone to computer
4. Run: `adb install app-debug.apk`

**Option B: Direct Transfer**
1. Copy `app-debug.apk` to your phone
2. Open the APK file on your phone
3. Allow installation from unknown sources
4. Install

---

## 🎯 Quick Build Script

Create a file `build-apk.bat` in the `client` folder:

```batch
@echo off
echo Building Code H Android APK...
echo.

echo Step 1: Building React app...
call npm run build

echo Step 2: Syncing with Capacitor...
call npx cap sync android

echo Step 3: Opening Android Studio...
call npx cap open android

echo.
echo ========================================
echo Build the APK in Android Studio:
echo 1. Build -^> Build Bundle(s) / APK(s) -^> Build APK(s)
echo 2. Find APK at: android/app/build/outputs/apk/debug/app-debug.apk
echo ========================================
pause
```

Then just double-click `build-apk.bat` to automate the process!

---

## 🔧 Troubleshooting

### TypeScript Errors During Build
**Solution:** Build with Vite only (skip TypeScript check)
```bash
npx vite build
```

### "Command not found: cap"
**Solution:** Use npx
```bash
npx cap <command>
```

### Android Studio Gradle Errors
**Solution:**
1. File → Invalidate Caches / Restart
2. Build → Clean Project
3. Build → Rebuild Project

### APK Won't Install
**Solution:**
- Enable "Install from Unknown Sources" in phone settings
- Check minimum Android version (Android 6.0+ required)

---

## 📦 What's Included in This Package

```
CodeH-Modified/
├── client/                    # React Frontend (MODIFIED)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx               ✅ CHANGED: "Health & Help"
│   │   │   └── DoctorDashboard.tsx    ✅ CHANGED: Added Medical Lessons
│   │   └── ...
│   └── package.json
├── server/                    # Backend (unchanged)
├── README.md
├── QUICKSTART.md
└── BUILD_APK.md              # This file
```

---

## 🚀 Alternative: Using Online APK Builder

If Android Studio is too heavy, use an online builder:

1. **AppGyver** (https://www.appgyver.com) - Free
2. **Thunkable** (https://thunkable.com) - Free tier available
3. **Expo** (https://expo.dev) - Requires code adaptation

---

## 📱 Expected APK Size

- **Development APK:** ~50-70 MB
- **Production APK (minified):** ~20-30 MB

---

## ✅ Final Notes

- The APK will work offline for the frontend
- Backend (server) needs to be hosted separately for API calls
- For production, host the backend and update API URLs in the app
- Consider signing the APK for Google Play Store (separate process)

---

## 🎉 Success!

Once you have your APK:
1. Install it on your phone
2. Open "Code H" app
3. You'll see "Code H: Health & Help" on homepage
4. Doctors can access the new "Medical Lessons" tab

---

**Need help?** Contact support or check Capacitor docs:
https://capacitorjs.com/docs/android
