async function loadEvents() {
  try {
    const res = await fetch("http://localhost:5000/api/events", {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    });

    const events = await res.json();
    const table = document.getElementById("eventTable");
    table.innerHTML = ""; // clear old rows

  const counter = document.getElementById("Eventcounter");
  counter.textContent = events.length;
  

    events.forEach(event => {
      const row = document.createElement("tr");
      row.classList.add("event-row");
      row.innerHTML = `
        <td><img src="images/ai.png" class="event-img"></td>
        <td>${event.title}</td>
        <td>${event.category}</td>
        <td>${new Date(event.date).toLocaleDateString()}</td>
        <td>${event.registrations || 0}</td>
        <td><span class="status ${event.status.toLowerCase()}">${event.status}</span></td>
        <td>
          <button class="approve-btn" data-id="${event._id}">Approve</button>
          <button class="reject-btn" data-id="${event._id}">Reject</button>
        </td>
      `;
      table.appendChild(row);

      // Approve button
      row.querySelector(".approve-btn").addEventListener("click", async (e) => {
        e.stopPropagation();
        await fetch(`http://localhost:5000/api/events/${event._id}/approve`, {
          method: "PUT",
          headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
        });
        loadEvents(); // refresh
      });

      // Reject button
      row.querySelector(".reject-btn").addEventListener("click", async (e) => {
        e.stopPropagation();
        await fetch(`http://localhost:5000/api/events/${event._id}/reject`, {
          method: "PUT",
          headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
        });
        loadEvents(); // refresh
      });

      // Preview click
      row.addEventListener("click", () => {
        document.querySelector(".event-preview h3").innerHTML = event.title;
        document.querySelector(".event-preview p").innerHTML = event.category + " Event";
        document.querySelector(".preview-img").src = "images/ai.png";
      });
    });
  } catch (err) {
    console.error("Error loading events:", err);
  }
}

window.onload = loadEvents;

// CREATE EVENT
document.getElementById("createEventBtn").addEventListener("click", async () => {
  const eventName = prompt("Enter Event Name");
  const category = prompt("Enter Category");
  const date = prompt("Enter Date (YYYY-MM-DD)");
  const registrations = prompt("Enter Registrations");

  if (!eventName || !category || !date || !registrations) {
    alert("Fill all event details");
    return;
  }

  const res = await fetch("http://localhost:5000/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify({
      title: eventName,
      category,
      date,
      registrations,
      status: "Pending"
    })
  });

  const data = await res.json();
  if (res.ok) {
    alert("Event Created Successfully");
    loadEvents(); // refresh table
  } else {
    alert("Failed to create event: " + (data.message || "Unknown error"));
  }
});

// EXPORT EVENTS (download as JSON file)
document.getElementById("exportBtn").addEventListener("click", async () => {
  const res = await fetch("http://localhost:5000/api/events", {
    headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
  });
  const events = await res.json();

  const blob = new Blob([JSON.stringify(events, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "events.json";
  a.click();
  URL.revokeObjectURL(url);

  alert("Events Exported Successfully");
});

// SEND REMINDER (placeholder – wire to backend if you have a reminder route)
document.getElementById("reminderBtn").addEventListener("click", async () => {
  // Example: call backend reminder endpoint if available
  // await fetch("http://localhost:5000/api/events/reminder", { method: "POST", headers: {...} });
  alert("Reminder Sent To Members");
});

// APPROVE ALL
document.getElementById("approveAllBtn").addEventListener("click", async () => {
  const res = await fetch("http://localhost:5000/api/events", {
    headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
  });
  const events = await res.json();

  for (const event of events) {
    await fetch(`http://localhost:5000/api/events/${event._id}/approve`, {
      method: "PUT",
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    });
  }
  alert("All Events Approved");
  loadEvents();
});

// REJECT ALL
document.getElementById("rejectAllBtn").addEventListener("click", async () => {
  const res = await fetch("http://localhost:5000/api/events", {
    headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
  });
  const events = await res.json();

  for (const event of events) {
    await fetch(`http://localhost:5000/api/events/${event._id}/reject`, {
      method: "PUT",
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    });
  }
  alert("All Events Rejected");
  loadEvents();
});
