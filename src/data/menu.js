// src/data/menu.js
const menu = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: "🪙",
    roles: ["admin", "user"],
    subMenu: [],
    page: "Dashboard",
  },
  {
    label: "Events Booking",
    path: "event-booking",
    icon: "💰",
    roles: ["admin", "user"],
    subMenu: [],
    page: "Dashboard",
  },
  {
    label: "Events List",
    path: "events-list",
    icon: "💰",
    roles: ["admin", "user"],
    subMenu: [],
    page: "EventsList",
  },
  {
    label: "Completed Events",
    path: "completed-events",
    icon: "💰",
    roles: ["admin", "user"],
    subMenu: [],
    page: "Dashboard",
  },
  {
    label: "Pending Events",
    path: "pending-events",
    icon: "🎓",
    roles: ["admin", "user"],
    subMenu: [],
    page: "Dashboard",
  },
  {
    label: "Canceled Events",
    path: "canceled-events",
    icon: "🚖",
    roles: ["admin", "user"],
    subMenu: [],
    page: "Dashboard",
  },
];

export default menu;
