# recipes

This is a simple cross platform mobile app bliding using ionic 2 and firebase.
allos you to add recipes and angredent shopping list 
## How to use this app 

* first thing you must add your firebase gonfigration in `app.component` file line 28 & 29 
  ```
   firebase.initializeApp({
      apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    }); 
    ```

    replace XXXX with your config 

### With the Ionic CLI:


```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

OR 

```bash
$ ionic cordova platform add android
$ ionic cordova run android 
```



