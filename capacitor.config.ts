import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'nhlv2.me',
  appName: 'Naheulbeuk - Fiche de Personnage',
  webDir: 'www',
  cordova: {
    preferences: {
      ScrollEnabled: 'true',
      'android-minSdkVersion': '22',
      'android-targetSdkVersion': '35',
      BackupWebStorage: 'none',
      SplashMaintainAspectRatio: 'true',
      FadeSplashScreenDuration: '300',
      SplashShowOnlyFirstTime: 'false',
      SplashScreen: 'screen',
      SplashScreenDelay: '3000',
      AndroidPersistentFileLocation: 'Compatibility'
    }
  }
};

export default config;
