export const getLastWordPath = () => {
    const path = window.location.pathname;
    return path.slice(path.lastIndexOf('/') + 1,path.length)
}