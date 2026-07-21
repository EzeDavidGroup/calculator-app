# Changelog

All notable changes to this project will be documented in this file.

The format is inspired by Keep a Changelog and the project follows Semantic Versioning.

---

# Changelog

## v2.2.0

### Added
- Keyboard support for desktop users
- Keyboard event listener
- Input validation for keyboard keys
- Keyboard translator for Enter, Backspace and Escape
- Shared calculator logic between mouse and keyboard input

### Improved
- Reused existing handleButton() function
- Eliminated duplicate calculator logic
- Improved application architecture using a single input flow

### Fixed
- Invalid keyboard keys are ignored
- Calculator only accepts supported input

## v2.1.0

### Added
- History drawer inside calculator
- Toggle history button
- Persistent calculation history using Local Storage
- Clear History feature

### Improved
- Refactored calculator logic
- Cleaner JavaScript structure
- Improved UI organization

## [v2.0.0] - July 2026

### Added
- Introduced a modern Glassmorphism user interface.
- Added calculation history using Local Storage.
- Added "Clear History" functionality.
- Improved calculator layout and responsiveness.

### Changed
- Refactored the JavaScript codebase for better readability.
- Simplified event handling.
- Organized the code into reusable functions.
- Improved project structure for future updates.

### Fixed
- Prevented multiple operators from being entered consecutively.
- Improved calculator stability.
- Fixed history rendering after page refresh.

### Planned
- History Drawer integrated into the calculator.
- Keyboard support.
- Theme switcher.
- Scientific calculator mode.

---

## [v1.1.0]

### Added
- Redesigned the calculator using Glassmorphism.
- Improved spacing and button layout.
- Enhanced responsiveness across devices.

### Changed
- Updated overall UI design.
- Improved visual hierarchy.

---

## [v1.0.0]

### Added
- Initial calculator release.
- Basic arithmetic operations.
- Clear (C) button.
- Delete (←) button.
- Percentage (%) support.
- Responsive layout.
