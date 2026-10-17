// ==========================================
// ỨNG DỤNG ÔN THI TRIẾT HỌC MÁC - LÊNIN (100 CÂU)
// ==========================================

// Global state
let questions = [];
let currentMode = 'practice'; // 'practice' | 'exam' | 'flashcard' | 'wrong' | 'search'
let practiceIndex = 0;
let practiceAnswers = {}; // { questionId: selectedText }
let starredQuestions = new Set();
let wrongQuestions = new Set();

// Exam State
let examConfig = { size: 20, timeMinutes: 20 };
let examQuestions = [];
let examIndex = 0;
let examAnswers = {}; // { questionId: selectedText }
let examFlags = new Set();
let examTimerInterval = null;
let examTimeRemaining = 0; // in seconds
let examTimeElapsed = 0;
let examResults = null;

// Flashcard State
let flashcardIndex = 0;
let flashcardList = [];

// Sound & Theme Settings
let soundEnabled = true;
let currentTheme = 'light';

// Audio Context for synthesized sound
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  return audioCtx;
}

function playSound(type) {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume();

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'correct') {
      // Pleasant two-tone chime
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'wrong') {
      // Gentle low tone
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.setValueAtTime(196, now + 0.12);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === 'click') {
      // Short click
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    }
  } catch (e) {
    // Ignore audio errors
  }
}

