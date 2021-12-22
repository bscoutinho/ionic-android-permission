import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private permissions: AndroidPermissions
  ) {
    this.requestCameraPermission();
  }

  requestCameraPermission() {
    console.log('native platform', Capacitor.isNativePlatform());
    if (Capacitor.isNativePlatform()) {
      this.permissions.checkPermission(this.permissions.PERMISSION.CAMERA).then(
            result => {
              console.log('result check permission', result);
                if (result.hasPermission) {
                    //alert('you already have this permission')
                    alert('camera permission already granted');
                } else {
                    //alert('please implement permission request')
                    this.permissions.requestPermission(this.permissions.PERMISSION.CAMERA);
                }
            }
        );
    }
    else {
        console.log('Capacitor not detected, this button will do nothing :(');
    }
  }
}
