export const reRender = async (component, domElement) => {
    if (component) {
        document.querySelector(domElement).innerHTML = await component.reder();

    }
    if (component.afterRender) await component.afterRender();
}