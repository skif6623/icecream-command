(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),openGeoBtn:document.querySelector("[data-geo-open]"),openFranchBtn:document.querySelector(".franchise-open"),openAboutBtn:document.querySelector(".about-modal-open"),closeModalBtn:document.querySelector("[data-modal-close]"),closeGeoBtn:document.querySelector("[data-geo-close]"),closeFranchBtn:document.querySelector(".franchise-close"),closeAboutBtn:document.querySelector("[data-about-close]"),modal:document.querySelector("[data-modal]"),geo:document.querySelector(".geo-modal"),franch:document.querySelector(".backdrop-franchise"),about:document.querySelector(".backdrop-about"),body:document.querySelector("body")};function o(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}function t(){e.geo.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}function n(){e.franch.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}function c(){e.about.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o),e.openGeoBtn.addEventListener("click",t),e.closeGeoBtn.addEventListener("click",t),e.openFranchBtn.addEventListener("click",n),e.openAboutBtn.addEventListener("click",c),e.closeFranchBtn.addEventListener("click",n),e.closeAboutBtn.addEventListener("click",c);let l=document.querySelectorAll("[data-modal-open]");for(let o of l)o.onclick=function(o){o.preventDefault(),e.modal.classList.remove("is-hidden"),e.body.classList.add("no-scroll")};e.modal.onmousedown=function(e){e.target;let t=document.querySelector(".modal");null===e.target.closest("."+t.className)&&o()},e.geo.onmousedown=function(e){e.target;let o=document.querySelector(".modal-geo");null===e.target.closest("."+o.className)&&t()},e.franch.onmousedown=function(e){e.target;let o=document.querySelector(".modal-franchise");null===e.target.closest("."+o.className)&&n()},e.about.onmousedown=function(e){e.target;let o=document.querySelector(".modal-about");null===e.target.closest("."+o.className)&&c()}})();
//# sourceMappingURL=index.42e8c278.js.map