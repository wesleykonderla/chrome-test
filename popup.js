const sendMessage = message => {
  chrome.tabs.query({active: true, currentWindow: true}, tabs =>
    chrome.tabs.sendMessage(tabs[0].id, { message })
  )
}

document.body.addEventListener("click", e =>
  e.target.dataset.message && sendMessage(e.target.dataset.message)
)
