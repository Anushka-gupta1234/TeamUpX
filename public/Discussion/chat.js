// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Socket.IO Chat</title>
//   <style>
//     body { margin: 0; padding-bottom: 3rem; font-family: Arial, sans-serif; }
//     #form { background: rgba(0, 0, 0, 0.15); padding: 0.25rem; position: fixed; bottom: 0; left: 0; right: 0; display: flex; height: 3rem; }
//     #input { border: none; padding: 0 1rem; flex-grow: 1; border-radius: 2rem; margin: 0.25rem; }
//     #form > button { background: #333; border: none; padding: 0 1rem; margin: 0.25rem; color: #fff; }
//     #messages { list-style-type: none; margin: 0; padding: 0; }
//     #messages > li { padding: 0.5rem 1rem; }
//     #messages > li:nth-child(odd) { background: #efefef; }
//   </style>
// </head>
// <body>
//   <ul id="messages"></ul>
//   <form id="form">
//     <input id="input" autocomplete="off"><button>Send</button>
//   </form>

//   <!-- ✅ Use defer to ensure script loads after the page -->
//   <script src="/socket.io/socket.io.js" defer></script>
//   <script defer>
//     document.addEventListener("DOMContentLoaded", () => {
//       const socket = io();

//       const form = document.getElementById('form');
//       const input = document.getElementById('input');
//       const messages = document.getElementById('messages');

//       form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         if (input.value.trim()) {
//           socket.emit('chat message', input.value);
//           input.value = '';
//         }
//       });

//       socket.on('chat message', (msg) => {
//         const item = document.createElement('li');
//         item.textContent = msg;
//         messages.appendChild(item);
//         window.scrollTo(0, document.body.scrollHeight);
//       });
//     });
//   </script>

// </body>
// </html>


