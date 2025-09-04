setInterval(()=>{
  const target = new Date("2025-12-31T23:59:59").getTime();
  const now = new Date().getTime();
  const diff = target - now;
  const d = Math.floor(diff/(1000*60*60*24));
  document.getElementById("countdown").textContent = d+" hari lagi menuju 2026!";
},1000);