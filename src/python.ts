// Code from https://github.com/NGnius/PowerTools/blob/dev/src/python.ts
import { ServerAPI } from "decky-frontend-lib";

var server: ServerAPI | undefined = undefined;

export function resolve(promise: Promise<any>, setter: any) {
    (async function () {
        let data = await promise;
        if (data.success) {
            console.debug("Got resolved", data, "promise", promise);
            setter(data.result);
        } else {
            console.warn("Resolve failed:", data, "promise", promise);
        }
    })();
}

export function execute(promise: Promise<any>) {
    (async function () {
        let data = await promise;
        if (data.success) {
            console.debug("Got executed", data, "promise", promise);
        } else {
            console.warn("Execute failed:", data, "promise", promise);
        }

    })();
}

export function setServer(s: ServerAPI) {
    server = s;
}

export function getThemes(): Promise<any> {
    return server!.callPluginMethod("get_themes", {})
}

export function setThemeState(name : string, state : boolean): Promise<any> {
    return server!.callPluginMethod("set_theme_state", {"name": name, "state": state})
}

export function reset(): Promise<any> {
    return server!.callPluginMethod("reset", {})
}

export function setPatchOfTheme(themeName : string, patchName : string, value : string){
    return server!.callPluginMethod("set_patch_of_theme", {"themeName": themeName, "patchName": patchName, "value": value})
}