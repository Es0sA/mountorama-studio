// Mountorama Studio: shared prototype behavior (no backend; all client-side)

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Promo countdown
  const timeEl = document.querySelector('[data-countdown]');
  if (timeEl) {
    const target = new Date(timeEl.getAttribute('data-countdown')).getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        timeEl.textContent = 'ENDED';
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      timeEl.textContent = `${d}D ${String(h).padStart(2, '0')}H ${String(m).padStart(2, '0')}M ${String(s).padStart(2, '0')}S`;
    };
    tick();
    setInterval(tick, 1000);
  }

  // Portfolio filters
  const filterBtns = document.querySelectorAll('.filter-btn');
  const panels = document.querySelectorAll('[data-style]');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const style = btn.getAttribute('data-filter');
      panels.forEach((p) => {
        const match = style === 'all' || p.getAttribute('data-style') === style;
        p.style.display = match ? '' : 'none';
      });
    });
  });

  // Request form: bundle up to 5 books
  const bookList = document.querySelector('[data-book-list]');
  const addBookBtn = document.querySelector('[data-add-book]');
  const MAX_BOOKS = 5;

  const renumberBooks = () => {
    if (!bookList) return;
    const blocks = bookList.querySelectorAll('.book-block');
    blocks.forEach((block, i) => {
      block.querySelector('.book-title').textContent = `Comic book ${i + 1} of ${blocks.length}`;
      block.querySelector('.remove-book').style.display = blocks.length > 1 ? '' : 'none';
    });
    if (addBookBtn) {
      addBookBtn.disabled = blocks.length >= MAX_BOOKS;
      addBookBtn.textContent = blocks.length >= MAX_BOOKS
        ? 'Maximum of 5 books per request'
        : '+ Add another comic book';
    }
  };

  if (bookList && addBookBtn) {
    addBookBtn.addEventListener('click', () => {
      const blocks = bookList.querySelectorAll('.book-block');
      if (blocks.length >= MAX_BOOKS) return;
      const clone = blocks[0].cloneNode(true);
      clone.querySelectorAll('input, textarea, select').forEach((el) => {
        if (el.type === 'radio' || el.type === 'checkbox') el.checked = false;
        else if (el.type === 'file') el.value = '';
        else el.value = '';
        const n = blocks.length;
        if (el.name) el.name = el.name.replace(/\[\d+\]/, `[${n}]`);
        if (el.id) {
          const newId = `${el.id.replace(/-\d+$/, '')}-${n}`;
          const oldId = el.id;
          el.id = newId;
          const label = clone.querySelector(`label[for="${oldId}"]`);
          if (label) label.setAttribute('for', newId);
        }
      });
      bookList.appendChild(clone);
      renumberBooks();
    });

    bookList.addEventListener('click', (e) => {
      if (e.target.matches('.remove-book')) {
        const blocks = bookList.querySelectorAll('.book-block');
        if (blocks.length > 1) {
          e.target.closest('.book-block').remove();
          renumberBooks();
        }
      }
    });

    renumberBooks();
  }

  // Request form submit (prototype: no backend)
  const requestForm = document.querySelector('[data-request-form]');
  const confirmPanel = document.querySelector('[data-confirm-panel]');
  if (requestForm && confirmPanel) {
    requestForm.addEventListener('submit', (e) => {
      e.preventDefault();
      requestForm.style.display = 'none';
      confirmPanel.classList.add('is-visible');
      confirmPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
});
