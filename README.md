# 캡스톤 디자인 경매 프로그램 프론트 엔드

## 📂 Folder Structure

```
├── 📂 public
│
├── 📂 src
│   ├── 📂 api
│   ├── 📂 assets
│   │    └── 📂 imgs
│   │
│   ├── 📂 atoms
│   ├── 📂 components
│   │
│   ├── 📂 hooks
│   ├── 📂 pages
│   │
│   └── 📂 styles
│
├── 📝 App.css,App.ts,index.css,index.ts ...
│
└── 🛠package.json,README.md,gitignore...

```

## 🛠 Tech Stack

- React / TS
- styled-components
- recoil
- axios

## 📠 Convention

### Naming Rule

- 컴포넌트, 파일명 ⇒ PascalCase
- 변수, 함수 ⇒ carmelCase
- 폴더명 ⇒ carmelCase
- 파라미터 ⇒ carmelCase
- 상수 ⇒ BIG_SNAKE_CASE

### Branch Naming Convention

| 머릿말  | 설명                               |
| ------- | ---------------------------------- |
| master  | 서비스 브랜치                      |
| develop | 배포 전 작업 기준                  |
| feature | 기능 단위 구현                     |
| hotfix  | 서비스 중 긴급 수정 건에 대한 처리 |

### 🤝 Commit Convention

| 머릿말   | 설명                                   |
| -------- | -------------------------------------- |
| feat     | 기능 구현, 추가                        |
| setting  | 패키지 설치, 개발 설정                 |
| style    | 스타일 관련 코드                       |
| refactor | 코드 리팩터링                          |
| fix      | 버그 수정, 예외 케이스 대응, 기능 개선 |
| docs     | README.md 작성, 주석 작성              |
| chore    | 기타 작업                              |


## ✨ 프로젝트의 핵심 기능
**[실시간 1:N 통신]**
|경매방입장, 인원변동|경매 타이머 시작|
|:--:|:--:|
|![경매방입장](https://github.com/mju-Sharper/under-draw/assets/81777778/875cd03e-4584-4123-8772-1fa6fa989fe6)|![경매타이머시작](https://github.com/mju-Sharper/under-draw/assets/81777778/13be4535-df46-45f6-97c7-1910b3f8af4f)|

|경매중 채팅|시간 종료를 통한 경매품 자동 낙찰|
|:--:|:--:|
|![경매중채팅](https://github.com/mju-Sharper/under-draw/assets/81777778/0c16a80f-7285-419d-9522-6ef6ad07f8b9)|![시간종료낙찰](https://github.com/mju-Sharper/under-draw/assets/81777778/2262029e-89ef-4a70-bb2d-40ba55b67880)|

|경매 재시작|admin의 stop버튼을 통한 경매품 낙찰|
|:--:|:--:|
|![경매재시작](https://github.com/mju-Sharper/under-draw/assets/81777778/efadfde2-e99d-41bf-ab0f-a70f16bd7c34)|![stop낙찰](https://github.com/mju-Sharper/under-draw/assets/81777778/bd47068f-f1d0-47e5-8f93-c003338b7681)|