// Utility: Fisher-Yates Shuffle
function shuffleArray(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Initialize Application
function initApp() {
  // Load saved state from LocalStorage
  loadLocalStorage();

  // Initialize questions from RAW_QUESTIONS
  if (typeof RAW_QUESTIONS !== 'undefined' && Array.isArray(RAW_QUESTIONS)) {
    questions = RAW_QUESTIONS.map(q => ({
      ...q,
      // clone options so we can shuffle independently
      options: [...q.options]
    }));
  }

  flashcardList = [...questions];

  // Apply Theme
  applyTheme(currentTheme);

  // Setup sound UI
  updateSoundUI();

  // Render initial practice question
  renderPracticeQuestion();
  updatePracticeProgress();
  updateWrongCountBadge();

  // Keyboard navigation
  setupKeyboardShortcuts();
}

// LocalStorage helpers
function loadLocalStorage() {
  try {
    const savedTheme = localStorage.getItem('triet_theme');
    if (savedTheme) currentTheme = savedTheme;

    const savedSound = localStorage.getItem('triet_sound');
    if (savedSound !== null) soundEnabled = savedSound === 'true';

    const savedStarred = localStorage.getItem('triet_starred');
    if (savedStarred) starredQuestions = new Set(JSON.parse(savedStarred));

    const savedWrong = localStorage.getItem('triet_wrong');
    if (savedWrong) wrongQuestions = new Set(JSON.parse(savedWrong));

    const savedAnswers = localStorage.getItem('triet_practice_answers');
    if (savedAnswers) practiceAnswers = JSON.parse(savedAnswers);
  } catch (e) {
    console.error('LocalStorage error:', e);
  }
}

function saveLocalStorage() {
  try {
    localStorage.setItem('triet_theme', currentTheme);
    localStorage.setItem('triet_sound', soundEnabled);
    localStorage.setItem('triet_starred', JSON.stringify([...starredQuestions]));
    localStorage.setItem('triet_wrong', JSON.stringify([...wrongQuestions]));
    localStorage.setItem('triet_practice_answers', JSON.stringify(practiceAnswers));
  } catch (e) {
    console.error('LocalStorage save error:', e);
  }
}

// Mode Switcher
function switchMode(mode) {
  currentMode = mode;

  // Update tabs
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  const activeTab = document.getElementById(`tab-${mode}`);
  if (activeTab) activeTab.classList.add('active');

  // Hide all views
  document.querySelectorAll('.view-section').forEach(sec => sec.style.display = 'none');

  if (mode === 'practice') {
    document.getElementById('view-practice').style.display = 'block';
    renderPracticeQuestion();
    updatePracticeProgress();
  } else if (mode === 'exam') {
    document.getElementById('view-exam').style.display = 'block';
    renderExamQuestion();
  } else if (mode === 'flashcard') {
    document.getElementById('view-flashcard').style.display = 'block';
    renderFlashcard();
  } else if (mode === 'wrong') {
    document.getElementById('view-wrong').style.display = 'block';
    renderWrongQuestions();
  } else if (mode === 'search') {
    document.getElementById('view-search').style.display = 'block';
    renderSearchResults('');
  }
}

// ==========================================
// CHẾ ĐỘ LUYỆN TẬP (PRACTICE MODE)
// ==========================================

function renderPracticeQuestion() {
  if (!questions.length) return;
  const q = questions[practiceIndex];
  if (!q) return;

  // Set header
  document.getElementById('practice-q-index').textContent = `Câu ${practiceIndex + 1} / ${questions.length} (Gốc #${q.id})`;
  document.getElementById('practice-q-text').textContent = q.question;

  // Star status
  const starBtn = document.getElementById('btn-star');
  if (starredQuestions.has(q.id)) {
    starBtn.classList.add('starred');
  } else {
    starBtn.classList.remove('starred');
  }

  // Render options
  const container = document.getElementById('practice-options-container');
  container.innerHTML = '';

  const userAnswer = practiceAnswers[q.id];
  const isAnswered = userAnswer !== undefined;

  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((optText, idx) => {
    const letter = letters[idx];
    const item = document.createElement('div');
    item.className = 'option-item';
    if (isAnswered) item.classList.add('locked');

    const isThisCorrect = optText === q.correctAnswer;
    const isThisSelected = optText === userAnswer;

    if (isAnswered) {
      if (isThisCorrect) {
        item.classList.add('correct');
      } else if (isThisSelected && !isThisCorrect) {
        item.classList.add('wrong');
      }
    }

    item.innerHTML = `
      <span class="option-letter">${letter}</span>
      <span class="option-text">${optText}</span>
    `;

    if (!isAnswered) {
      item.onclick = () => selectPracticeAnswer(q.id, optText);
    }

    container.appendChild(item);
  });

  // Render feedback box
  const feedbackBox = document.getElementById('practice-feedback');
  const feedbackIcon = document.getElementById('feedback-icon');
  const feedbackText = document.getElementById('feedback-text');

  if (isAnswered) {
    feedbackBox.style.display = 'flex';
    const isCorrect = userAnswer === q.correctAnswer;
    if (isCorrect) {
      feedbackBox.className = 'feedback-box correct';
      feedbackIcon.textContent = '✅';
      feedbackText.innerHTML = `
        <strong>Chính xác!</strong>
        <span>Đáp án đúng: "${q.correctAnswer}"</span>
      `;
    } else {
      feedbackBox.className = 'feedback-box wrong';
      feedbackIcon.textContent = '❌';
      feedbackText.innerHTML = `
        <strong>Chưa chính xác!</strong>
        <span>Bạn chọn: "${userAnswer}"<br>Đáp án đúng là: <strong>"${q.correctAnswer}"</strong></span>
      `;
    }
  } else {
    feedbackBox.style.display = 'none';
  }

  // Update nav buttons
  document.getElementById('btn-prev').disabled = practiceIndex === 0;
  document.getElementById('btn-next').disabled = practiceIndex === questions.length - 1;

  // Update progress bar
  const progressPercent = ((practiceIndex + 1) / questions.length) * 100;
  document.getElementById('practice-progress-bar').style.width = `${progressPercent}%`;
}

function selectPracticeAnswer(questionId, selectedText) {
  const q = questions.find(item => item.id === questionId);
  if (!q) return;

  practiceAnswers[q.id] = selectedText;
  const isCorrect = selectedText === q.correctAnswer;

  if (isCorrect) {
    playSound('correct');
    // If previously marked wrong, remove from wrong list
    wrongQuestions.delete(q.id);
  } else {
    playSound('wrong');
    // Add to wrong questions list
    wrongQuestions.add(q.id);
  }

  saveLocalStorage();
  updatePracticeProgress();
  updateWrongCountBadge();
  renderPracticeQuestion();
}

function goToPrevQuestion() {
  if (practiceIndex > 0) {
    playSound('click');
    practiceIndex--;
    renderPracticeQuestion();
  }
}

function goToNextQuestion() {
  if (practiceIndex < questions.length - 1) {
    playSound('click');
    practiceIndex++;
    renderPracticeQuestion();
  }
}

function revealAnswer() {
  const q = questions[practiceIndex];
  if (!q) return;
  // If not answered yet, auto fill with wrong or reveal
  if (!practiceAnswers[q.id]) {
    practiceAnswers[q.id] = q.correctAnswer;
    playSound('correct');
    saveLocalStorage();
    updatePracticeProgress();
    renderPracticeQuestion();
  }
}

function toggleStarCurrentQuestion() {
  const q = questions[practiceIndex];
  if (!q) return;
  if (starredQuestions.has(q.id)) {
    starredQuestions.delete(q.id);
  } else {
    starredQuestions.add(q.id);
  }
  saveLocalStorage();
  renderPracticeQuestion();
}

function shuffleCurrentOptions() {
  playSound('click');
  // Re-shuffle options of ALL questions
  questions.forEach(q => {
    q.options = shuffleArray(q.options);
  });
  renderPracticeQuestion();
  alert('Đã xáo trộn lại toàn bộ các phương án A, B, C, D!');
}

function shuffleQuestionsOrder() {
  playSound('click');
  questions = shuffleArray(questions);
  practiceIndex = 0;
  renderPracticeQuestion();
  updatePracticeProgress();
  alert('Đã đảo ngẫu nhiên thứ tự 100 câu hỏi!');
}

function resetPracticeProgress() {
  if (confirm('Bạn có chắc muốn làm lại từ đầu? Tiến độ các câu đã trả lời sẽ được xóa.')) {
    practiceAnswers = {};
    practiceIndex = 0;
    saveLocalStorage();
    updatePracticeProgress();
    renderPracticeQuestion();
  }
}

function updatePracticeProgress() {
  const total = questions.length;
  const answeredCount = Object.keys(practiceAnswers).length;
  let correctCount = 0;

  questions.forEach(q => {
    if (practiceAnswers[q.id] === q.correctAnswer) {
      correctCount++;
    }
  });

  const percent = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  document.getElementById('practice-score-badge').textContent = `Đúng: ${correctCount}/${answeredCount} (${percent}%)`;
  document.getElementById('palette-progress-txt').textContent = `${answeredCount}/${total}`;
}

function updateWrongCountBadge() {
  const badge = document.getElementById('wrong-count-badge');
  if (badge) {
    badge.textContent = wrongQuestions.size;
  }
}

// ==========================================
// CHẾ ĐỘ THI THỬ (EXAM MODE)
// ==========================================

function openExamSetupModal() {
  playSound('click');
  document.getElementById('exam-setup-modal').classList.add('active');
}

function closeExamSetupModal() {
  document.getElementById('exam-setup-modal').classList.remove('active');
}

function selectExamConfig(size, timeMinutes, btnElem) {
  examConfig = { size, timeMinutes };
  document.querySelectorAll('.exam-size-opt').forEach(b => b.classList.remove('active'));
  btnElem.classList.add('active');
}

function startExam() {
  closeExamSetupModal();
  playSound('click');

  // Select questions: randomly sample `examConfig.size` questions from questions list
  const shuffledAll = shuffleArray(questions);
  examQuestions = shuffledAll.slice(0, examConfig.size).map(q => ({
    ...q,
    // also shuffle options
    options: shuffleArray(q.options)
  }));

  examIndex = 0;
  examAnswers = {};
  examFlags.clear();
  examTimeRemaining = examConfig.timeMinutes * 60;
  examTimeElapsed = 0;

  // Start timer interval
  if (examTimerInterval) clearInterval(examTimerInterval);
  examTimerInterval = setInterval(updateExamTimer, 1000);

  switchMode('exam');
  renderExamQuestion();
  updateExamTimerUI();
}

function updateExamTimer() {
  examTimeRemaining--;
  examTimeElapsed++;

  updateExamTimerUI();

  if (examTimeRemaining <= 0) {
    clearInterval(examTimerInterval);
    alert('Hết giờ làm bài! Hệ thống đang tự động nộp bài thi của bạn.');
    finishExam();
  }
}

function updateExamTimerUI() {
  const mins = Math.floor(examTimeRemaining / 60);
  const secs = examTimeRemaining % 60;
  const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  const timerBadge = document.getElementById('exam-timer');
  timerBadge.textContent = `⏳ ${timeStr}`;

  if (examTimeRemaining < 300) {
    timerBadge.classList.add('warning');
  } else {
    timerBadge.classList.remove('warning');
  }
}

function renderExamQuestion() {
  if (!examQuestions.length) return;
  const q = examQuestions[examIndex];
  if (!q) return;

  document.getElementById('exam-q-index').textContent = `Câu ${examIndex + 1} / ${examQuestions.length}`;
  document.getElementById('exam-q-text').textContent = q.question;

  // Flag indicator
  const isFlagged = examFlags.has(q.id);
  const flagIndicator = document.getElementById('exam-flagged-indicator');
  const flagBtn = document.getElementById('btn-exam-flag');
  if (isFlagged) {
    flagIndicator.style.display = 'inline';
    flagBtn.textContent = '🏳️ Bỏ đánh dấu';
  } else {
    flagIndicator.style.display = 'none';
    flagBtn.textContent = '🚩 Đánh dấu xem lại';
  }

  // Answered stat
  const answeredCount = Object.keys(examAnswers).length;
  document.getElementById('exam-answered-stat').textContent = `${answeredCount}/${examQuestions.length}`;

  // Render options
  const container = document.getElementById('exam-options-container');
  container.innerHTML = '';

  const userAnswer = examAnswers[q.id];
  const letters = ['A', 'B', 'C', 'D'];

  q.options.forEach((optText, idx) => {
    const letter = letters[idx];
    const item = document.createElement('div');
    item.className = 'option-item';
    if (optText === userAnswer) {
      item.classList.add('selected');
    }

    item.innerHTML = `
      <span class="option-letter">${letter}</span>
      <span class="option-text">${optText}</span>
    `;

    item.onclick = () => {
      playSound('click');
      examAnswers[q.id] = optText;
      renderExamQuestion();
    };

    container.appendChild(item);
  });

  // Nav buttons
  document.getElementById('btn-exam-prev').disabled = examIndex === 0;
  document.getElementById('btn-exam-next').disabled = examIndex === examQuestions.length - 1;

  // Progress
  const progressPercent = ((examIndex + 1) / examQuestions.length) * 100;
  document.getElementById('exam-progress-bar').style.width = `${progressPercent}%`;
}

function examGoPrev() {
  if (examIndex > 0) {
    playSound('click');
    examIndex--;
    renderExamQuestion();
  }
}

function examGoNext() {
  if (examIndex < examQuestions.length - 1) {
    playSound('click');
    examIndex++;
    renderExamQuestion();
  }
}

function toggleExamFlag() {
  const q = examQuestions[examIndex];
  if (!q) return;
  if (examFlags.has(q.id)) {
    examFlags.delete(q.id);
  } else {
    examFlags.add(q.id);
  }
  renderExamQuestion();
}

function confirmSubmitExam() {
  const total = examQuestions.length;
  const answeredCount = Object.keys(examAnswers).length;
  const unansweredCount = total - answeredCount;

  let msg = 'Bạn có chắc chắn muốn nộp bài thi?';
  if (unansweredCount > 0) {
    msg = `Bạn còn ${unansweredCount} câu CHƯA TRẢ LỜI! Bạn có chắc muốn nộp bài không?`;
  }

  if (confirm(msg)) {
    clearInterval(examTimerInterval);
    finishExam();
  }
}

function finishExam() {
  // Calculate results
  let correctCount = 0;
  let wrongCount = 0;
  let skippedCount = 0;

  examQuestions.forEach(q => {
    const userAns = examAnswers[q.id];
    if (userAns === undefined) {
      skippedCount++;
    } else if (userAns === q.correctAnswer) {
      correctCount++;
    } else {
      wrongCount++;
      wrongQuestions.add(q.id); // auto record to wrong questions list
    }
  });

  saveLocalStorage();
  updateWrongCountBadge();

  const total = examQuestions.length;
  const score10 = ((correctCount / total) * 10).toFixed(1);

  examResults = {
    total,
    correctCount,
    wrongCount,
    skippedCount,
    score10,
    timeSpent: examTimeElapsed,
    questions: examQuestions.map(q => ({
      ...q,
      userAnswer: examAnswers[q.id],
      isCorrect: examAnswers[q.id] === q.correctAnswer
    }))
  };

  // Show result view
  showExamResultView();
}

function showExamResultView() {
  document.querySelectorAll('.view-section').forEach(sec => sec.style.display = 'none');
  document.getElementById('view-exam-result').style.display = 'block';

  const res = examResults;
  document.getElementById('result-score-num').textContent = res.score10;
  document.getElementById('result-stat-correct').textContent = res.correctCount;
  document.getElementById('result-stat-wrong').textContent = res.wrongCount;
  document.getElementById('result-stat-skipped').textContent = res.skippedCount;

  const mins = Math.floor(res.timeSpent / 60);
  const secs = res.timeSpent % 60;
  document.getElementById('result-stat-time').textContent = `${mins}p ${secs}s`;

  const titleEl = document.getElementById('result-title');
  const subEl = document.getElementById('result-subtitle');

  const scoreNum = parseFloat(res.score10);
  if (scoreNum >= 9.0) {
    titleEl.textContent = 'Xuất sắc! Đỉnh cao triết học! 🏆';
    subEl.textContent = `Bạn đã trả lời đúng ${res.correctCount}/${res.total} câu. Bạn đã sẵn sàng đạt điểm A+ môn Triết!`;
    triggerConfetti();
  } else if (scoreNum >= 8.0) {
    titleEl.textContent = 'Giỏi lắm! Điểm rất cao! 🎉';
    subEl.textContent = `Bạn đã trả lời đúng ${res.correctCount}/${res.total} câu. Kiến thức nắm rất chắc chắn.`;
    triggerConfetti();
  } else if (scoreNum >= 6.5) {
    titleEl.textContent = 'Khá tốt! Đã đạt yêu cầu! 👍';
    subEl.textContent = `Bạn đã trả lời đúng ${res.correctCount}/${res.total} câu. Hãy ôn thêm các câu sai để bứt phá nhé.`;
  } else if (scoreNum >= 5.0) {
    titleEl.textContent = 'Đạt điểm qua môn! 📚';
    subEl.textContent = `Bạn đã trả lời đúng ${res.correctCount}/${res.total} câu. Hãy luyện tập thêm ở chế độ Flashcard & Ôn câu sai nhé.`;
  } else {
    titleEl.textContent = 'Cần cố gắng thêm! 💪';
    subEl.textContent = `Bạn trả lời đúng ${res.correctCount}/${res.total} câu. Đừng lo, hãy xem lại các câu sai bên dưới và luyện tập thêm nhé!`;
  }

  // Render review list
  filterExamReview('all');
}

function filterExamReview(filterType) {
  document.querySelectorAll('#view-exam-result .btn-sm').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(`filter-review-${filterType}`);
  if (btn) btn.classList.add('active');

  const container = document.getElementById('exam-review-list');
  container.innerHTML = '';

  const list = examResults.questions.filter(q => {
    if (filterType === 'all') return true;
    if (filterType === 'wrong') return !q.isCorrect;
    if (filterType === 'correct') return q.isCorrect;
    return true;
  });

  if (list.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:1.5rem; color:var(--text-muted);">Không có câu hỏi nào trong mục này.</div>`;
    return;
  }

  list.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.padding = '1.25rem';
    card.style.borderLeft = q.isCorrect ? '4px solid var(--success)' : '4px solid var(--danger)';

    let statusBadge = q.isCorrect
      ? '<span style="color:var(--success); font-weight:700;">✅ Đúng</span>'
      : (q.userAnswer === undefined ? '<span style="color:var(--text-muted); font-weight:700;">⚪ Chưa làm</span>' : '<span style="color:var(--danger); font-weight:700;">❌ Sai</span>');

    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem; font-size:0.875rem;">
        <span style="font-weight:700; color:var(--primary);">Câu #${q.id}</span>
        ${statusBadge}
      </div>
      <p style="font-weight:600; font-size:1.05rem; margin-bottom:0.75rem;">${q.question}</p>
      ${q.userAnswer ? `<div style="font-size:0.925rem; margin-bottom:0.35rem; color:${q.isCorrect ? 'var(--success-text)' : 'var(--danger-text)'}">
        <strong>Bạn chọn:</strong> ${q.userAnswer}
      </div>` : `<div style="font-size:0.925rem; margin-bottom:0.35rem; color:var(--text-muted)"><strong>Bạn chưa trả lời câu này</strong></div>`}
      <div style="font-size:0.925rem; padding:0.5rem 0.75rem; background:var(--success-light); color:var(--success-text); border-radius:var(--radius-sm);">
        <strong>Đáp án đúng:</strong> ${q.correctAnswer}
      </div>
    `;

    container.appendChild(card);
  });
}

function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// ==========================================
// CHẾ ĐỘ FLASHCARD (THẺ GHI NHỚ)
// ==========================================

function renderFlashcard() {
  if (!flashcardList.length) return;
  const q = flashcardList[flashcardIndex];
  if (!q) return;

  const card = document.getElementById('flashcard');
  card.classList.remove('flipped');

  document.getElementById('fc-progress-badge').textContent = `Thẻ ${flashcardIndex + 1} / ${flashcardList.length}`;
  document.getElementById('fc-front-num').textContent = `#${q.id}`;
  document.getElementById('fc-back-num').textContent = `#${q.id}`;

  document.getElementById('fc-question-text').textContent = q.question;
  document.getElementById('fc-answer-text').textContent = q.correctAnswer;
}

function flipFlashcard() {
  playSound('click');
  const card = document.getElementById('flashcard');
  card.classList.toggle('flipped');
}

function nextFlashcard() {
  playSound('click');
  if (flashcardIndex < flashcardList.length - 1) {
    flashcardIndex++;
  } else {
    flashcardIndex = 0; // loop
  }
  renderFlashcard();
}

function prevFlashcard() {
  playSound('click');
  if (flashcardIndex > 0) {
    flashcardIndex--;
  } else {
    flashcardIndex = flashcardList.length - 1;
  }
  renderFlashcard();
}

function shuffleFlashcards() {
  playSound('click');
  flashcardList = shuffleArray(flashcardList);
  flashcardIndex = 0;
  renderFlashcard();
}

// ==========================================
// CHẾ ĐỘ ÔN CÂU SAI (WRONG QUESTIONS)
// ==========================================

function renderWrongQuestions() {
  const container = document.getElementById('wrong-list-container');
  const emptyBox = document.getElementById('wrong-empty-box');
  const totalLabel = document.getElementById('wrong-total-label');

  totalLabel.textContent = `${wrongQuestions.size} câu cần ôn lại`;

  if (wrongQuestions.size === 0) {
    emptyBox.style.display = 'block';
    container.innerHTML = '';
    return;
  }

  emptyBox.style.display = 'none';
  container.innerHTML = '';

  const wrongList = questions.filter(q => wrongQuestions.has(q.id));

  wrongList.forEach(q => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.borderLeft = '4px solid var(--danger)';

    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
        <span style="font-weight:700; color:var(--primary); font-size:0.9rem;">Câu gốc #${q.id}</span>
        <button class="btn btn-secondary btn-sm" onclick="removeWrongQuestion(${q.id})" title="Đã thuộc câu này, bỏ khỏi danh sách câu sai">
          ✓ Đã thuộc
        </button>
      </div>
      <h3 style="font-size:1.1rem; font-weight:600; margin-bottom:0.75rem;">${q.question}</h3>
      <div style="padding:0.75rem 1rem; background:var(--success-light); color:var(--success-text); border-radius:var(--radius-sm); font-size:0.95rem;">
        <strong>Đáp án đúng:</strong> ${q.correctAnswer}
      </div>
    `;

    container.appendChild(card);
  });
}

function removeWrongQuestion(qId) {
  playSound('click');
  wrongQuestions.delete(qId);
  saveLocalStorage();
  updateWrongCountBadge();
  renderWrongQuestions();
}

function clearWrongQuestions() {
  if (confirm('Bạn có chắc muốn xóa toàn bộ danh sách câu sai?')) {
    wrongQuestions.clear();
    saveLocalStorage();
    updateWrongCountBadge();
    renderWrongQuestions();
  }
}

// ==========================================
// CHẾ ĐỘ TRA CỨU 100 CÂU (SEARCH & LIST)
// ==========================================

function handleSearch(keyword) {
  renderSearchResults(keyword.trim().toLowerCase());
}

function renderSearchResults(keyword) {
  const container = document.getElementById('search-results-container');
  container.innerHTML = '';

  const filtered = questions.filter(q => {
    if (!keyword) return true;
    return q.question.toLowerCase().includes(keyword) ||
           q.correctAnswer.toLowerCase().includes(keyword) ||
           String(q.id).includes(keyword);
  });

  document.getElementById('search-count').textContent = filtered.length;

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:2rem; color:var(--text-muted);">Không tìm thấy câu hỏi nào phù hợp với từ khóa "${keyword}".</div>`;
    return;
  }

  filtered.forEach(q => {
    const card = document.createElement('div');
    card.className = 'search-card';

    card.innerHTML = `
      <div class="search-card-header">
        <span class="search-q-num">Câu #${q.id}</span>
        <button class="btn btn-secondary btn-sm" onclick="jumpToPractice(${q.id})">🎯 Luyện câu này</button>
      </div>
      <p style="font-weight:600; font-size:1.05rem;">${q.question}</p>
      <div class="search-ans-box">
        <strong>Đáp án đúng:</strong> ${q.correctAnswer}
      </div>
    `;

    container.appendChild(card);
  });
}

function jumpToPractice(qId) {
  const idx = questions.findIndex(q => q.id === qId);
  if (idx !== -1) {
    practiceIndex = idx;
    switchMode('practice');
    renderPracticeQuestion();
  }
}

// ==========================================
// BẢNG DANH SÁCH CÂU HỎI (PALETTE MODAL)
// ==========================================

function openPaletteModal() {
  playSound('click');
  const modal = document.getElementById('palette-modal');
  const grid = document.getElementById('palette-grid');
  grid.innerHTML = '';

  const targetList = currentMode === 'exam' ? examQuestions : questions;
  const currentIdx = currentMode === 'exam' ? examIndex : practiceIndex;

  targetList.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.className = 'palette-btn';
    btn.textContent = idx + 1;

    if (idx === currentIdx) {
      btn.classList.add('current');
    }

    if (currentMode === 'exam') {
      if (examAnswers[q.id]) {
        btn.classList.add('answered');
      }
      if (examFlags.has(q.id)) {
        btn.classList.add('flagged');
      }
    } else {
      const userAns = practiceAnswers[q.id];
      if (userAns !== undefined) {
        if (userAns === q.correctAnswer) {
          btn.classList.add('answered-correct');
        } else {
          btn.classList.add('answered-wrong');
        }
      }
    }

    btn.onclick = () => {
      playSound('click');
      closePaletteModal();
      if (currentMode === 'exam') {
        examIndex = idx;
        renderExamQuestion();
      } else {
        practiceIndex = idx;
        renderPracticeQuestion();
      }
    };

    grid.appendChild(btn);
  });

  modal.classList.add('active');
}

