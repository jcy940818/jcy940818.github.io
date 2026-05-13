
// ── 로딩 화면 ──────────────────────────────────────────────────────────────
const minDuration = 1000;         // 최소 유지 시간 (ms)
const fadeOut = 800;              // 페이드 아웃 시간 (ms)
const enableMoonZoom = true;      // 로딩 완료 시 달 확대 전환
const moonZoomScale = '3';        // 확대 배율
const moonZoomSpeed = '1.5s';     // 확대 속도
const moonZoomEasing = 'cubic-bezier(0.4, 0, 0.2, 1)'; // 이징 함수

// ── 배경 효과 ──────────────────────────────────────────────────────────────
const enableNebula = false;        // 성운
const enableAurora = false;        // 오로라
const auroraColor1 = '0, 200, 150';   // 오로라 색상 1 (R,G,B) — 초록
const auroraColor2 = '0, 100, 200';   // 오로라 색상 2 (R,G,B) — 파랑
const auroraColor3 = '80, 0, 180';    // 오로라 색상 3 (R,G,B) — 보라
const auroraOpacity1 = '0.3';         // 색상 1 투명도
const auroraOpacity2 = '0.2';         // 색상 2 투명도
const auroraOpacity3 = '0.15';        // 색상 3 투명도
const auroraBaseOpacity = '0.07';     // 전체 기본 투명도
const auroraBlur = '40px';            // 블러 강도
const auroraHeight = '40%';           // 높이
const auroraSpeed = '8s';             // 맥동 속도
const auroraSwayRange = '5%';         // 좌우 흔들림 범위

// ── 별 ─────────────────────────────────────────────────────────────────────
const enableStars = true;         // ON/OFF
const starCount = 100;            // 개수
const starSpeedMin = 2;           // 반짝이는 속도 최소 (s)
const starSpeedRange = 4;         // 반짝이는 속도 범위 (s)
const enableConstellations = false;   // 별자리 연결선 ON/OFF
const constellationCount = 4;        // 별자리 개수
const constellationStarsMin = 3;     // 별자리당 최소 별 수
const constellationStarsMax = 6;     // 별자리당 최대 별 수
const constellationLineColor = '245,243,206'; // 연결선 색상 (R,G,B)
const constellationLineOpacity = '0.15';      // 연결선 밝기 (0~1)
const constellationLineWidth = '0.5';         // 연결선 두께 (px)
const constellationFadeSpeed = '4s';          // 페이드인/아웃 주기

// ── 유성 ───────────────────────────────────────────────────────────────────
const enableShootingStars = true; // ON/OFF
const shootingStarCount = 20;     // 개수
const shootingStarSpeed = '6s';   // 낙하 주기
const shootDistance = '500px';    // 이동 거리

// ── 떠다니는 먼지 입자 ────────────────────────────────────────────────────
const enableParticles = true;     // ON/OFF
const particleCount = 20;         // 개수
const particleSpeedMin = 8;       // 상승 속도 최소 (s)
const particleSpeedRange = 12;    // 상승 속도 범위 (s)

// ── 구름/안개 레이어 ──────────────────────────────────────────────────────
const enableClouds = false;       // ON/OFF
const cloudCount = 3;             // 구름 개수
const cloudOpacity = '0.3';      // 불투명도 (0~1)
const cloudSpeedMin = 30;         // 이동 속도 최소 (s)
const cloudSpeedRange = 20;       // 이동 속도 범위 (s)
const cloudBlur = '30px';         // 흐림 정도

// ── 달 ─────────────────────────────────────────────────────────────────────
const moonSize = '300px';         // 크기
const enableMoonGlow = true;      // 안개(glow) ON/OFF
const moonGlowGap = '0px';       // 안개 시작 지점 (달 표면으로부터의 거리)
const moonGlowRange = '0px';     // 안개 퍼짐 범위 (0px = 기본, 양수 = 넓게, 음수 = 좁게)
const enableMoonSpin = true;      // 자전 ON/OFF
const moonSpinSpeed = '30s';      // 자전 속도 (클수록 느림)
const moonTilt = '30deg';          // 기울어짐 각도 (randomMoonTilt = false 일 때 사용)
const randomMoonTilt = false;      // 기울어짐 랜덤 여부
const enableMoonFloat = true;     // 부유 ON/OFF
const moonFloatSpeed = '6s';      // 부유 속도
const enableMoonRays = false;     // 달빛 광선 ON/OFF
const moonRaysOpacity = '0.12';   // 달빛 광선 밝기 (0~1)
const moonRaysSpeed = '30s';      // 달빛 광선 회전 속도
const enableMoonHalo = false;      // 달무리 ON/OFF
const moonHaloSize = '2.2';       // 달무리 크기 (달 대비 배율)
const moonHaloOpacity = '0.12';   // 달무리 밝기 (0~1)
const moonHaloColor = '200,220,255'; // 달무리 색상 (R,G,B)
const moonHaloBlur = '20px';      // 달무리 흐림
const moonHaloPulseSpeed = '6s';  // 달무리 맥동 속도

