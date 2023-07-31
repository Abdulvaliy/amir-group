function changeLanguage(language) {
    const currentURL = window.location.href;

    currentURL.charAt(1)
    window.location.href = currentURL.replace(/\/(en|uz|ru)\//, `/${language}/`);


}