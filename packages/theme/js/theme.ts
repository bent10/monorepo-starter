document.addEventListener('DOMContentLoaded', () => {
  const popoverTriggers = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  )
  const tooltipTrigers = document.querySelectorAll('[data-bs-toggle="tooltip"]')

  popoverTriggers.forEach(el => new bootstrap.Popover(el))
  tooltipTrigers.forEach(el => new bootstrap.Tooltip(el))
})
