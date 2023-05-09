const wrapper = document.createElement("div");
wrapper.classList.add("d-none", "toast");
wrapper.role = "alert";
wrapper.ariaLive =  "assertLive";
wrapper.ariaAtomic = true;

const header  = document.createElement("div");
header.classList.add("toast-header");

const img = document.createElement("img");