export function navigateTo(page: string) {
    const basePath = window.location.pathname.split("/")[1];
    const isGithubPages = window.location.hostname.includes("github.io");

    if (isGithubPages) {
        window.location.href = `/${basePath}/${page}`;
    } else {
        window.location.href = `/${page}`;
    }
}
