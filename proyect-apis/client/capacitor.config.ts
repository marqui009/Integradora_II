import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'client',
  webDir: 'dist/client',
  server: {
    androidScheme: 'https'
  }
};

export default config;
