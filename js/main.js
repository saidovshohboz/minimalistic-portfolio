let modifiers = {
  elSiteHeaderOpen: 'site-header--open'
}

let elSiteHeader = document.querySelector('.site-header');
let elSiteHeaderToggler = elSiteHeader.querySelector('.site-header__toggler');

if (elSiteHeaderToggler) {
  elSiteHeaderToggler.addEventListener('click', () => {
    elSiteHeader.classList.toggle(modifiers.elSiteHeaderOpen);
  });
}