// ── 파동 링 ────────────────────────────────────────────────────────────────
const enablePulseRings = true;    // ON/OFF
const pulseStart = '1';           // 시작 배율 (1 = 달 크기, 1.5 = 달의 1.5배에서 시작)
const pulseScale = '3';           // 확산 배율 (1 = 달 크기, 3 = 3배까지)
const pulseSpeed = '4s';          // 확산 속도

// ── 궤도 ───────────────────────────────────────────────────────────────────
const enableOrbits = true;         // ON/OFF
const orbitSize1 = '400px';        // 궤도 1 크기
const orbitSize2 = '450px';        // 궤도 2 크기
const orbitSize3 = '480px';        // 궤도 3 크기
const orbitSize4 = '500px';        // 궤도 4 크기
const orbitSpeed1 = '20s';         // 궤도 1 회전 속도
const orbitSpeed2 = '20s';         // 궤도 2 회전 속도
const orbitSpeed3 = '20s';         // 궤도 3 회전 속도
const orbitSpeed4 = '20s';         // 궤도 4 회전 속도
const orbitReverse1 = false;       // 궤도 1 역방향
const orbitReverse2 = true;        // 궤도 2 역방향
const orbitReverse3 = false;       // 궤도 3 역방향
const orbitReverse4 = true;        // 궤도 4 역방향
// 궤도 위성
const orbitDotSize1 = '8px';      // 위성 1 크기
const orbitDotSize2 = '8px';      // 위성 2 크기
const orbitDotSize3 = '8px';      // 위성 3 크기
const orbitDotSize4 = '8px';      // 위성 4 크기
const orbitDotColor1 = '245,243,206';  // 위성 1 색상 MOON
const orbitDotColor2 = '255,160,130';  // 위성 2 색상 RED
const orbitDotColor3 = '130,170,255';  // 위성 3 색상 BLUE
const orbitDotColor4 = '160,255,200';  // 위성 4 색상 GREEN
const orbitDotOpacity1 = '1.0';   // 위성 1 밝기 (0~1)
const orbitDotOpacity2 = '1.0';   // 위성 2 밝기 (0~1)
const orbitDotOpacity3 = '1.0';   // 위성 3 밝기 (0~1)
const orbitDotOpacity4 = '1.0';   // 위성 4 밝기 (0~1)
const orbitGlowSize1 = '30px';    // 위성 1 glow 범위
const orbitGlowSize2 = '30px';    // 위성 2 glow 범위
const orbitGlowSize3 = '30px';    // 위성 3 glow 범위
const orbitGlowSize4 = '30px';    // 위성 4 glow 범위

// ── 타이틀 ─────────────────────────────────────────────────────────────────
const titleGap = '50px';          // 달과 타이틀 간격
const titleSize = '50px';         // 글자 크기
const titleWeight = '300';        // 글자 굵기 (100~900)
const titleSpacing = '15px';      // 글자간 간격
const titleFadeIn = '1.0s';       // 페이드인 시간
const titleFadeDelay = '0.2s';    // 페이드인 딜레이
const titleRevealScale = '1.5';   // 등장 시 가로 확대 배율 (1 = 효과 없음)
const enableTitleGlow = true;    // glow ON/OFF
const titleGlowSize = '5px';     // glow 퍼짐 범위
const titleGlowOpacity = '0.8';  // glow 밝기 (0~1)

