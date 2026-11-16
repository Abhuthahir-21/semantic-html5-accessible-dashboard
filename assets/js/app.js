'use strict';
const menuButton = document.querySelector('.menu-toggle');
const primaryNavigation = document.querySelector('#primary-navigation');
if (menuButton && primaryNavigation) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    primaryNavigation.classList.toggle('is-open', !expanded);
  });
}
const dialog = document.querySelector('#details-dialog');
const openDialogButton = document.querySelector('[data-open-dialog]');
if (dialog instanceof HTMLDialogElement && openDialogButton) {
  openDialogButton.addEventListener('click', () => dialog.showModal());
  document.querySelectorAll('[data-close-dialog]').forEach((button) => button.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
}
const reportFilter = document.querySelector('#report-filter');
if (reportFilter instanceof HTMLFormElement) {
  const search = document.querySelector('#report-search');
  const status = document.querySelector('#report-status');
  const rows = Array.from(document.querySelectorAll('#reports-table tbody tr'));
  const feedback = document.querySelector('#filter-feedback');
  const apply = () => {
    const query = search.value.trim().toLowerCase();
    let count = 0;
    rows.forEach((row) => {
      const visible = row.textContent.toLowerCase().includes(query) && (!status.value || row.cells[2].textContent.trim() === status.value);
      row.hidden = !visible;
      if (visible) count += 1;
    });
    feedback.textContent = `${count} report${count === 1 ? '' : 's'} shown.`;
  };
  reportFilter.addEventListener('submit', (event) => { event.preventDefault(); apply(); });
  reportFilter.addEventListener('reset', () => window.setTimeout(apply, 0));
}
const settingsForm = document.querySelector('#settings-form');
if (settingsForm instanceof HTMLFormElement) {
  const feedback = document.querySelector('#settings-feedback');
  settingsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (settingsForm.reportValidity()) feedback.textContent = 'Preferences validated. This demo does not send data to a server.';
  });
  settingsForm.addEventListener('reset', () => { feedback.textContent = ''; });
}
