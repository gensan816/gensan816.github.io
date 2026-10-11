# 포트폴리오 빠른 수정 안내

코드 편집기 설치 없이 GitHub 웹에서 바로 수정 가능.

## 가장 쉬운 방법

1. [index.html 바로 수정](https://github.com/mps0927/mps0927.github.io/edit/main/index.html)을 연다.
2. GitHub 계정으로 로그인한다.
3. `Ctrl + F`로 바꿀 항목의 제목을 찾는다.
4. 제목 아래 `<li>` 안의 문장만 원하는 내용으로 바꾼다.
5. **Commit changes**를 눌러 저장한다.
6. 배포 완료 후 [포트폴리오](https://mps0927.github.io/)에서 새로고침한다. 보통 1~2분 소요.

## 찾을 문구

| 수정 대상 | `Ctrl + F` 검색어 |
| --- | --- |
| 상단 관심 분야 | `보안 분석과 자동화에 AI` |
| UDS Fuzzer | `차량용 UDS Fuzzer 개발` |
| 조향 피드백 프로젝트 | `Steer-by-Wire 조향 피드백 검증` |
| AI·Agent 연구 | `임보디드 AI·Agent 공격 연구` |
| CTF 성과 | `LISAthon (리사톤)` |
| 논문 | `실차 환경 UDS 퍼징` |
| 학점 | `3.96 / 4.5` |
| BoB | `Best of the Best 15기` |
| 모비우스 교육 | `모비우스 SW 부트캠프 1기` |
| IoT 교육 | `IoT 보안인증 심화교육` |
| WhiteHat School | `WhiteHat School 3기</h4>` |

## 한 줄 수정·추가

`<li>` 하나가 화면의 `-` 한 줄에 해당. 앞의 `-`는 자동 표시.

예를 들어 다음 줄에서 `CAN 데이터 분석.` 부분만 변경.

```html
<li><strong>역할</strong> CAN 데이터 분석.</li>
```

같은 항목에 한 줄을 추가하려면 옆의 `<li>...</li>` 줄을 복사한 뒤 문구 변경.

```html
<li><strong>도구</strong> Python, python-can, can-isotp.</li>
<li><strong>방법론</strong> TARA 기반 위협·위험 분석.</li>
```

## 편집할 때

- `<li>`, `</li>`, `<strong>` 같은 태그는 유지.
- `href=`, `class=`, `id=` 값은 유지.
- 이력 문장은 짧은 명사형으로 작성. 예: `CAN 데이터 분석.`, `AUTOSAR Classic 학습.`
- 새 프로젝트는 기존 `<article class="project">`부터 해당 `</article>`까지 복사해서 추가.
- 저장한 내용이 아직 보이지 않으면 [배포 상태](https://github.com/mps0927/mps0927.github.io/actions) 확인 후 새로고침.
