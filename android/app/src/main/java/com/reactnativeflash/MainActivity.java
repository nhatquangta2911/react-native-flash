package com.reactnativeflash;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript. This is
     * used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReactNativeFlash";
    }

    // FirebaseInstanceId.getInstance().getInstanceId()
    // .addOnCompleteListener(new OnCompleteListener<InstanceIdResult>() {
    // @Override
    // public void onComplete(@NonNull Task<InstanceIdResult> task) {
    // if (!task.isSuccessful()) {
    // Log.w(TAG, "getInstanceId failed", task.getException());
    // return;
    // }

    // // Get new Instance ID token
    // String token = task.getResult().getToken();

    // // Log and toast
    // String msg = getString(R.string.msg_token_fmt, token);
    // Log.d(TAG, msg);
    // Toast.makeText(MainActivity.this, msg, Toast.LENGTH_SHORT).show();
    // }
    // });
}
