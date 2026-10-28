const legacySections = {
  "#work-heading": "projects.html#work-heading",
  "#education-heading": "education.html#education-heading",
  "#certifications-heading": "education.html#certifications-heading",
  "#oss-heading": "quantum-oss.html#oss-heading",
  "#substack-heading": "publications.html#substack-heading",
};

function redirectLegacySection() {
  const destination = legacySections[window.location.hash];
  if (destination) window.location.replace(destination);
}

redirectLegacySection();
window.addEventListener("hashchange", redirectLegacySection);
