// main.js

// Modules to control application life and create native browser window
const {
    app,
    BrowserView,
    BrowserWindow,
    ipcMain
} = require('electron');
const path = require('path');
const ipc = ipcMain;

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        show: false,
        width: 1200,
        height: 680,
        minWidth: 940,
        minHeight: 560,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            //preload: path.join(app.getAppPath(), 'src/js/appFunctions.js'),
            contextIsolation: false,
            devTools: false,
        }
    });
    // and load the index.html of the app.
    mainWindow.loadFile('src/index.html');
    mainWindow.setBackgroundColor('#343B48');
    app.whenReady().then(() => {
        createContent(mainWindow);
        app.on('activate', function() {
            // On macOS it's common to re-create a window in the app when the
            // dock icon is clicked and there are no other windows open.
            if (BrowserView.getAllWindows().length === 0) {
                createContent(mainWindow);
            }
        });
    });

    //Muestra la ventana una vez ya a sido creada
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    // Open the DevTools.
    //mainWindow.webContents.openDevTools();

    //MINIMIZE APP
    ipc.on('minimizeApp', () => {
        console.log('Click minimizeBtn');
        mainWindow.minimize();
    });

    //MAXIMAZE RESTORE APP
    ipc.on('maximizeRestoreApp', () => {
        if (mainWindow.isMaximized()) {
            console.log('Click Restore');
            mainWindow.restore();
        } else {
            console.log('Click Maximize');
            mainWindow.maximize();
        }
    });

    // Check if is Maximized
    mainWindow.on('maximize', () => {
        mainWindow.webContents.send('isMaximized');
    });

    // Check if is Restored
    mainWindow.on('unmaximize', () => {
        mainWindow.webContents.send('isRestored');
    });

    //CLOSE APP
    ipc.on('closeApp', () => {
        console.log('Click closeBtn');
        mainWindow.close();
    });

}

// Ventana de contenido
function createContent(mainWindow) {
    const contentWindow = new BrowserView({
        webPreferences: {
            //preload: path.join(__dirname, 'src/js/appFunctions.js'),
            //nodeIntegration: true, // PELIGROSO DE USAR, BLOQUEA HASTA JQUERY
            contextIsolation: false,
            devTools: true
        }
    });

    mainWindow.setBrowserView(contentWindow);
    contentWindow.setBounds({
        x: 1,
        y: 41,
        width: 1198,
        height: 638
    });

    contentWindow.setAutoResize({
        width: true,
        height: true,
    });

    mainWindow.setFullScreen(true);

    contentWindow.webContents.loadFile('src/browser.html');
    //contentWindow.webContents.loadURL('https://youtube.com');
    contentWindow.webContents.openDevTools();

    //TOGGLE MENU
    ipc.on('mySideBar', () => {
        console.log('Click SideBar');
        contentWindow.webContents.send('clickSideBar');
    });

    //HOME
    ipc.on('home', () => {
        console.log('Click homeBtn');
        mainWindow.send('home');
        contentWindow.webContents.loadURL('https://google.com');
    });

    //BACK
    ipc.on('back', () => {
        console.log('Click BackBtn');
        mainWindow.send('isBack');
        contentWindow.webContents.goBack();
    });

    //FORWARD
    ipc.on('forward', () => {
        console.log('Click ForwardBtn');
        mainWindow.send('isForward');
        contentWindow.webContents.goForward();
    });
    //RELOAD
    ipc.on('reload', () => {
        console.log('Click ReloadBtn');
        //contentWindow.webContents.send('isReload');
        contentWindow.webContents.reload();
    });

    // Check if is Reload
    contentWindow.webContents.on('did-start-loading', () => {
        console.log('isLoad');
        mainWindow.send('isReload');
    });

    // Check if is Stop
    contentWindow.webContents.on('did-stop-loading', () => {
        console.log('isStop');
        mainWindow.send('isStop');
    });

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow();

    app.on('activate', function() {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.