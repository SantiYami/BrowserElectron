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