// ── 로딩 바 + 진행률 ──────────────────────────────────────────────────────
const barGap = '10px';            // 타이틀과 로딩바 간격
const barWidth = '300px';         // 너비
const barHeight = '3px';          // 두께
const barSlideSpeed = '3.0s';     // 빛줄기 속도 (슬라이드 모드)
const barFadeIn = '0.6s';         // 페이드인 시간
const barFadeDelay = '0.5s';      // 페이드인 딜레이
const enableRealProgress = false;     // 실제 진행률 표시 (false = 기존 슬라이드 애니메이션)
const progressSpeed = '0.4s';        // 진행률 바 전환 속도
const enableProgressPercent = false;  // 퍼센테이지 숫자 표시
const enableStageText = false;        // 로딩 단계 텍스트 표시
const enableProgressGradient = false; // 퍼센테이지/단계 텍스트 골드 그라데이션
const stageTextSize = '12px';        // 단계 텍스트 크기
const stageTextGap = '12px';         // 로딩바와 텍스트 간격
const stageTextOpacity = '0.5';      // 단계 텍스트 밝기 (0~1, 그라데이션 OFF 시)
const stageTexts = {                 // 단계별 텍스트 (커스터마이징 가능)
  loading: '리소스 로딩 중...',
  initializing: '엔진 초기화 중...',
  ready: '시작하는 중...',
  complete: ''
};

//────────────────────────────────────────────────────────────────────────────────────

// CSS 변수 주입
const root = document.documentElement.style;
root.setProperty('--fade-out', (fadeOut / 1000) + 's');
root.setProperty('--moon-size', moonSize);
root.setProperty('--moon-glow-gap', moonGlowGap);
root.setProperty('--moon-glow-range', moonGlowRange);
root.setProperty('--moon-float-speed', moonFloatSpeed);
root.setProperty('--moon-spin-speed', moonSpinSpeed);
root.setProperty('--moon-halo-size', 'calc(var(--moon-size) * ' + moonHaloSize + ')');
root.setProperty('--moon-halo-opacity', moonHaloOpacity);
root.setProperty('--moon-halo-color', moonHaloColor);
root.setProperty('--moon-halo-blur', moonHaloBlur);
root.setProperty('--moon-halo-pulse-speed', moonHaloPulseSpeed);
root.setProperty('--moon-rays-opacity', moonRaysOpacity);
root.setProperty('--moon-rays-speed', moonRaysSpeed);
root.setProperty('--pulse-start', pulseStart);
root.setProperty('--pulse-scale', pulseScale);
root.setProperty('--pulse-speed', pulseSpeed);
root.setProperty('--orbit-size-1', orbitSize1);
root.setProperty('--orbit-size-2', orbitSize2);
root.setProperty('--orbit-size-3', orbitSize3);
root.setProperty('--orbit-size-4', orbitSize4);
root.setProperty('--orbit-dot-1', orbitDotSize1);
root.setProperty('--orbit-dot-2', orbitDotSize2);
root.setProperty('--orbit-dot-3', orbitDotSize3);
root.setProperty('--orbit-dot-4', orbitDotSize4);
root.setProperty('--orbit-dot-color-1', orbitDotColor1);
root.setProperty('--orbit-dot-color-2', orbitDotColor2);
root.setProperty('--orbit-dot-color-3', orbitDotColor3);
root.setProperty('--orbit-dot-color-4', orbitDotColor4);
root.setProperty('--orbit-dot-opacity-1', orbitDotOpacity1);
root.setProperty('--orbit-dot-opacity-2', orbitDotOpacity2);
root.setProperty('--orbit-dot-opacity-3', orbitDotOpacity3);
root.setProperty('--orbit-dot-opacity-4', orbitDotOpacity4);
root.setProperty('--orbit-glow-1', orbitGlowSize1);
root.setProperty('--orbit-glow-2', orbitGlowSize2);
root.setProperty('--orbit-glow-3', orbitGlowSize3);
root.setProperty('--orbit-glow-4', orbitGlowSize4);
root.setProperty('--orbit-speed-1', orbitSpeed1);
root.setProperty('--orbit-speed-2', orbitSpeed2);
root.setProperty('--orbit-speed-3', orbitSpeed3);
root.setProperty('--orbit-speed-4', orbitSpeed4);
root.setProperty('--orbit-dir-1', orbitReverse1 ? 'reverse' : 'normal');
root.setProperty('--orbit-dir-2', orbitReverse2 ? 'reverse' : 'normal');
root.setProperty('--orbit-dir-3', orbitReverse3 ? 'reverse' : 'normal');
root.setProperty('--orbit-dir-4', orbitReverse4 ? 'reverse' : 'normal');
root.setProperty('--constellation-line-color', constellationLineColor);
root.setProperty('--constellation-line-opacity', constellationLineOpacity);
root.setProperty('--constellation-line-width', constellationLineWidth);
root.setProperty('--constellation-fade-speed', constellationFadeSpeed);
root.setProperty('--aurora-color1', auroraColor1);
root.setProperty('--aurora-color2', auroraColor2);
root.setProperty('--aurora-color3', auroraColor3);
root.setProperty('--aurora-opacity1', auroraOpacity1);
root.setProperty('--aurora-opacity2', auroraOpacity2);
root.setProperty('--aurora-opacity3', auroraOpacity3);
root.setProperty('--aurora-base-opacity', auroraBaseOpacity);
root.setProperty('--aurora-blur', auroraBlur);
root.setProperty('--aurora-height', auroraHeight);
root.setProperty('--aurora-speed', auroraSpeed);
root.setProperty('--aurora-sway', auroraSwayRange);
root.setProperty('--shoot-speed', shootingStarSpeed);
root.setProperty('--shoot-distance', shootDistance);
root.setProperty('--cloud-opacity', cloudOpacity);
root.setProperty('--cloud-blur', cloudBlur);
root.setProperty('--title-gap', titleGap);
root.setProperty('--title-size', titleSize);
root.setProperty('--title-weight', titleWeight);
root.setProperty('--title-spacing', titleSpacing);
root.setProperty('--title-fade-in', titleFadeIn);
root.setProperty('--title-fade-delay', titleFadeDelay);
root.setProperty('--title-reveal-scale', titleRevealScale);
root.setProperty('--title-glow', enableTitleGlow
  ? 'drop-shadow(0 0 ' + titleGlowSize + ' rgba(212, 160, 86, ' + titleGlowOpacity + '))'
  : 'none');
