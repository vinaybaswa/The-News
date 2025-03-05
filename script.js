const newsData = {
  groups: [
    {
      id: 1,
      label: "BOMBARDIER",
      stories: [
        {
          headline:
            "Russia's power line: How Bombardier helped build a controversial railroad along Ukraine's border",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl.",
          author: "Richard Martin",
          isMain: true,
          isFeatured: true,
          image: "assets/trains.jpg",
          imageAlt: "train on the tracks",
          isSubscriberOnly: true,
        },
        {
          headline:
            "From the archives: Bombardier's Kremlin connection: the building of Prince Vladimir",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl.",
          author: "Michael Brown",
          label: "INVESTIGATION",
          isSubscriberOnly: true,
        },
      ],
    },
    {
      id: 2,
      label: "TRADE",
      stories: [
        {
          headline: "United States, Mexico enter 'rapid track' in NAFTA talks",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt.",
          author: "Jennifer Williams",
          isMain: true,
          image: "assets/nafta.jpg",
          imageAlt: "US and Mexico officials",
          isSubscriberOnly: true,
        },
        {
          headline: "Newsprint-tarrifs rulling key in Canada-U.S. trade war",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt.",
          author: "Sarah Thompson",
          isSubscriberOnly: true,
        },
        {
          headline:
            "Canada to join Mexico, Japan, South Korea, EU to talk auto tarrifs",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt.",
          author: "Elizabeth Taylor",
        },
        {
          headline:
            "A window of opportunity for NAFTA if Trump wants fewer fronts in his trade war",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt.",
          author: "Campbell Clark",
          authorImage: "assets/columnist.jpg",
          isSubscriberOnly: true,
        },
      ],
    },
    {
      id: 3,
      label: "HOUSING",
      stories: [
        {
          headline:
            "Vancouver moves to expropriate two derelict Shota-owned hotels",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt.",
          author: "Richard Martin",
          isMain: true,
          image: "assets/worker.jpg",
          imageAlt: "Factory worker",
        },
        {
          headline:
            "For low-income residents in Vancouver, a different kind of real estate crisis",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl.",
          author: "Michael Brown",
          label: "INVESTIGATION",
        },
      ],
    },
    {
      id: 4,
      label: "TECHNOLOGY",
      stories: [
        {
          headline:
            "AI startup raises record $500M to revolutionize healthcare diagnostics",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt.",
          author: "David Chen",
          isMain: true,
          isSubscriberOnly: true,
        },
        {
          headline:
            "Tech giants face new regulations in landmark digital privacy bill",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt.",
          author: "Rachel Adams",
          label: "ANALYSIS",
        },
      ],
    },
    {
      id: 5,
      label: "CLIMATE",
      stories: [
        {
          headline:
            "Global carbon emissions hit new record despite renewable energy surge",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt.",
          author: "Emma Wilson",
          isMain: true,
          isSubscriberOnly: true,
        },
        {
          headline: "Cities race to adapt infrastructure for rising sea levels",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt.",
          author: "James Peterson",
          authorImage: "assets/columnist.jpg",
        },
      ],
    },
    {
      id: 6,
      label: "EDUCATION",
      stories: [
        {
          headline:
            "Universities report surge in AI and machine learning program applications",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt.",
          author: "Linda Martinez",
          isMain: true,
        },
        {
          headline: "Student debt relief program faces legal challenges",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt.",
          author: "Robert Johnson",
          isSubscriberOnly: true,
        },
      ],
    },
    {
      id: 7,
      label: "HEALTH",
      stories: [
        {
          headline: "New study reveals breakthrough in Alzheimer's treatment",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt.",
          author: "Dr. Sarah Chen",
          isMain: true,
          isSubscriberOnly: true,
        },
        {
          headline:
            "Mental health services expand telehealth options post-pandemic",
          summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt.",
          author: "Mark Thompson",
          label: "ANALYSIS",
        },
      ],
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  // Clear existing content
  container.innerHTML = "";

  // Generate HTML for each group
  newsData.groups.forEach((group) => {
    const groupElement = document.createElement("div");
    groupElement.className = "story-group";
    groupElement.setAttribute("data-group", group.id);
    groupElement.setAttribute("role", "region");
    groupElement.setAttribute("aria-label", group.label);

    // Add group label if present
    if (group.label) {
      const labelElement = document.createElement("div");
      labelElement.className = "label";
      labelElement.textContent = group.label;
      groupElement.appendChild(labelElement);
    }

    // Generate HTML for each story in the group
    group.stories.forEach((story, index) => {
      const storyElement = document.createElement("div");
      storyElement.className = `story-card${
        story.isFeatured ? " featured-story" : ""
      }`;
      storyElement.setAttribute("data-position", index + 1);

      let storyHTML = `
        <a href="#" class="story-link" role="article"${
          story.isSubscriberOnly
            ? ' aria-label="' + story.headline + ' - Subscriber only content"'
            : ""
        }>
          ${
            story.label
              ? `<div class="investigation-label" role="text">${story.label}</div>`
              : ""
          }
          <div class="story-content">
      `;

      // Add story image if present
      if (story.image) {
        storyHTML += `
          <div class="story-image">
            <img src="${story.image}" alt="${story.imageAlt || ""}" />
          </div>
        `;
      }

      // Add headline with author image and key icon
      storyHTML += `
          <div class="story-text">
            <div class="headline-container">
              <h2 class="headline${story.isMain ? " headline-main" : ""}">${
        story.headline
      }
                ${
                  story.isSubscriberOnly
                    ? `
                  <span class="key-icon" role="img" aria-label="Subscriber only content">
                    <img src="assets/key.svg" alt="" aria-hidden="true" />
                  </span>
                `
                    : ""
                }
              </h2>
              ${
                story.authorImage
                  ? `
                <div class="author-image" role="img" aria-label="Author portrait">
                  <img src="${story.authorImage}" alt="" />
                </div>
              `
                  : ""
              }
            </div>
            ${
              story.isMain && story.summary
                ? `<p class="summary">${story.summary}</p>`
                : ""
            }
            ${
              story.authorImage
                ? `<div class="author" role="text">${story.author}</div>`
                : ""
            }
          </div>
          </div>
        </a>
      `;

      storyElement.innerHTML = storyHTML;
      groupElement.appendChild(storyElement);
    });

    container.appendChild(groupElement);
  });

  // Add click event listeners
  document.querySelectorAll(".story-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      event.preventDefault();

      const group = card.parentElement.getAttribute("data-group");
      const position = card.getAttribute("data-position");
      const headline = card
        .querySelector(".headline")
        .textContent.toLowerCase();

      console.log({
        group: parseInt(group),
        label: headline,
        position: parseInt(position),
      });
    });
  });

  // Add keyboard navigation for menu button
  const menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !isExpanded);
  });
});
