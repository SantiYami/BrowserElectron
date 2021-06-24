const { ipcRenderer } = require('electron');
const maxResBtn = document.getElementById('maxResBtn');
const maxResIco = document.getElementById('maxResIco');
const mySideBar = document.getElementById('mySideBar');
const ipc = ipcRenderer;
var isLeftMenuActive = true;

//MINIMIZE APP
minimizeBtn.addEventListener('click', () => {
    ipc.send('minimizeApp');
});

//MAXIMIZE RESTORE APP
function changeMaxResBtn(isMaximizedApp) {
    if (isMaximizedApp) {
        maxResBtn.title = 'Restore';
        maxResIco.classList.remove('fa-window-maximize');
        maxResIco.classList.add('fa-window-restore');
    } else {
        maxResBtn.title = 'Maximize';
        maxResIco.classList.remove('fa-window-restore');
        maxResIco.classList.add('fa-window-maximize');
    }
}

maxResBtn.addEventListener('click', () => {
    ipc.send('maximizeRestoreApp');
});

ipc.on('isMaximized', () => {
    changeMaxResBtn(true);
});
ipc.on('isRestored', () => {
    changeMaxResBtn(false);
});

//CLOSE APP
closeBtn.addEventListener('click', () => {
    ipc.send('closeApp');
});

//TOGGLE MENU
showHideMenu.addEventListener('click', () => {
    if (isLeftMenuActive) {
        mySideBar.style.width = '0px';
        isLeftMenuActive = false;
    } else {
        mySideBar.style.width = '21rem';
        isLeftMenuActive = true;
    }
});