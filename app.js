'use strict';

document.getElementById('copy-email').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText('mps0927@gmail.com');
    status.textContent = '복사 완료';
  } catch (_) {
    status.textContent = '이메일 주소를 선택해 복사해주세요.';
  }
});

document.getElementById('print-summary').addEventListener('click', () => window.print());
document.getElementById('year').textContent = new Date().getFullYear();
