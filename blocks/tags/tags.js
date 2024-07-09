export default async function decorate(block) {
    const tagsContainer = document.createElement("div")
    tagsContainer.classList.add("tags-container")
    const tags = Array.from(document.querySelectorAll("meta[property='article:tag']")).map(t => t.getAttribute("content"))
    for (let tag of tags) {
        const tagEl = document.createElement("span")
        tagEl.textContent = tag
        tagsContainer.appendChild(tagEl)
    }
    block.appendChild(tagsContainer);
}