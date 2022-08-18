# moduletest

- commonJS 로 테스트 시 package.json
- esm 으로 테스트 시 `"main"` 속성 값 하단에 `"type":"module"` 를 추가 입력. 
  - package_es.json의 내용으로 전체 교체해도 됨.


## test
```
npm install

npm run commonjs
npm run esm
npm run moment // local timezone을 한국이 아닌 
npm run start
```