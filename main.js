require("electron-reloader")(module);

const path = require("path");
const { app, BrowserWindow } = require("electron");

app.disableHardwareAcceleration();

const createWindow = () => {
    const win = new BrowserWindow({
        width: 500,
        height: 500,
        center: true,
        autoHideMenuBar: true,
        resizable: false
    });

    win.loadFile(path.resolve(__dirname, "src", "index.html"));
};

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});