function updateBrowserHistory(browserObject, actions) {
    actions.forEach(action => {
        if (action === "Clear History and Cache") {
           
            browserObject = {
                "Browser Name": browserObject["Browser Name"],
                "Open Tabs": [],
                "Recently Closed": [],
                "Browser Logs": []
            };
        } else if (action.startsWith("Open")) {
            
            let site = action.replace("Open ", "");
            browserObject["Open Tabs"].push(site);
            browserObject["Browser Logs"].push(action);
        } else if (action.startsWith("Close")) {
            
            let site = action.replace("Close ", "");
            let index = browserObject["Open Tabs"].indexOf(site);
            if (index !== -1) {
                browserObject["Open Tabs"].splice(index, 1);
                browserObject["Recently Closed"].push(site);
                browserObject["Browser Logs"].push(action);
            }
        }
    });

    console.log(browserObject["Browser Name"]);
    console.log("Open Tabs: " + browserObject["Open Tabs"].join(", "));
    console.log("Recently Closed: " + browserObject["Recently Closed"].join(", "));
    console.log("Browser Logs: " + browserObject["Browser Logs"].join(", "));
}

updateBrowserHistory({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
    "Recently Closed":["Yahoo","Gmail"],
    "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
)