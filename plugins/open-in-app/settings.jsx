const {
    plugin: { store },
    ui: { SwitchItem }
} = shelter;

import { apps } from ".";

export const settings = () => {
    const rows = [];
    for (const [appName, app] of Object.entries(apps)) {
        rows.push(
            <SwitchItem
                value={store[appName]}
                onChange={(value) => {
                    store[appName] = value;
                }}
                note={app.protocol}
            >
                {appName}
            </SwitchItem>
        );
    }

    return <>{rows}</>;
};