function closePaletteModal() {
  document.getElementById('palette-modal').classList.remove('active');
}

// ==========================================
// SETTINGS: SOUND, THEME, SHORTCUTS
// ==========================================

function toggleSound() {
  soundEnabled = !soundEnabled;
  saveLocalStorage();
  updateSoundUI();
  if (soundEnabled) playSound('click');
}

function updateSoundUI() {
  const btn = document.getElementById('btn-sound');
  btn.textContent = soundEnabled ? '🔊' : '🔇';
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(currentTheme);
  saveLocalStorage();
  playSound('click');
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('btn-theme');
  btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function setupKeyboardShortcuts() {
  window.addEventListener('keydown', e => {
    // If typing in search box, skip shortcuts
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (currentMode === 'practice') {
      const q = questions[practiceIndex];
      if (e.key >= '1' && e.key <= '4') {
        const optIdx = parseInt(e.key, 10) - 1;
        if (q && q.options[optIdx] && practiceAnswers[q.id] === undefined) {
          selectPracticeAnswer(q.id, q.options[optIdx]);
        }
      } else if (e.key === 'ArrowLeft') {
        goToPrevQuestion();
      } else if (e.key === 'ArrowRight') {
        goToNextQuestion();
      } else if (e.key.toLowerCase() === 'r') {
        revealAnswer();
      }
    } else if (currentMode === 'exam') {
      const q = examQuestions[examIndex];
      if (e.key >= '1' && e.key <= '4') {
        const optIdx = parseInt(e.key, 10) - 1;
        if (q && q.options[optIdx]) {
          examAnswers[q.id] = q.options[optIdx];
          playSound('click');
          renderExamQuestion();
        }
      } else if (e.key === 'ArrowLeft') {
        examGoPrev();
      } else if (e.key === 'ArrowRight') {
        examGoNext();
      }
    } else if (currentMode === 'flashcard') {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        flipFlashcard();
      } else if (e.key === 'ArrowLeft') {
        prevFlashcard();
      } else if (e.key === 'ArrowRight') {
        nextFlashcard();
      }
    }
  });
}

// Start app on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initApp);
