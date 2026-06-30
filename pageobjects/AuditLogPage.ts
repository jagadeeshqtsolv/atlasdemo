import type { Locator, Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectPageTitle,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";
import { webTable, type WebTable } from "../support/web-table";

export class AuditLogPage {
  private static readonly L = {
    auditSearch: { strategy: 'testId' as const, value: 'audit-search-input', actionKind: 'textbox' as const },
    auditCategoryFilter: { strategy: 'testId' as const, value: 'audit-category-filter', actionKind: 'combobox' as const },
    auditStatusFilter: { strategy: 'testId' as const, value: 'audit-status-filter', actionKind: 'combobox' as const },
    auditExport: { strategy: 'role' as const, value: 'Export CSV', role: 'button', actionKind: 'button' as const },
  } as const;

  readonly auditLog: WebTable; // columns: ["Actor", "Category", "Action", "Timestamp", "IP", "Result"]

  constructor(private readonly page: Page) {
    this.auditLog = webTable(this.page, 'table[aria-label="Audit log"]');
  }

  async fillAuditSearch(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, AuditLogPage.L.auditSearch), value);
  }

  async clearAuditSearch(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, AuditLogPage.L.auditSearch));
  }

  async getAuditSearchValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, AuditLogPage.L.auditSearch));
  }

  async expectAuditSearchVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.auditSearch), timeoutMs, soft);
  }

  async selectAuditCategoryFilter(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), value);
  }

  async expectAuditCategoryFilterVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), timeoutMs, soft);
  }

  async selectAuditStatusFilter(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, AuditLogPage.L.auditStatusFilter), value);
  }

  async expectAuditStatusFilterVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.auditStatusFilter), timeoutMs, soft);
  }

  async clickAuditExport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, AuditLogPage.L.auditExport));
  }

  async doubleClickAuditExport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, AuditLogPage.L.auditExport));
  }

  async expectAuditExportVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, AuditLogPage.L.auditExport), timeoutMs, soft);
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  /** Assert page title matches an expected string or regex. */
  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, expected, timeoutMs);
  }

  /** Verify we are on the correct page using the title captured at record time. */
  async verifyOnPage(timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, 'Customer Experience Portal · UKG', timeoutMs);
  }

  // ── table[aria-label="Audit log"] ──────────────────────────────────────────────

  /** Text of any cell. row is 0-based; col is column name or 0-based index. */
  async getAuditLogTableText(row: number, col: number | string): Promise<string> {
    return this.auditLog.getText(row, col);
  }

  /** All text values for a column across every row. */
  async getAuditLogTableColumn(col: number | string): Promise<string[]> {
    return this.auditLog.getColumn(col);
  }

  /** All cell values for a row as { "Column Name": "value" }. */
  async getAuditLogTableRowData(row: number): Promise<Record<string, string>> {
    return this.auditLog.getRowData(row);
  }

  /** First row where col equals value (exact). Pass exact=false for contains match. */
  async findAuditLogTableRow(col: number | string, value: string, exact = true): Promise<number> {
    return this.auditLog.findRow(col, value, exact);
  }

  /** First row where any cell contains text (case-insensitive). */
  async findAuditLogTableRowByText(text: string): Promise<number> {
    return this.auditLog.findRowByText(text);
  }

  /** Total number of body rows. */
  async getAuditLogTableRowCount(): Promise<number> {
    return this.auditLog.rowCount();
  }

  /** Click the <a> link inside a cell. */
  async clickAuditLogTableLink(row: number, col: number | string): Promise<void> {
    return this.auditLog.clickLink(row, col);
  }

  /** href of the link inside a cell, or null if there is no link. */
  async getAuditLogTableLinkHref(row: number, col: number | string): Promise<string | null> {
    const cell = await this.auditLog.cell(row, col);
    const link = cell.locator('a');
    return (await link.count()) > 0 ? link.getAttribute('href') : null;
  }

  /** Check the row selection checkbox (idempotent). */
  async checkAuditLogTableRow(row: number): Promise<void> {
    const cb = this.auditLog.row(row).locator('input[type="checkbox"]').first();
    if (await cb.isChecked()) return;
    await cb.check({ force: true });
  }

  /** Uncheck the row selection checkbox (idempotent). */
  async uncheckAuditLogTableRow(row: number): Promise<void> {
    const cb = this.auditLog.row(row).locator('input[type="checkbox"]').first();
    if (!(await cb.isChecked())) return;
    await cb.uncheck({ force: true });
  }

  /** Whether the row selection checkbox is currently checked. */
  async isAuditLogTableRowChecked(row: number): Promise<boolean> {
    return this.auditLog.row(row).locator('input[type="checkbox"]').first().isChecked();
  }

  /** Current state of the toggle switch (role="switch") in the row — true = on/active. */
  async getAuditLogTableSwitchState(row: number): Promise<boolean> {
    return this.auditLog.getSwitchState(row);
  }

  /** Toggle the switch in a row. Pass targetState=true/false to set explicitly. */
  async toggleAuditLogTableSwitch(row: number, targetState?: boolean): Promise<void> {
    return this.auditLog.toggleSwitch(row, targetState);
  }

  /** Click a button in a row by optional label; omit label to click the last button (action menu). */
  async clickAuditLogTableButton(row: number, label?: string): Promise<void> {
    return this.auditLog.clickButton(row, label);
  }

  /** Click a named option inside an already-open row action dropdown. */
  async clickAuditLogTableMenuOption(label: string): Promise<void> {
    return this.auditLog.clickMenuOption(label);
  }

  /** Click a column header to sort. Call twice to reverse direction. */
  async sortAuditLogTableBy(col: string): Promise<void> {
    return this.auditLog.sortBy(col);
  }

  /** Locator for any element inside a row — toggles, buttons, custom controls. */
  getAuditLogTableInRow(row: number, selector: string): Locator {
    return this.auditLog.getInRow(row, selector);
  }

  // ── Row-parameterized: auditPaginationPage (×6) ──
  async clickAuditPaginationPage(page = 1): Promise<void> {
    await clickWhenVisible(this.page.getByRole('button', { name: String(page), exact: true }));
  }

  async doubleClickAuditPaginationPage(page = 1): Promise<void> {
    await doubleClickWhenVisible(this.page.getByRole('button', { name: String(page), exact: true }));
  }

  async expectAuditPaginationPageVisible(page = 1, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(this.page.getByRole('button', { name: String(page), exact: true }), timeoutMs, soft);
  }

  async expectAuditPaginationPageHidden(page = 1, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(this.page.getByRole('button', { name: String(page), exact: true }), timeoutMs, soft);
  }

  async expectAuditPaginationPageEnabled(page = 1, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(this.page.getByRole('button', { name: String(page), exact: true }), timeoutMs, soft);
  }

  async expectAuditPaginationPageDisabled(page = 1, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(this.page.getByRole('button', { name: String(page), exact: true }), timeoutMs, soft);
  }


  async typeTextAuditSearch(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, AuditLogPage.L.auditSearch), value);
  }

  async expectAuditSearchHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.auditSearch), timeoutMs);
  }

  async expectAuditSearchText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.auditSearch), expected, timeoutMs);
  }

  async expectAuditSearchContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.auditSearch), substring, timeoutMs);
  }

  async expectAuditSearchValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.auditSearch), value, timeoutMs);
  }

  async expectAuditSearchEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.auditSearch), timeoutMs);
  }

  async expectAuditSearchDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.auditSearch), timeoutMs);
  }

  async expectAuditSearchChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.auditSearch), timeoutMs);
  }

  async expectAuditSearchUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.auditSearch), timeoutMs);
  }

  async expectAuditSearchFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.auditSearch), timeoutMs);
  }

  async expectAuditSearchCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.auditSearch), count, timeoutMs);
  }

  async scrollAuditSearchIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.auditSearch));
  }

  async expectAuditCategoryFilterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), timeoutMs);
  }

  async expectAuditCategoryFilterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), expected, timeoutMs);
  }

  async expectAuditCategoryFilterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), substring, timeoutMs);
  }

  async expectAuditCategoryFilterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), value, timeoutMs);
  }

  async expectAuditCategoryFilterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), timeoutMs);
  }

  async expectAuditCategoryFilterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), timeoutMs);
  }

  async expectAuditCategoryFilterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), timeoutMs);
  }

  async expectAuditCategoryFilterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), timeoutMs);
  }

  async expectAuditCategoryFilterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), timeoutMs);
  }

  async expectAuditCategoryFilterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.auditCategoryFilter), count, timeoutMs);
  }

  async scrollAuditCategoryFilterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.auditCategoryFilter));
  }

  async expectAuditStatusFilterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.auditStatusFilter), timeoutMs);
  }

  async expectAuditStatusFilterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.auditStatusFilter), expected, timeoutMs);
  }

  async expectAuditStatusFilterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.auditStatusFilter), substring, timeoutMs);
  }

  async expectAuditStatusFilterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.auditStatusFilter), value, timeoutMs);
  }

  async expectAuditStatusFilterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.auditStatusFilter), timeoutMs);
  }

  async expectAuditStatusFilterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.auditStatusFilter), timeoutMs);
  }

  async expectAuditStatusFilterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.auditStatusFilter), timeoutMs);
  }

  async expectAuditStatusFilterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.auditStatusFilter), timeoutMs);
  }

  async expectAuditStatusFilterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.auditStatusFilter), timeoutMs);
  }

  async expectAuditStatusFilterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.auditStatusFilter), count, timeoutMs);
  }

  async scrollAuditStatusFilterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.auditStatusFilter));
  }

  async longPressAuditExport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, AuditLogPage.L.auditExport));
  }

  async expectAuditExportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, AuditLogPage.L.auditExport), timeoutMs);
  }

  async expectAuditExportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, AuditLogPage.L.auditExport), expected, timeoutMs);
  }

  async expectAuditExportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, AuditLogPage.L.auditExport), substring, timeoutMs);
  }

  async expectAuditExportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, AuditLogPage.L.auditExport), value, timeoutMs);
  }

  async expectAuditExportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, AuditLogPage.L.auditExport), timeoutMs);
  }

  async expectAuditExportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, AuditLogPage.L.auditExport), timeoutMs);
  }

  async expectAuditExportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, AuditLogPage.L.auditExport), timeoutMs);
  }

  async expectAuditExportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, AuditLogPage.L.auditExport), timeoutMs);
  }

  async expectAuditExportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, AuditLogPage.L.auditExport), timeoutMs);
  }

  async expectAuditExportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, AuditLogPage.L.auditExport), count, timeoutMs);
  }

  async scrollAuditExportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, AuditLogPage.L.auditExport));
  }

}
