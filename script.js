function showPage(name) {
    document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
    document.getElementById("page-" + name).classList.add("active");
    document.querySelectorAll(".nav-links a[id]").forEach((a) => a.classList.remove("active"));
    const el = document.getElementById("nav-" + name);
    if (el) el.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(triggerReveals, 80);
}
function triggerReveals() {
    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add("visible");
                    obs.unobserve(e.target);
                }
            });
        },
        { threshold: 0.07 },
    );
    document.querySelectorAll(".page.active .reveal").forEach((r) => {
        r.classList.remove("visible");
        obs.observe(r);
    });
}
triggerReveals();
