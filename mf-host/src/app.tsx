export function render(oldRender: () => void) {
    setTimeout(() => {
        oldRender()
    }, 0)
}