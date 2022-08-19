# moduletest

- commonJS 로 테스트 시 package.json 그대로 유지.
- esm 으로 테스트 시 `"main"` 속성 값 하단에 `"type":"module"` 를 추가 입력. 
  - package_es.json의 내용으로 전체 교체해도 됨.


## test
```
npm install

npm run commonjs
npm run esm
npm run moment
npm run start // koa 웹서버 띄운 후에, http://localhost:3000/scriptload.html 로 접근하여 load 된 script 확인.
```