root.setProperty('--bar-gap', barGap);
root.setProperty('--bar-width', barWidth);
root.setProperty('--bar-height', barHeight);
root.setProperty('--bar-slide-speed', barSlideSpeed);
root.setProperty('--bar-fade-in', barFadeIn);
root.setProperty('--bar-fade-delay', barFadeDelay);
root.setProperty('--progress-speed', progressSpeed);
root.setProperty('--stage-text-size', stageTextSize);
root.setProperty('--stage-text-gap', stageTextGap);
root.setProperty('--stage-text-opacity', stageTextOpacity);

const loadingStart = Date.now();
const loading = document.getElementById('loading');

// CSS-only 요소 ON/OFF
if (!enableNebula) document.querySelector('.nebula').remove();
if (!enableAurora) document.querySelector('.aurora').remove();
if (!enableMoonRays) document.querySelector('.moon-rays').remove();
if (!enableMoonHalo) document.querySelector('.moon-halo').remove();
if (!enableMoonFloat) document.querySelector('.moon-float').style.animation = 'none';
if (!enableMoonSpin) {
  var tilt = randomMoonTilt ? (Math.random() * 360) + 'deg' : moonTilt;
  document.querySelector('.moon').style.animation = 'none';
  document.querySelector('.moon').style.transform = 'rotate(' + tilt + ')';
} else if (randomMoonTilt) {
  document.querySelector('.moon').style.animationDelay = -(Math.random() * parseFloat(moonSpinSpeed)) + 's';
} else {
  var tiltSec = (parseFloat(moonTilt) / 360) * parseFloat(moonSpinSpeed);
  document.querySelector('.moon').style.animationDelay = -tiltSec + 's';
}
if (!enableMoonGlow) document.querySelector('.moon').classList.add('no-glow');
if (!enableStars) document.querySelector('.stars').remove();
if (!enablePulseRings) document.querySelectorAll('.pulse-ring').forEach(el => el.remove());
if (!enableOrbits) document.querySelectorAll('.orbit').forEach(el => el.remove());

// 궤도 시작 위치 랜덤화
document.querySelectorAll('.orbit').forEach(function(el) {
  var idx = el.classList.contains('orbit-1') ? 1 : el.classList.contains('orbit-2') ? 2 : el.classList.contains('orbit-3') ? 3 : 4;
  var speed = parseFloat(idx === 1 ? orbitSpeed1 : idx === 2 ? orbitSpeed2 : idx === 3 ? orbitSpeed3 : orbitSpeed4) || 6;
  el.style.animationDelay = -(Math.random() * speed) + 's';
});

