// Import only the Bootstrap components we need
import { Popover, Tooltip } from 'bootstrap'

// Create an example tooltip
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(tooltip => {
  new Tooltip(tooltip)
})
// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach(popover => {
  new Popover(popover)
})
