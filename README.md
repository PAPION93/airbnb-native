### settings

1. `npm -i -g expo-cli`
2. `expo init airbnb-native`
   - blank
3. `expo login`
   - `enter i` : iOS simulator
4. `export start`
5. `npm i @expo/vector-icons`
6. `expo install expo-asset`
7. `expo install expo-font`
8. `npm i @reduxjs/toolkit`
9. `npm i redux`
10. `npm i react-redux`
11. `npm add redux-persist`

### React Native Debugger

- RN Debugger : cmd + t
- simulator : cmd + d, Remote JS Debugger 선택

### App, Redux Setup 마친 후 내용 정리
> 내가 뭘 했는지 전혀 모르겠다...정리

1. image, font pre-load 내용 정리.

   - App.js

     1. <AppLoading> component가 `loadAssets()`를 호출한다.
     2. `loadAssets()`는 image와 font를 pre-load 한다.

        - `cacheImages`, `cacheFonts` 두 함수는 각각 images, fonts array를 인자로 받아 promise array를 리턴한다.
        - `loadAssets()`는 preload한 promise.all을 리턴한다.

     3. <AppLoading> component는 pre-load가 끝나면 `handleFinish()` 를 실행한다.
        - isReady `state`를 `true` 로 변경한다.
     4. 마지막으로 <Provier> 등 컴포넌트를 리턴한다.

2. Redux store 흐름 정리

   - `userSlice.js`에서 `logIn`, `logOut` 2가지 `reducer`를 `export`한다.
   - `rootReducer.js`에서 `combineReducers()`로 결합한다.
   - `store.js`에서 `rootReducer.js`로부터 반환받은 `store`를 `export`한다.
   - 마지막으로 `Provider`로 도착한다. 그러면 app이 Redux와 함께 render된다.

3. Gate component 정리

   - `Gate component`는 Redux로부터 `isLoggedIn` state를 전달받는다.
   - `isLogged` state에 따라 login, logout 상태를 표현한다.

4. PersistGate component 정리

   - `PersistGate`는 핸드폰에 state를 저장할 수 있게 해준다.
   - `persistor`는 `store.js`에서 만들어진다.
   - `persistReducer()`는 `rootReducer`의 변화를 감지하고 그 변화를 핸드폰에 저장한다.
   - 또한 `reducer`를 `load`할 때 `disk`에서 `reducer`를 `loading` 해온다.
   - `redux toolkit`은 자체 `action`이 있기 때문에 `persist`에서 만든 `action`은 `Redux store`가 무시할 수 있도록 설정한다.

### React Navigation

1. `npm install @react-navigation/native`
2. `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`
3. `npm install @react-navigation/stack`
4. `npm install styled-components`

### Image Blur

`expo install expo-blur`

### API

`npm install axios`

### Tab Menu
`npm install @react-navigation/bottom-tabs`

### React Native Swiper
`npm i --save react-native-swiper@next`