// 별 생성 (크기, 색상 다양화)
if (enableStars) {
  const stars = document.getElementById('stars');
  const starColors = ['#ffffff', '#ffe8c0', '#c0d0ff', '#ffd0d0'];
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const sizeRand = Math.random();
    const size = sizeRand < 0.15 ? 3 : sizeRand < 0.4 ? 2 : 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.background = starColors[Math.floor(Math.random() * starColors.length)];
    star.style.animationDelay = Math.random() * (starSpeedMin + starSpeedRange) + 's';
    star.style.animationDuration = (starSpeedMin + Math.random() * starSpeedRange) + 's';
    stars.appendChild(star);
  }
}

// 별자리 연결선 생성
if (enableStars && enableConstellations) {
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'constellations');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  document.getElementById('stars').appendChild(svg);

  // 별 위치 수집
  var starEls = document.querySelectorAll('.star');
  var starPositions = [];
  for (var s = 0; s < starEls.length; s++) {
    starPositions.push({
      x: parseFloat(starEls[s].style.left),
      y: parseFloat(starEls[s].style.top)
    });
  }

  // 사용된 별 인덱스 추적 (별자리 간 겹침 방지)
  var usedStars = {};

  for (var c = 0; c < constellationCount; c++) {
    // 별자리 중심점 랜덤 (화면 가장자리 15% 제외)
    var cx = 15 + Math.random() * 70;
    var cy = 15 + Math.random() * 70;
    var radius = 8 + Math.random() * 7; // 별자리 반경 (%)

    // 중심 근처 별 찾기
    var nearby = [];
    for (var s = 0; s < starPositions.length; s++) {
      if (usedStars[s]) continue;
      var dx = starPositions[s].x - cx;
      var dy = starPositions[s].y - cy;
      if (Math.sqrt(dx * dx + dy * dy) < radius) {
        nearby.push({ idx: s, x: starPositions[s].x, y: starPositions[s].y });
      }
    }

    var count = constellationStarsMin + Math.floor(Math.random() * (constellationStarsMax - constellationStarsMin + 1));
    if (nearby.length < constellationStarsMin) continue;
    nearby = nearby.slice(0, count);

    // 사용 표시
    for (var n = 0; n < nearby.length; n++) usedStars[nearby[n].idx] = true;

    // 별들을 연결 (최근접 이웃 방식으로 경로 생성)
    var visited = [0];
    var remaining = [];
    for (var n = 1; n < nearby.length; n++) remaining.push(n);

    var group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.setAttribute('class', 'constellation');
    group.style.animationDelay = (Math.random() * parseFloat(constellationFadeSpeed)) + 's';

    while (remaining.length > 0) {
      var last = visited[visited.length - 1];
      var bestDist = Infinity;
      var bestIdx = -1;
      for (var r2 = 0; r2 < remaining.length; r2++) {
        var dx = nearby[remaining[r2]].x - nearby[last].x;
        var dy = nearby[remaining[r2]].y - nearby[last].y;
        var d = dx * dx + dy * dy;
        if (d < bestDist) { bestDist = d; bestIdx = r2; }
      }
      var next = remaining[bestIdx];
      remaining.splice(bestIdx, 1);
      visited.push(next);

      var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', nearby[last].x + '%');
      line.setAttribute('y1', nearby[last].y + '%');
      line.setAttribute('x2', nearby[next].x + '%');
      line.setAttribute('y2', nearby[next].y + '%');
      group.appendChild(line);
    }
    svg.appendChild(group);
  }
}

// 떠다니는 먼지 입자 생성
if (enableParticles) {
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = 1 + Math.random() * 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.bottom = -(Math.random() * 20) + '%';
    particle.style.background = 'rgba(245, 243, 206, ' + (0.1 + Math.random() * 0.2) + ')';
    particle.style.animationDuration = (particleSpeedMin + Math.random() * particleSpeedRange) + 's';
    particle.style.animationDelay = Math.random() * particleSpeedMin + 's';
    loading.appendChild(particle);
  }
}

// 유성 생성
if (enableShootingStars) {
  const shootSpeed = parseFloat(shootingStarSpeed) || 6;
  for (let i = 0; i < shootingStarCount; i++) {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.top = (3 + Math.random() * 40) + '%';
    star.style.left = (50 + Math.random() * 45) + '%';
    star.style.width = (40 + Math.random() * 60) + 'px';
    star.style.animationDelay = (Math.random() * shootSpeed * 2) + 's';
    loading.appendChild(star);
  }
}

