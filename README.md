# 이재우 포트폴리오

프로젝트, CTF, 논문, 교육사항, 활동과 자격을 정리한 홈페이지입니다.

- [홈페이지](https://mps0927.github.io/)
- [GitHub 저장소](https://github.com/mps0927/mps0927.github.io)

## 구성과 수정

- `index.html`: 소개, UDS·AI 프로젝트, CTF, 논문, 교육사항, 활동·자격
- `styles.css`: 색상, 글꼴과 배치
- `app.js`: 이메일 복사와 이력 인쇄
- `favicon.svg`: 사이트 아이콘

교육과 이력, 프로젝트 설명은 `index.html`에서 수정합니다. 학력에는 단국대학교 소프트웨어학과와 학점 3.96/4.5를 기재했습니다. 교육 참여를 수료로 표현하지 않습니다.

## 로컬 미리보기

`index.html`을 브라우저로 열면 됩니다. 로컬 서버가 필요하면 이 폴더에서 다음 명령을 실행하고 [localhost:8000](http://localhost:8000/)을 엽니다.

```powershell
python -m http.server 8000
```

종료하려면 `Ctrl+C`를 누릅니다. 별도 빌드는 필요하지 않습니다.

## GitHub Pages 배포

현재 공개 배포되어 있습니다. GitHub 기본 Pages 설정은 **Settings → Pages → Source: Deploy from a branch → main / (root)**입니다.

`main` 브랜치에 변경사항을 올리면 홈페이지에 자동 반영됩니다. 별도 배포 워크플로는 사용하지 않습니다.
