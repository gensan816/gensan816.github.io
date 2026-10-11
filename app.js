'use strict';

const projectNotes = {
  uds: {
    title: 'UDS Fuzzer & 다층적 Fail Detection',
    meta: '2025 · WhiteHat School 3기 · 팀 프로젝트',
    overview: '실차 ECU 내부를 직접 관찰하기 어려운 환경에서 CAN·UDS 통신과 진단 응답을 활용해 이상을 판단하는 차량 보안 프로젝트입니다.',
    role: ['CAN ID–ECU–차량 기능 매핑 및 통신 분석', 'UDS 퍼징 Workflow 설계', 'DTC 응답에 따른 다층적 Fail Detection 수준 구분 아이디어 제안·설계'],
    context: 'Python, python-can, can-isotp를 사용했습니다. TARA를 통해 차량의 위협과 위험을 검토하는 경험도 쌓았습니다.',
    result: '연구는 「실차 환경 UDS 퍼징을 위한 DTC 기반 다층적 Fail Detection 기법」으로 한국자동차공학회 2026 춘계학술대회 논문집에 수록되었으며, 이재우는 공동저자로 참여했습니다.',
    link: 'https://ksae.org/journal_list/search_index.php?mode=view&sid=59409',
    linkText: '한국자동차공학회 논문 보기 ↗'
  },
  agent: {
    title: '임보디드 AI Safety Filter',
    meta: '2026 · BoB 15기 보안컨설팅 · 진행 중',
    overview: '장면을 해석한 AI가 계획을 세우고 행동을 실행하는 과정에서, 허용된 작업 범위와 안전 조건을 점검하는 필터 솔루션을 연구하고 있습니다.',
    role: ['팀 프로젝트에서 안전 필터 제작 담당', '계획·행동 단계의 검사 기준과 Gate 설계', '필터 동작을 검토하고 평가하는 연구 진행'],
    context: 'BoB 15기 보안컨설팅 트랙에서 진행하는 임보디드 AI·Agent 필터 솔루션 프로젝트입니다.',
    result: '현재 설계·구현·검증을 진행하고 있습니다. 연구 결과와 공개 가능한 산출물은 검증이 마무리되는 대로 정리할 예정입니다.'
  },
  sdv: {
    title: 'SDV ECU 통합·검증 PBL',
    meta: '2025.09–2026.03 · 모비우스 SW 부트캠프 1기',
    overview: '현대모비스·멋쟁이사자처럼의 모비우스 SW 부트캠프에서 차량 소프트웨어와 ECU의 구성·통합·검증을 학습했습니다.',
    role: ['AUTOSAR Classic 기반 SDV ECU 구성·통합·검증 학습', 'Steer-by-Wire 조향 피드백·고속 통신 PBL 참여'],
    context: '차량 통신과 보안을 이해하는 데 필요한 소프트웨어 구조와 검증 과정을 교육 프로젝트로 경험했습니다.',
    result: '교육 과정에서 다룬 기술과 프로젝트 주제를 정리한 항목입니다.'
  }
};

const themeToggle = document.getElementById('theme-toggle');
function setTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', isDark ? '밝은 테마로 전환' : '어두운 테마로 전환');
  document.querySelector('meta[name="theme-color"]').setAttribute('content', isDark ? '#17211b' : '#f5f6f0');
}
try { setTheme(localStorage.getItem('portfolio-theme') === 'dark'); } catch (_) { /* Private browsers can disable storage. */ }
themeToggle.addEventListener('click', () => {
  const isDark = !document.body.classList.contains('dark');
  setTheme(isDark);
  try { localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light'); } catch (_) { /* Theme works without persistence. */ }
});

const projects = [...document.querySelectorAll('.project')];
const filters = [...document.querySelectorAll('[data-filter]')];
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  let count = 0;
  projects.forEach(project => {
    project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter;
    if (!project.hidden) count++;
  });
  document.getElementById('filter-status').textContent = `${button.textContent} 프로젝트 ${count}개`;
}));

const dialog = document.getElementById('project-dialog');
const dialogContent = document.getElementById('dialog-content');
let dialogOpener;
function appendText(tag, text, className) {
  const element = document.createElement(tag);
  element.textContent = text;
  if (className) element.className = className;
  dialogContent.append(element);
  return element;
}
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const note = projectNotes[button.dataset.project];
  dialogOpener = button;
  dialogContent.replaceChildren();
  appendText('h2', note.title).id = 'dialog-title';
  appendText('p', note.meta, 'dialog-meta');
  appendText('p', note.overview);
  appendText('h3', button.dataset.project === 'sdv' ? '교육에서 다룬 내용' : '내가 맡은 일');
  const list = document.createElement('ul');
  note.role.forEach(role => { const item = document.createElement('li'); item.textContent = role; list.append(item); });
  dialogContent.append(list);
  appendText('h3', '프로젝트 맥락');
  appendText('p', note.context);
  appendText('h3', button.dataset.project === 'agent' ? '현재 상태' : '연구·경험 기록');
  appendText('p', note.result);
  if (note.link) {
    const link = appendText('a', note.linkText, 'dialog-link');
    link.href = note.link; link.target = '_blank'; link.rel = 'noopener noreferrer';
  }
  dialog.showModal();
  document.body.style.overflow = 'hidden';
}));
document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => { document.body.style.overflow = ''; dialogOpener?.focus(); });

document.getElementById('copy-email').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText('mps0927@gmail.com');
    status.textContent = '이메일 주소를 복사했습니다.';
  } catch (_) {
    status.textContent = 'mps0927@gmail.com을 선택해 복사해주세요.';
  }
});
document.getElementById('print-summary').addEventListener('click', () => window.print());
document.getElementById('year').textContent = new Date().getFullYear();