// 구름/안개 레이어 생성
if (enableClouds) {
  for (let i = 0; i < cloudCount; i++) {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.style.top = (20 + Math.random() * 50) + '%';
    cloud.style.animationDuration = (cloudSpeedMin + Math.random() * cloudSpeedRange) + 's';
    cloud.style.animationDelay = -(Math.random() * cloudSpeedMin) + 's';
    // 구름 크기/높이 랜덤화
    var w = 600 + Math.random() * 400;
    var h = 80 + Math.random() * 120;
    cloud.style.width = w + 'px';
    cloud.style.height = h + 'px';
    loading.appendChild(cloud);
  }
}

// 실제 로딩 진행률 시스템
const _loadingBar = document.querySelector('.loading-bar');
let _stageTextEl = null;
let _percentEl = null;

if (enableRealProgress) {
  // 슬라이드 애니메이션 → 실제 진행률 모드로 전환
  _loadingBar.classList.add('real-progress');
  _loadingBar.style.width = '0%';
}

if (enableProgressPercent) {
  _percentEl = document.createElement('div');
  _percentEl.className = 'progress-percent' + (enableProgressGradient ? '' : ' no-gradient');
  _percentEl.textContent = '0%';
  document.querySelector('.title-group').appendChild(_percentEl);
}

if (enableStageText) {
  _stageTextEl = document.createElement('div');
  _stageTextEl.className = 'stage-text' + (enableProgressGradient ? '' : ' no-gradient');
  _stageTextEl.textContent = enableRealProgress ? stageTexts.loading : '';
  document.querySelector('.title-group').appendChild(_stageTextEl);
}

// 진행률 업데이트 (외부에서 호출)
function updateProgress(percent, stageKey) {
  var p = Math.min(100, Math.max(0, percent));
  if (enableRealProgress && _loadingBar) {
    _loadingBar.style.width = p + '%';
  }
  if (enableProgressPercent && _percentEl) {
    _percentEl.textContent = Math.round(p) + '%';
  }
  if (enableStageText && _stageTextEl && stageKey && stageTexts[stageKey] !== undefined) {
    _stageTextEl.textContent = stageTexts[stageKey];
  }
}

// 로딩 화면 페이드 아웃 (최소 유지 시간 보장)
function dismissLoading() {
  const elapsed = Date.now() - loadingStart;
  const remaining = Math.max(0, minDuration - elapsed);

  setTimeout(() => {
    const el = document.getElementById('loading');
    if (!el) return;

    if (enableMoonZoom) {
      // 달 이외 요소 페이드 아웃
      el.querySelectorAll('.nebula, .aurora, .stars, .title-group, .shooting-star, .particle, .cloud').forEach(function(child) {
        child.style.transition = 'opacity 0.4s ease-out';
        child.style.opacity = '0';
      });
      // 파동 링, 궤도, 달빛 광선, 달무리도 숨김
      el.querySelectorAll('.pulse-ring, .orbit, .moon-rays, .moon-halo').forEach(function(child) {
        child.style.transition = 'opacity 0.4s ease-out';
        child.style.opacity = '0';
      });

      // 달 확대 시작
      var moonFloat = el.querySelector('.moon-float');
      var moonWrapper = el.querySelector('.moon-wrapper');
      var moon = el.querySelector('.moon');
      var zoomMs = parseFloat(moonZoomSpeed) * 1000 || 1500;
      if (moonFloat) moonFloat.style.animation = 'none';
      if (moonWrapper) {
        moonWrapper.style.transition = 'transform ' + zoomMs + 'ms ' + moonZoomEasing + ', opacity ' + zoomMs + 'ms ease-out';
        moonWrapper.style.transform = 'scale(' + moonZoomScale + ')';
        // 확대 후반부에 달도 함께 투명해짐
        setTimeout(function() {
          moonWrapper.style.opacity = '0';
        }, zoomMs * 0.3);
      }
      // 달 glow 숨김 (확대 시 너무 커짐)
      if (moon) moon.classList.add('no-glow');

      // 전체 배경도 함께 페이드 아웃
      setTimeout(function() {
        el.style.transition = 'opacity ' + (zoomMs * 0.4) + 'ms ease-out';
        el.style.opacity = '0';
        setTimeout(function() { if (el.parentNode) el.remove(); }, zoomMs * 0.4);
      }, zoomMs * 0.6);
    } else {
      // 기존 페이드 아웃
      var transitionMs = parseFloat(getComputedStyle(el).transitionDuration) * 1000 || fadeOut;
      el.classList.add('fade-out');
      setTimeout(function() { if (el.parentNode) el.remove(); }, transitionMs);
    }
  }, remaining);
}
