const sidebar = document.querySelector('.sidebar-exit');
const body = document.querySelector('.body-content');
const sidebarHeader = document.querySelector('.sidebar-logo');
const sidebarOpen = document.querySelector('.sidebar-open');
const sidebarLinks = document.querySelector('.sidebar-links');
const link = document.querySelector('link');

function sideBarExit(){
  sidebar.classList.add('remove');
  sidebarHeader.classList.add('remove');
  body.classList.add('grid-hide');
  sidebarOpen.classList.add('open');
  sidebarLinks.classList.add('remove');
  link.classList.add('remove');
};

function sideBarOpen(){
  sidebar.classList.remove('remove');
  sidebarHeader.classList.remove('remove');
  body.classList.remove('grid-hide');
  sidebarOpen.classList.remove('open');
  sidebarLinks.classList.remove('remove');
  link.classList.remove('remove');
}