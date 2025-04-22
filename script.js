const events = [
    { title: "Opening Ceremony", datetime: "2025-05-01T09:00" },
    { title: "Tech Talk", datetime: "2025-05-01T11:30" },
    { title: "Networking Lunch", datetime: "2025-05-01T13:00" },
    { title: "Panel Discussion", datetime: "2025-04-30T15:00" },
    { title: "Closing Ceremony", datetime: "2025-05-01T17:00" }
  ];
  
  function displayEvents(eventArray) {
    const container = document.getElementById("eventList");
    container.innerHTML = "";
    eventArray.forEach(event => {
      const el = document.createElement("div");
      el.className = "bg-white p-4 shadow rounded cursor-pointer hover:bg-blue-50";
      el.innerHTML = `
        <h3 class="text-lg font-bold">${event.title}</h3>
        <p>${new Date(event.datetime).toLocaleString()}</p>
      `;
      el.onclick = () => openModal(event);
      container.appendChild(el);
    });
  }
  
  function sortEvents() {
    const sorted = [...events].sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
    displayEvents(sorted);
  }
  
  function filterEvents() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = events.filter(e => e.title.toLowerCase().includes(query));
    displayEvents(filtered);
  }
  
  function openModal(event) {
    document.getElementById("eventModal").classList.remove("hidden");
    document.getElementById("modalTitle").textContent = event.title;
    document.getElementById("modalDate").textContent = new Date(event.datetime).toLocaleString();
  }
  
  function closeModal() {
    document.getElementById("eventModal").classList.add("hidden");
  }
  
  // Initial load
  displayEvents(events);
  