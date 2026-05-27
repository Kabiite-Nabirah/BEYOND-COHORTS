async function fetchDashboardStats() {
  const token = localStorage.getItem("token");

  try {
    const res = await fetch("http://localhost:5000/api/auth/dashboard", {
      method: "GET", // explicitly set GET
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });

    const data = await res.json();

    if (res.ok) {
      // Animate counters with real values
      counter("membersCount", 0, data.totalMembers, 20);
      counter("activeUsers", 0, data.activeUsers, 120);
      counter("jobPosts", 0, data.jobPosts, 80);
      counter("eventsCreated", 0, data.eventsCreated, 120);
      counter("messagesSent", 0, data.messagesSent, 30);
      counter("mentorsCount", 0, data.mentorsCount, 200);
    } else {
      console.error("Dashboard error:", data.message);
    }
  } catch (err) {
    console.error("Error fetching stats:", err);
  }
}

window.onload = fetchDashboardStats;
