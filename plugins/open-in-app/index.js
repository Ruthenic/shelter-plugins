const {
    plugin: { store },
    patcher: { instead }
} = shelter;

export const apps = {
    Spotify: {
        hostnames: ["open.spotify.com", "spotify.link"],
        protocol: "spotify://",
        default: true
    },
    Steam: {
        hostnames: [
            "store.steampowered.com",
            "steamcommunity.com",
            "help.steampowered.com"
        ],
        protocol: "steam://openurl/",
        default: true
    },
    SoundCloud: {
        hostnames: [
            "soundcloud.com"
            // "on.soundcloud.com", TODO: this
        ],
        protocol: "soundpout://",
        default: false
    }
};

function getEnabledApp(url) {
    const { hostname } = new URL(url);
    return Object.entries(apps).find(
        ([appName, app]) =>
            app.hostnames.includes(hostname) && store.enabledApps[appName]
    );
}

async function unshortenSpotifyURL(url) {
    const re = /<meta property="og:url" content="(.+?)"\/>/;
    const body = await (
        await fetch(`https://shcors.uwu.network/${url}`)
    ).text();
    return re.exec(body)?.[1];
}

async function openInApp(url) {
    try {
        url = new URL(url);

        if (url.hostname === "spotify.link") {
            url = new URL(await unshortenSpotifyURL(url));
        }

        const [appName, app] = getEnabledApp(url);
        const replacedUrl = app.protocol + url;

        window.open(replacedUrl, "_blank").close();
    } catch (e) {
        console.error("[open-in-app] Error opening in App", e);
    }
}

// for non direct links like modal buttons
let unpatchWindow;
function patchWindowOpen() {
    unpatchWindow = instead("open", window, (args, orig) => {
        const [url] = args;
        if (!getEnabledApp(url)) return orig(...args);
        openInApp(url);
    });
}

let unpatchVirtualClick;
async function patchVirtualClick() {
    unpatchVirtualClick = instead(
        "click",
        HTMLAnchorElement.prototype,
        function (args, orig) {
            const { href } = this;
            if (!getEnabledApp(href)) return orig(...args);

            openInApp(url);
        }
    );
}

async function patchOnClick(e) {
    let anchorEl = e.target;
    try {
        // most click targets are nested span elements so find the closest non-span element and check if it's an anchor
        if (anchorEl.tagName !== "A") {
            anchorEl = anchorEl?.closest(`:not(${anchorEl.tagName})`);
            if (anchorEl.tagName !== "A") return;
        }
        const { href } = anchorEl;
        if (!getEnabledApp(href)) return;

        e.preventDefault();
        e.stopImmediatePropagation();
        openInApp(href);
    } catch (e) {}
}

const appMount = document.querySelector("#app-mount");

export function onLoad() {
    store.enabledApps ??= {};
    Object.entries(apps).forEach(([appName, app]) => {
        console.log(appName, app);
        store.enabledApps[appName] ??= app.default;
    });

    patchWindowOpen();
    patchVirtualClick();
    appMount.addEventListener("click", patchOnClick);
}

export function onUnload() {
    unpatchWindow?.();
    unpatchVirtualClick?.();
    appMount.removeEventListener("click", patchOnClick);
}

export { settings } from "./settings";
