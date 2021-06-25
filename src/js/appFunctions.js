const { ipcRenderer } = require('electron');
const maxResBtn = document.getElementById('maxResBtn');
const maxResIco = document.getElementById('maxResIco');
const ipcR = ipcRenderer;

//MINIMIZE APP
minimizeBtn.addEventListener('click', () => {
    ipcR.send('minimizeApp');
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
    ipcR.send('maximizeRestoreApp');
});

ipcR.on('isMaximized', () => {
    changeMaxResBtn(true);
});
ipcR.on('isRestored', () => {
    changeMaxResBtn(false);
});

//CLOSE APP
closeBtn.addEventListener('click', () => {
    ipcR.send('closeApp');
});

//TOGGLE MENU
showHideMenu.addEventListener('click', () => {
    ipcR.send('mySideBar');
});