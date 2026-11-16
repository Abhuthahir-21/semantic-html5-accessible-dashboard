# Manual test plan

1. Open all three pages and check links/assets load.
2. Press Tab after reload; skip link should be first.
3. Activate skip link and verify it moves to main content.
4. Navigate all controls using Tab and Shift+Tab; focus must be visible.
5. On Overview, open dialog with Enter/Space, close with Escape, and verify focus returns to trigger.
6. Test mobile Menu button and its aria-expanded state.
7. On Reports, filter by text/status and check live result message.
8. On Settings, submit empty required fields and invalid email; browser validation should block submission.
9. Check mobile layout and tables.
10. Validate index.html, reports.html, and settings.html at https://validator.w3.org/nu/ and save actual results.
