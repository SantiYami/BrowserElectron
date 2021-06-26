const { ipcRenderer } = require('electron');
const maxResBtn = document.getElementById('maxResBtn');
const maxResIco = document.getElementById('maxResIco');
const reloadBtn = document.getElementById('reloadBtn');
const reloadIco = document.getElementById('reloadIco');
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

//HOME
homeBtn.addEventListener('click', () => {
    ipcR.send('home');
});

//BACK
backBtn.addEventListener('click', () => {
    ipcR.send('back');
});

//FORWARD
forwardBtn.addEventListener('click', () => {
    ipcR.send('forward');
});

//RELOAD
reloadBtn.addEventListener('click', () => {
    ipcR.send('reload');
});

//RELOAD STOP APP
function changeRelStopBtn(isReloadApp) {
    if (isReloadApp) {
        reloadBtn.title = 'Stop';
        reloadIco.classList.remove('fa-redo');
        reloadIco.classList.add('fa-times');
    } else {
        reloadBtn.title = 'Reload';
        reloadIco.classList.remove('fa-times');
        reloadIco.classList.add('fa-redo');
    }
}

//HOME
ipcR.on('isHome', () => {
    console.log('ClickHome');
});

//BACK
ipcR.on('isBack', () => {
    console.log('ClickBack');
});

//FORWARD
ipcR.on('isForward', () => {
    console.log('ClickForward');
});

//RELOAD
// ipcR.on('isReload', () => {
//     console.log('ClickReload');
// });

ipcR.on('isReload', () => {
    console.log('entro');
    changeRelStopBtn(true);
});
ipcR.on('isStop', () => {
    changeRelStopBtn(false);
});