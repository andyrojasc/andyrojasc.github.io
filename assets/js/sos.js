function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    if (/iPad|iPhone|Mac|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

function DetectAndServe() {
    let os = getMobileOperatingSystem();
    if (os == "Android") {
        window.open('https://play.google.com/store/apps/details?id=go.muniorotina&hl=en_US', '_blank');
        //window.location.href = "https://play.google.com/store/apps/details?id=go.muniorotina&hl=en_US"; 
    } else if (os == "iOS") {
        window.open('https://itunes.apple.com/cr/app/municipalidad-de-orotina/id1450196328?mt=8', '_blank');
        //window.location.href = "https://itunes.apple.com/cr/app/municipalidad-de-orotina/id1450196328?mt=8";
    } else {
        window.open('https://play.google.com/store/apps/details?id=go.muniorotina&hl=en_US', '_blank');
        //window.location.href = "https://play.google.com/store/apps/details?id=go.muniorotina&hl=en_US"; 
    }
}