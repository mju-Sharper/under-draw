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
- 추후 수정 요망

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
