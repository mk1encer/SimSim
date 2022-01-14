<h1>채팅 애플리케이션 SIMSIM CHAT</h1>

React JS와 Firebase를 사용하여 간단한 채팅방을 구현하였다.

<h2>로그인 화면</h2>
Firebased의 authentication을 사용해 로그인 기능을 구현하였고, 아이디가 없을 경우 회원가입을 하게 하였다.
<img width="960" alt="1" src="https://user-images.githubusercontent.com/62545246/149510916-267f0056-1618-4e11-9cce-8b6016ac1d75.PNG">

form 작성시 firebase에 회원정보가 저장된다.
<img width="960" alt="2" src="https://user-images.githubusercontent.com/62545246/149511045-2b48e27f-1fc1-4b99-9c7b-11d1cadb4043.PNG">

로그인 하면 채팅방 목록을 볼 수 있고, 원하는 채팅방을 선택하여 입장하거나 새로운 채팅방을 만들 수 있다.
<img width="960" alt="3" src="https://user-images.githubusercontent.com/62545246/149511215-7f0587c6-4566-4528-a63f-776c58056233.PNG">

채팅방을 선택하면 기존의 채팅들을 firebase에서 불러와서 보여준다.
<img width="960" alt="4" src="https://user-images.githubusercontent.com/62545246/149511296-531a2a8f-ef60-4ba0-b08e-9775a3369582.PNG">

원하는 채팅방이 없을 경우 좌측 + 버튼을 눌러 방을 생성할 수 있다.
<img width="960" alt="5" src="https://user-images.githubusercontent.com/62545246/149511383-4d0dbc02-a7bd-4525-aa97-bc8ee0dcfddf.PNG">

새로운 채팅방에서 채팅을 시작할 수 있다.
<img width="960" alt="6" src="https://user-images.githubusercontent.com/62545246/149511447-66f7ec2f-4bfc-4db4-8477-fd6d5e5816c3.PNG">

사용종료 후 로그아웃을 원하면 로그아웃 버튼을 클릭하면 초기화면으로 돌아간다.
추가로 로그인을 하지 않고 채팅방 페이지에 접근을 시도(권한x)할 경우 접근을 차단하고 메인화면으로 돌아가도록 구현하였다.

<h2>참고자료</h2>
Routing 관련(로그인 안하면 접근못하는 기능): https://www.daleseo.com/react-router-basic/<br/>
Firebase 공식문서: https://firebase.google.com/docs/database/web/read-and-write?hl=ko <br/>
React, Firebase를 사용한 채팅 참고: shorturl.at/bipDY, shorturl.at/pIPYZ <br/>

<hr/>
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
