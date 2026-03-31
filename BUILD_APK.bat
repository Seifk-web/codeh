@echo off
COLOR 0A
cls
echo ========================================
echo   CODE H - Android APK Builder
echo   Health ^& Help Edition
echo ========================================
echo.

:MENU
echo Please select an option:
echo.
echo [1] Install Dependencies
echo [2] Build React App
echo [3] Setup Capacitor for Android
echo [4] Build APK (Complete Process)
echo [5] Open in Android Studio
echo [6] Exit
echo.
set /p choice="Enter your choice (1-6): "

if "%choice%"=="1" goto INSTALL
if "%choice%"=="2" goto BUILD_REACT
if "%choice%"=="3" goto SETUP_CAP
if "%choice%"=="4" goto BUILD_ALL
if "%choice%"=="5" goto OPEN_STUDIO
if "%choice%"=="6" goto EXIT
goto MENU

:INSTALL
echo.
echo ========================================
echo Installing Dependencies...
echo ========================================
echo.
cd client
call npm install
call npm install @capacitor/core @capacitor/cli @capacitor/android --save
cd..
echo.
echo Dependencies installed successfully!
pause
goto MENU

:BUILD_REACT
echo.
echo ========================================
echo Building React Application...
echo ========================================
echo.
cd client
call npx vite build
cd..
echo.
echo React app built successfully!
echo Output: client/dist/
pause
goto MENU

:SETUP_CAP
echo.
echo ========================================
echo Setting Up Capacitor for Android...
echo ========================================
echo.
cd client

echo Creating Capacitor config...
(
echo import { CapacitorConfig } from '@capacitor/cli';
echo.
echo const config: CapacitorConfig = {
echo   appId: 'com.codeh.healthcare',
echo   appName: 'Code H',
echo   webDir: 'dist',
echo   server: {
echo     androidScheme: 'https'
echo   }
echo };
echo.
echo export default config;
) > capacitor.config.ts

echo Adding Android platform...
call npx cap add android

echo Syncing files...
call npx cap sync android

cd..
echo.
echo Capacitor setup complete!
pause
goto MENU

:BUILD_ALL
echo.
echo ========================================
echo Complete APK Build Process
echo ========================================
echo.

echo [1/4] Installing Dependencies...
cd client
call npm install --silent
call npm install @capacitor/core @capacitor/cli @capacitor/android --save --silent

echo [2/4] Building React App...
call npx vite build

echo [3/4] Setting Up Capacitor...
(
echo import { CapacitorConfig } from '@capacitor/cli';
echo.
echo const config: CapacitorConfig = {
echo   appId: 'com.codeh.healthcare',
echo   appName: 'Code H',
echo   webDir: 'dist',
echo   server: {
echo     androidScheme: 'https'
echo   }
echo };
echo.
echo export default config;
) > capacitor.config.ts

REM Check if android folder exists
if not exist "android\" (
    echo Adding Android platform...
    call npx cap add android
)

echo [4/4] Syncing with Android...
call npx cap sync android

cd..

echo.
echo ========================================
echo Build process complete!
echo.
echo Next steps:
echo 1. Option [5] to open Android Studio
echo 2. In Android Studio: Build -^> Build APK
echo 3. Find APK at: client/android/app/build/outputs/apk/debug/app-debug.apk
echo ========================================
pause
goto MENU

:OPEN_STUDIO
echo.
echo ========================================
echo Opening Android Studio...
echo ========================================
echo.
cd client
call npx cap open android
cd..
echo.
echo Android Studio should open now.
echo.
echo To build APK:
echo 1. Wait for Gradle sync
echo 2. Build -^> Build Bundle(s) / APK(s) -^> Build APK(s)
echo 3. Locate APK: android/app/build/outputs/apk/debug/app-debug.apk
pause
goto MENU

:EXIT
echo.
echo Thank you for using Code H APK Builder!
echo.
echo Your changes:
echo - Homepage: "Code H: Health ^& Help"
echo - Doctor Dashboard: Medical Lessons Tab Added
echo.
pause
exit

