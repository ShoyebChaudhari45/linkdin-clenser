const keywords = [
  "I'm thrilled to announce",
  "grateful for this opportunity",
  "open to work",
  "excited to share",
  "humbled and honored",
  "new chapter",
  "blessed",
  "journey begins",
  "NPTEL"
];

function cleanLinkedIn() {
  const posts = document.querySelectorAll("div.feed-shared-update-v2");

  posts.forEach(post => {
    const text = post.innerText.toLowerCase();
    for (let keyword of keywords) {
      if (text.includes(keyword.toLowerCase())) {
        post.style.display = "none";
        break;
      }
    }
  });
}

// Run on load
setTimeout(cleanLinkedIn, 3000);  // Wait for posts to load
