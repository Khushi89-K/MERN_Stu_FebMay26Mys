let ticketQueue = [
  { id: "T101", priority: "HIGH", resolved: false },
  { id: "T102", priority: "MEDIUM", resolved: true },
  { id: "T103", priority: "LOW", resolved: false },
  { id: "T104", priority: "HIGH", resolved: false },
  { id: "T105", priority: "MEDIUM", resolved: true }
];
ticketQueue.unshift({ id: "T100", priority: "HIGH", resolved: false });

ticketQueue.push(
  { id: "T106", priority: "LOW", resolved: false },
  { id: "T107", priority: "MEDIUM", resolved: true }
);

let currentTicket = ticketQueue.shift();
let droppedTicket = ticketQueue.pop();
let pending = ticketQueue.filter(ticket => !ticket.resolved);

let pendingIds = pending.map(ticket => ticket.id);

console.log("Current Ticket:", currentTicket);
console.log("Dropped Ticket:", droppedTicket);
console.log("Pending Tickets:", pending);
console.log("Pending Ticket IDs:", pendingIds);