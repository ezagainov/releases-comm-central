pref("toolkit.defaultChromeURI", "chrome://instantbird/content/blist.xul");
pref("toolkit.singletonWindowType", "Messenger:blist");

#expand pref("general.useragent.extra.instantbird", "Instantbird/__APP_VERSION__");
#expand pref("general.useragent.locale", "__AB_CD__");

pref("accessibility.browsewithcaret", true);

pref("messenger.accounts", "");
pref("messenger.accounts.promptOnDelete", true);

// The intervals in seconds between automatic reconnection attempts
// The last value will be reused forever.
// A value of 0 means that there will be no more reconnection attempts.
pref("messenger.accounts.reconnectTimer", "1,5,30,60,90,300,600,1200,3600");


pref("messenger.conversations.selections.ellipsis", "chrome://instantbird/locale/instantbird.properties");
pref("messenger.conversations.selections.systemMessagesTemplate", "chrome://instantbird/locale/instantbird.properties");
pref("messenger.conversations.selections.contentMessagesTemplate", "chrome://instantbird/locale/instantbird.properties");

pref("messenger.options.playSounds", true);

// this preference changes how we filter incoming messages
// 0 = no formattings
// 1 = basic formattings (bold, italic, underlined)
// 2 = permissive mode (colors, font face, font size, ...)
pref("messenger.options.filterMode", 1);

// use "none" to disable
pref("messenger.options.emoticonsTheme", "default");
pref("messenger.options.messagesStyle.theme", "default");
pref("messenger.options.messagesStyle.variant", "default");
pref("messenger.options.messagesStyle.showHeader", false);
pref("messenger.options.messagesStyle.combineConsecutive", true);
// if the time interval in seconds between two messages is longer than
// this value, the messages will not be combined
pref("messenger.options.messagesStyle.combineConsecutiveInterval", 300); // 5 minutes

pref("messenger.proxies", "");
pref("messenger.globalProxy", "none");

#ifdef XP_WIN
pref("browser.preferences.instantApply", false);
#else
pref("browser.preferences.instantApply", true);
#endif
#ifdef XP_MACOSX
pref("browser.preferences.animateFadeIn", true);
#else
pref("browser.preferences.animateFadeIn", false);
#endif

pref("browser.zoom.full", true);

pref("accessibility.typeaheadfind", false);
pref("accessibility.typeaheadfind.timeout", 5000);
pref("accessibility.typeaheadfind.linksonly", false);
pref("accessibility.typeaheadfind.flashBar", 1);

// Whether or not app updates are enabled
pref("app.update.enabled", true);

// This preference turns on app.update.mode and allows automatic download and
// install to take place. We use a separate boolean toggle for this to make
// the UI easier to construct.
pref("app.update.auto", true);

// Defines how the Application Update Service notifies the user about updates:
//
// AUM Set to:        Minor Releases:     Major Releases:
// 0                  download no prompt  download no prompt
// 1                  download no prompt  download no prompt if no incompatibilities
// 2                  download no prompt  prompt
//
// See chart in nsUpdateService.js.in for more details
//
pref("app.update.mode", 1);

// If set to true, the Update Service will present no UI for any event.
pref("app.update.silent", false);

// Update service URL:
// You do not need to use all the %VAR% parameters. Use what you need, %PRODUCT%,%VERSION%,%BUILD_ID%,%CHANNEL% for example
pref("app.update.url", "https://update.instantbird.org/1/%PRODUCT%/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/update.xml");

// URL user can browse to manually if for some reason all update installation
// attempts fail.
pref("app.update.url.manual", "http://www.instantbird.com/download.html");

// A default value for the "More information about this update" link
// supplied in the "An update is available" page of the update wizard.
pref("app.update.url.details", "http://www.instantbird.com/");

// User-settable override to app.update.url for testing purposes.
//pref("app.update.url.override", "");

// Interval: Time between checks for a new version (in seconds)
//           default=1 day
pref("app.update.interval", 86400);

// Interval: Time before prompting the user to download a new version that
//           is available (in seconds) default=1 day
pref("app.update.nagTimer.download", 86400);

// Interval: Time before prompting the user to restart to install the latest
//           download (in seconds) default=30 minutes
pref("app.update.nagTimer.restart", 1800);

// Interval: When all registered timers should be checked (in milliseconds)
//           default=5 seconds
pref("app.update.timer", 600000);

// Whether or not we show a dialog box informing the user that the update was
// successfully applied. This is off in Firefox by default since we show a
// upgrade start page instead! Other apps may wish to show this UI, and supply
// a whatsNewURL field in their brand.properties that contains a link to a page
// which tells users what's new in this new update.
pref("app.update.showInstalledUI", true);

