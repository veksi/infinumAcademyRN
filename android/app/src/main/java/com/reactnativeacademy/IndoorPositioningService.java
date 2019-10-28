package com.reactnativeacademy;

import android.os.Handler;
import android.os.Looper;
import android.util.Base64;

import android.widget.Toast;

import android.os.Bundle;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.WritableMap;
import com.philips.indoorpositioning.library.IndoorPositioning;

// React Native modules
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.internal.BundleJSONConverter;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

public class IndoorPositioningService extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    private IndoorPositioning indoorPositioning;
    private IndoorPositioning.Listener listener;

    private JSONObject lastLocation;
    private JSONObject lastHeading;
    private String lastError;

    private boolean isStarted = false;

    private Handler mainHandler = new Handler(Looper.getMainLooper());

    IndoorPositioningService(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    private Map<String, Object> replaceUnserializableValues(Map<String, Object> map) {
        Map<String, Object> serializableMap = new HashMap<>();
        for (Map.Entry<String, Object> entry : map.entrySet()) {
            Object value = entry.getValue();
            if (Objects.equals(Float.NEGATIVE_INFINITY, value)) {
                serializableMap.put(entry.getKey(), -Float.MAX_VALUE);
            } else if (Objects.equals(Float.POSITIVE_INFINITY, value)) {
                serializableMap.put(entry.getKey(), Float.MAX_VALUE);
            } else if (Objects.equals(Float.NaN, value)) {
                serializableMap.put(entry.getKey(), null);
            } else {
                serializableMap.put(entry.getKey(), entry.getValue());
            }
        }
        return serializableMap;
    }

    @ReactMethod
    public void initialize() {
       super.initialize();

        listener = new IndoorPositioning.Listener() {
            @Override
            public void didUpdateHeading(Map<String, Object> map) {
                lastHeading = new JSONObject(replaceUnserializableValues(map));
            }

            @Override
            public void didUpdateLocation(Map<String, Object> map) {
                lastLocation = new JSONObject(replaceUnserializableValues(map));
            }

            @Override
            public void didFailWithError(Error error) {
                lastError = error.toString();
            }
        };

        indoorPositioning = new IndoorPositioning(reactContext.getApplicationContext());
        indoorPositioning.register(listener, mainHandler);
    }

    // @ReactMethod
    // public void onStop() {
    //     super.onStop();

    //     // Unregister the camera resource on stop
    //     // Case 1 - app is closing
    //     // Case 2 - app is going into the background
    //     if (isStarted) {
    //         indoorPositioning.stop();
    //     }
    //     indoorPositioning.unregister();
    //     clearCachedData();
    // }

    // @ReactMethod
    // public void onStart() {
    //     super.onStart();

    //     // In the case the app is coming from the background, start the camera if it was running when it went to background
    //     indoorPositioning.register(listener, mainHandler);
    //     if (isStarted) {
    //         indoorPositioning.start();
    //     }
    // }

    // @ReactMethod
    // public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    //     try {
    //         switch (action) {
    //             case "start":
    //                 indoorPositioning.start();
    //                 callbackContext.success();
    //                 isStarted = true;
    //                 return true;
    //             case "stop":
    //                 indoorPositioning.stop();
    //                 callbackContext.success();
    //                 isStarted = false;
    //                 clearCachedData();
    //                 return true;
    //             case "isRunning":
    //                 callbackContext.success(String.valueOf(indoorPositioning.isRunning()));
    //                 return true;
    //             case "getError":
    //                 callbackContext.success(lastError);
    //                 return true;
    //             case "getHeading":
    //                 if (lastHeading == null) {
    //                   callbackContext.success((String) null);
    //                 } else {
    //                   callbackContext.success(lastHeading);
    //                 }
    //                 return true;
    //             case "getLocation":
    //                 if (lastLocation == null) {
    //                   callbackContext.success((String) null);
    //                 } else {
    //                   callbackContext.success(lastLocation);
    //                 }
    //                 return true;
    //             case "setConfiguration":
    //                 indoorPositioning.setConfiguration(args.getString(0));
    //                 callbackContext.success();
    //                 return true;
    //             // case "setVenueData":
    //             //     String base64EncodedVenueData = args.getString(0);
    //             //     byte[] venueData = Base64.decode(base64EncodedVenueData, Base64.DEFAULT);
    //             //     indoorPositioning.setVenueData(venueData);
    //             //     callbackContext.success();
    //             //     return true;
    //             default:
    //                 callbackContext.error(String.format("Unknown action '%s'", action));
    //                 return false;
    //         }
    //     } catch (Exception exception) {
    //         callbackContext.error(exception.getMessage());
    //         return true;
    //     }
    // }

    private void clearCachedData() {
        lastError = null;
        lastLocation = null;
        lastHeading = null;
    }


    @ReactMethod
    public void getLocation(Callback callbackMethod) {
        String location = lastLocation.toString();
        callbackMethod.invoke(location);
    }

     @ReactMethod
    public void setConfiguration(String configuration) {
        indoorPositioning.setConfiguration(configuration);
    }

    @ReactMethod
    public void show(Callback callbackMethod) {
        callbackMethod.invoke("works");
    }

    @ReactMethod
    public void start() {
        indoorPositioning.start();
    }

    @Override
    public String getName() {
        return "IndoorPositioningService";
    }
}
