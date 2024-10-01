const SELECTOR_SIDEBAR_WRAPPER = '.sidebar-wrapper';
const Default = {
  scrollbarTheme: 'os-theme-dark',
  scrollbarAutoHide: 'leave',
  scrollbarClickScroll: true,
};

const sidebarWrapper = document.querySelector(SELECTOR_SIDEBAR_WRAPPER);
if (sidebarWrapper && typeof OverlayScrollbarsGlobal?.OverlayScrollbars !== 'undefined') {
  OverlayScrollbarsGlobal.OverlayScrollbars(sidebarWrapper, {
    scrollbars: {
      theme: Default.scrollbarTheme,
      autoHide: Default.scrollbarAutoHide,
      clickScroll: Default.scrollbarClickScroll,
    },
  });
}

alert('carregei o over');
