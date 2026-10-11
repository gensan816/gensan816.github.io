# 이재우 포트폴리오

차량 보안, 보안 컨설팅과 AI 보안 연구 경험을 소개하는 정적 포트폴리오입니다. GitHub Pages 주소는 [mps0927.github.io](https://mps0927.github.io/)입니다.

## 구성과 수정

- `index.html`: 자기소개, 교육, 활동과 기술 등 홈페이지 본문
- `styles.css`: 색상, 글꼴과 화면 배치
- `app.js`: 프로젝트 상세 내용과 화면 동작
- `favicon.svg`: 홈페이지 아이콘
- `.github/workflows/pages.yml`: GitHub Pages 배포 설정

교육과 이력은 `index.html`, 프로젝트 설명은 `app.js`에서 수정합니다. 증명서 원본, 개인정보와 비공개 연구 자료는 이 저장소에 추가하지 않습니다.

## 로컬 미리보기

`index.html`을 브라우저로 열면 확인할 수 있습니다. 로컬 서버가 필요하면 이 폴더에서 다음 명령을 실행한 후 [localhost:8000](http://localhost:8000/)을 엽니다.

```powershell
python -m http.server 8000
```

종료하려면 실행한 창에서 `Ctrl+C`를 누릅니다. 별도 설치나 빌드 과정은 없습니다.

## GitHub Pages 배포

1. `mps0927` 계정에 공개 저장소 `mps0927.github.io`를 만듭니다.
2. 이 폴더의 파일을 저장소의 `main` 브랜치에 올립니다.
3. 저장소 **Settings → Pages → Build and deployment → Source**에서 **GitHub Actions**를 선택합니다.
4. **Actions → Deploy portfolio to GitHub Pages** 실행이 완료되면 홈페이지를 확인합니다.

이후 `main` 브랜치 변경사항은 자동으로 배포됩니다. **Actions → Run workflow**로 수동 배포도 가능합니다. GitHub 인증이나 게시 권한이 없어도 이 소스로 로컬 미리보기를 사용할 수 있습니다.
