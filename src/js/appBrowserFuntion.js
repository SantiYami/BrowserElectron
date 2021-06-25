const { ipcRenderer } = require('electron');
const mySideBar = document.getElementById('mySideBar');
const ipcR = ipcRenderer;
var isLeftMenuActive = true;

//TOGGLE MENU
ipcR.on('clickSideBar', () => {
    console.log('Click SideBar 2');
    if (isLeftMenuActive) {
        mySideBar.style.width = '0px';
        isLeftMenuActive = false;
    } else {
        mySideBar.style.width = '21rem';
        isLeftMenuActive = true;
    }
});

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
ipcR.on('isReload', () => {
    console.log('ClickReload');
});