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