// 0 = suppress prompting for incompatibilities if there are updates available
//     to newer versions of installed addons that resolve them.
// 1 = suppress prompting for incompatibilities only if there are VersionInfo
//     updates available to installed addons that resolve them, not newer
//     versions.
pref("app.update.incompatible.mode", 0);

// Dictionary download preference
pref("browser.dictionaries.download.url", "https://add-ons.instantbird.org/%LOCALE%/%APP%/%VERSION%/dictionaries/");

// search engines URL
pref("browser.search.searchEnginesURL",      "https://add-ons.instantbird.org/%LOCALE%/%APP%/%VERSION%/search-engines/");

// pointer to the default engine name. Keep this empty so that the
// first engine listed in the engine manager is used instead
pref("browser.search.defaultenginename",      "");

// disable logging for the search service by default
pref("browser.search.log", false);

// Ordering of Search Engines in the Engine list. 
pref("browser.search.order.1",                "chrome://instantbird/locale/region.properties");
pref("browser.search.order.2",                "chrome://instantbird/locale/region.properties");

// send ping to the server to update
pref("browser.search.update", true);

// disable logging for the search service update system by default
pref("browser.search.update.log", false);

// Check whether we need to perform engine updates every 6 hours
pref("browser.search.updateinterval", 6);

/* Extension manager */
pref("xpinstall.dialog.confirm", "chrome://mozapps/content/xpinstall/xpinstallConfirm.xul");
pref("xpinstall.dialog.progress.skin", "chrome://mozapps/content/extensions/extensions.xul");
pref("xpinstall.dialog.progress.chrome", "chrome://mozapps/content/extensions/extensions.xul");
pref("xpinstall.dialog.progress.type.skin", "Extension:Manager");
pref("xpinstall.dialog.progress.type.chrome", "Extension:Manager");
pref("extensions.update.enabled", true);
pref("extensions.update.interval", 86400);
pref("extensions.dss.enabled", false);
pref("extensions.dss.switchPending", false);
pref("extensions.ignoreMTimeChanges", false);
pref("extensions.logging.enabled", false);
pref("general.skins.selectedSkin", "classic/1.0");
// NB these point at addons.instantbird.org
pref("extensions.update.enabled", false);
pref("extensions.update.url", "https://addons.instantbird.org/services/update.php?reqVersion=%REQ_VERSION%&id=%ITEM_ID%&version=%ITEM_VERSION%&maxAppVersion=%ITEM_MAXAPPVERSION%&status=%ITEM_STATUS%&appID=%APP_ID%&appVersion=%APP_VERSION%&appOS=%APP_OS%&appABI=%APP_ABI%&locale=%APP_LOCALE%");

// Preferences for the Get Add-ons pane
pref("extensions.getAddons.showPane", true);
pref("extensions.getAddons.browseAddons", "https://addons.instantbird.org/%LOCALE%/%APP%");
pref("extensions.getAddons.maxResults", 5);
pref("extensions.getAddons.recommended.browseURL", "https://addons.instantbird.org/%LOCALE%/%APP%/recommended");
pref("extensions.getAddons.recommended.url", "https://services.instantbird.org/%LOCALE%/%APP%/api/%API_VERSION%/list/featured/all/10/%OS%/%VERSION%");
pref("extensions.getAddons.search.browseURL", "https://add-ons.instantbird.org/%LOCALE%/%APP%/search?q=%TERMS%");
pref("extensions.getAddons.search.url", "https://services.instantbird.org/%LOCALE%/%APP%/api/%API_VERSION%/search/%TERMS%/all/10/%OS%/%VERSION%");

pref("extensions.getMoreExtensionsURL", "https://add-ons.instantbird.org/%LOCALE%/%APP%/%VERSION%/extensions/");
pref("extensions.getMoreThemesURL", "https://add-ons.instantbird.org/%LOCALE%/%APP%/%VERSION%/themes/");
pref("extensions.getMorePluginsURL", "https://add-ons.instantbird.org/%LOCALE%/%APP%/%VERSION%/plugins/");
// suppress external-load warning for standard browser schemes
pref("network.protocol-handler.warn-external.http", false);
pref("network.protocol-handler.warn-external.https", false);
pref("network.protocol-handler.warn-external.ftp", false);

// don't load links inside Instantbird
pref("network.protocol-handler.expose-all", false);

// expose javascript: so that message themes can use it.
// javascript: links inside messages are filtered out.
pref("network.protocol-handler.expose.javascript", true);

// The breakpad report server to link to in about:crashes
pref("breakpad.reportURL", "http://crash-stats.instantbird.com/report/index/");

// We have an Error Console menu item by default so let's display chrome errors
pref("javascript.options.showInConsole", true);
#ifdef DEBUG
// In debug builds, also display warnings by default
pref("javascript.options.strict", true);

// Having to click through the "I'll be careful" button all the time
// is annoying, and users of debug builds are expected to know what
// they are doing...
pref("general.warnOnAboutConfig", false);
#endif
