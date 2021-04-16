// initialize the SDK
appboy.initialize('96ab31f1-25c4-4752-8855-bf1557f50559', {
    baseUrl: "sondheim.braze.com"
});

// optionally show all In-App Messages without custom handling
appboy.display.automaticallyShowNewInAppMessages();

// optionally set the current user's External ID
if (isLoggedIn){
    appboy.changeUser(userIdentifier);
}

// start (or continue) a session
appboy.openSession();
