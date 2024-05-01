function showPopup() {
    const tracking = {
        id: 'sfdsfdsfds',
    };

    const encoded = btoa(JSON.stringify(tracking));

    fetch(`http://localhost:3001/popup?track=${encoded}`).then(async (response) => {
        const content = await response.text();

        const popupOuter = document.createElement("div");
        popupOuter.style.width = "100vw";
        popupOuter.style.height = "100vh";
        popupOuter.style['background-color'] = 'rgba(1,1,1,0.2)';
        popupOuter.style.position = 'fixed';
        popupOuter.style.top = 0;
        popupOuter.style.left = 0;
        popupOuter.style.display = "flex";
        popupOuter.style.justifyContent = 'center';
        popupOuter.style.alignItems = 'center';

        const popupInner = document.createElement("div");
        popupInner.style.padding = '25px';
        popupInner.style['background-color'] = 'white';
        popupInner.innerHTML = content;

        popupOuter.appendChild(popupInner);

        document.body.appendChild(popupOuter);
    });
}