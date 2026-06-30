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

export class UserManagementPage {
  private static readonly L = {
    acmeCorporation: { strategy: 'text' as const, value: 'Acme Corporation', actionKind: 'text' as const },
    ukgAssist: { strategy: 'role' as const, value: 'UKG Assist', role: 'link', actionKind: 'link' as const },
    subscriptions: { strategy: 'role' as const, value: 'Subscriptions', role: 'link', actionKind: 'link' as const },
    implementations: { strategy: 'role' as const, value: 'Implementations', role: 'link', actionKind: 'link' as const },
    billings: { strategy: 'role' as const, value: 'Billings', role: 'link', actionKind: 'link' as const },
    support: { strategy: 'role' as const, value: 'Support', role: 'link', actionKind: 'link' as const },
    adoption: { strategy: 'role' as const, value: 'Adoption', role: 'link', actionKind: 'link' as const },
    admin: { strategy: 'role' as const, value: 'Admin', role: 'link', actionKind: 'link' as const },
    accountProfile: { strategy: 'role' as const, value: 'Account Profile', role: 'link', actionKind: 'link' as const },
    ejEmmaJohnsonPortal: { strategy: 'role' as const, value: 'EJ Emma Johnson Portal Administrator', role: 'link', actionKind: 'link' as const },
    signOut: { strategy: 'role' as const, value: 'Sign out', role: 'button', actionKind: 'button' as const },
    collapseSidebar: { strategy: 'role' as const, value: 'Collapse sidebar', role: 'button', actionKind: 'button' as const },
    adminTabUsers: { strategy: 'role' as const, value: 'User Management', role: 'button', actionKind: 'button' as const },
    adminTabRbac: { strategy: 'role' as const, value: 'Roles & Access', role: 'button', actionKind: 'button' as const },
    adminTabAudit: { strategy: 'role' as const, value: 'Audit Log', role: 'button', actionKind: 'button' as const },
    users: { strategy: 'text' as const, value: '49 Users', actionKind: 'text' as const },
    usersSearch: { strategy: 'testId' as const, value: 'users-search-input', actionKind: 'textbox' as const },
    inviteUser: { strategy: 'role' as const, value: 'Invite user', role: 'button', actionKind: 'button' as const },
    usersPaginationPrevious: { strategy: 'role' as const, value: 'Previous page', role: 'button', actionKind: 'button' as const },
    usersPaginationPage1: { strategy: 'role' as const, value: '1', role: 'button', actionKind: 'button' as const },
    usersPaginationPage2: { strategy: 'role' as const, value: '2', role: 'button', actionKind: 'button' as const },
    usersPaginationNext: { strategy: 'role' as const, value: 'Next page', role: 'button', actionKind: 'button' as const },
    sendFeedback: { strategy: 'role' as const, value: 'Send feedback', role: 'button', actionKind: 'button' as const },
    inviteModalClose: { strategy: 'role' as const, value: 'Close', role: 'button', actionKind: 'button' as const },
    emailAddress: { strategy: 'text' as const, value: 'Email address', actionKind: 'text' as const },
    inviteEmail: { strategy: 'testId' as const, value: 'invite-email-input', actionKind: 'textbox' as const },
    role: { strategy: 'text' as const, value: 'Role', actionKind: 'text' as const },
    inviteRoleSelect: { strategy: 'testId' as const, value: 'invite-role-select', actionKind: 'combobox' as const },
    inviteCancel: { strategy: 'role' as const, value: 'Cancel', role: 'button', actionKind: 'button' as const },
    inviteSend: { strategy: 'role' as const, value: 'Send', role: 'button', actionKind: 'button' as const },
  } as const;

  readonly organizationUsers: WebTable; // columns: ["User information", "Role", "Status", "Last active", "Portal Access"]

  constructor(private readonly page: Page) {
    this.organizationUsers = webTable(this.page, 'table[aria-label="Organization users"]');
  }

  async getInnerTextAcmeCorporation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UserManagementPage.L.acmeCorporation));
  }

  async expectAcmeCorporationVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.acmeCorporation), timeoutMs, soft);
  }

  async clickUkgAssist(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.ukgAssist));
  }

  async expectUkgAssistVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.ukgAssist), timeoutMs, soft);
  }

  async clickSubscriptions(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.subscriptions));
  }

  async expectSubscriptionsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.subscriptions), timeoutMs, soft);
  }

  async clickImplementations(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.implementations));
  }

  async expectImplementationsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.implementations), timeoutMs, soft);
  }

  async clickBillings(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.billings));
  }

  async expectBillingsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.billings), timeoutMs, soft);
  }

  async clickSupport(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.support));
  }

  async expectSupportVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.support), timeoutMs, soft);
  }

  async clickAdoption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.adoption));
  }

  async expectAdoptionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.adoption), timeoutMs, soft);
  }

  async clickAdmin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.admin));
  }

  async expectAdminVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.admin), timeoutMs, soft);
  }

  async clickAccountProfile(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.accountProfile));
  }

  async expectAccountProfileVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.accountProfile), timeoutMs, soft);
  }

  async clickEjEmmaJohnsonPortal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.ejEmmaJohnsonPortal));
  }

  async expectEjEmmaJohnsonPortalVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.ejEmmaJohnsonPortal), timeoutMs, soft);
  }

  async clickSignOut(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.signOut));
  }

  async doubleClickSignOut(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.signOut));
  }

  async expectSignOutVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.signOut), timeoutMs, soft);
  }

  async clickCollapseSidebar(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.collapseSidebar));
  }

  async doubleClickCollapseSidebar(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.collapseSidebar));
  }

  async expectCollapseSidebarVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.collapseSidebar), timeoutMs, soft);
  }

  async clickAdminTabUsers(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabUsers));
  }

  async doubleClickAdminTabUsers(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabUsers));
  }

  async expectAdminTabUsersVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.adminTabUsers), timeoutMs, soft);
  }

  async clickAdminTabRbac(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabRbac));
  }

  async doubleClickAdminTabRbac(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabRbac));
  }

  async expectAdminTabRbacVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.adminTabRbac), timeoutMs, soft);
  }

  async clickAdminTabAudit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabAudit));
  }

  async doubleClickAdminTabAudit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabAudit));
  }

  async expectAdminTabAuditVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.adminTabAudit), timeoutMs, soft);
  }

  async getInnerTextUsers(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UserManagementPage.L.users));
  }

  async expectUsersVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.users), timeoutMs, soft);
  }

  async fillUsersSearch(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, UserManagementPage.L.usersSearch), value);
  }

  async clearUsersSearch(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, UserManagementPage.L.usersSearch));
  }

  async getUsersSearchValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UserManagementPage.L.usersSearch));
  }

  async expectUsersSearchVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.usersSearch), timeoutMs, soft);
  }

  async clickInviteUser(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.inviteUser));
  }

  async doubleClickInviteUser(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.inviteUser));
  }

  async expectInviteUserVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.inviteUser), timeoutMs, soft);
  }

  async clickUsersPaginationPrevious(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious));
  }

  async doubleClickUsersPaginationPrevious(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious));
  }

  async expectUsersPaginationPreviousVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious), timeoutMs, soft);
  }

  async clickUsersPaginationPage1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage1));
  }

  async doubleClickUsersPaginationPage1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage1));
  }

  async expectUsersPaginationPage1Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage1), timeoutMs, soft);
  }

  async clickUsersPaginationPage2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage2));
  }

  async doubleClickUsersPaginationPage2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage2));
  }

  async expectUsersPaginationPage2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage2), timeoutMs, soft);
  }

  async clickUsersPaginationNext(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationNext));
  }

  async doubleClickUsersPaginationNext(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationNext));
  }

  async expectUsersPaginationNextVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.usersPaginationNext), timeoutMs, soft);
  }

  async clickSendFeedback(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.sendFeedback));
  }

  async doubleClickSendFeedback(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.sendFeedback));
  }

  async expectSendFeedbackVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.sendFeedback), timeoutMs, soft);
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

  async clickInviteModalClose(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.inviteModalClose));
  }

  async doubleClickInviteModalClose(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.inviteModalClose));
  }

  async expectInviteModalCloseVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.inviteModalClose), timeoutMs, soft);
  }

  async getInnerTextEmailAddress(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UserManagementPage.L.emailAddress));
  }

  async expectEmailAddressVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.emailAddress), timeoutMs, soft);
  }

  async fillInviteEmail(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, UserManagementPage.L.inviteEmail), value);
  }

  async clearInviteEmail(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, UserManagementPage.L.inviteEmail));
  }

  async getInviteEmailValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UserManagementPage.L.inviteEmail));
  }

  async expectInviteEmailVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.inviteEmail), timeoutMs, soft);
  }

  async getInnerTextRole(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, UserManagementPage.L.role));
  }

  async expectRoleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.role), timeoutMs, soft);
  }

  async selectInviteRoleSelect(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), value);
  }

  async expectInviteRoleSelectVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), timeoutMs, soft);
  }

  async clickInviteCancel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.inviteCancel));
  }

  async doubleClickInviteCancel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.inviteCancel));
  }

  async expectInviteCancelVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.inviteCancel), timeoutMs, soft);
  }

  async clickInviteSend(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.inviteSend));
  }

  async doubleClickInviteSend(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.inviteSend));
  }

  async expectInviteSendVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, UserManagementPage.L.inviteSend), timeoutMs, soft);
  }

  // ── table[aria-label="Organization users"] ──────────────────────────────────────────────

  /** Text of any cell. row is 0-based; col is column name or 0-based index. */
  async getOrganizationUsersTableText(row: number, col: number | string): Promise<string> {
    return this.organizationUsers.getText(row, col);
  }

  /** All text values for a column across every row. */
  async getOrganizationUsersTableColumn(col: number | string): Promise<string[]> {
    return this.organizationUsers.getColumn(col);
  }

  /** All cell values for a row as { "Column Name": "value" }. */
  async getOrganizationUsersTableRowData(row: number): Promise<Record<string, string>> {
    return this.organizationUsers.getRowData(row);
  }

  /** First row where col equals value (exact). Pass exact=false for contains match. */
  async findOrganizationUsersTableRow(col: number | string, value: string, exact = true): Promise<number> {
    return this.organizationUsers.findRow(col, value, exact);
  }

  /** First row where any cell contains text (case-insensitive). */
  async findOrganizationUsersTableRowByText(text: string): Promise<number> {
    return this.organizationUsers.findRowByText(text);
  }

  /** Total number of body rows. */
  async getOrganizationUsersTableRowCount(): Promise<number> {
    return this.organizationUsers.rowCount();
  }

  /** Click the <a> link inside a cell. */
  async clickOrganizationUsersTableLink(row: number, col: number | string): Promise<void> {
    return this.organizationUsers.clickLink(row, col);
  }

  /** href of the link inside a cell, or null if there is no link. */
  async getOrganizationUsersTableLinkHref(row: number, col: number | string): Promise<string | null> {
    const cell = await this.organizationUsers.cell(row, col);
    const link = cell.locator('a');
    return (await link.count()) > 0 ? link.getAttribute('href') : null;
  }

  /** Check the row selection checkbox (idempotent). */
  async checkOrganizationUsersTableRow(row: number): Promise<void> {
    const cb = this.organizationUsers.row(row).locator('input[type="checkbox"]').first();
    if (await cb.isChecked()) return;
    await cb.check({ force: true });
  }

  /** Uncheck the row selection checkbox (idempotent). */
  async uncheckOrganizationUsersTableRow(row: number): Promise<void> {
    const cb = this.organizationUsers.row(row).locator('input[type="checkbox"]').first();
    if (!(await cb.isChecked())) return;
    await cb.uncheck({ force: true });
  }

  /** Whether the row selection checkbox is currently checked. */
  async isOrganizationUsersTableRowChecked(row: number): Promise<boolean> {
    return this.organizationUsers.row(row).locator('input[type="checkbox"]').first().isChecked();
  }

  /** Current state of the toggle switch (role="switch") in the row — true = on/active. */
  async getOrganizationUsersTableSwitchState(row: number): Promise<boolean> {
    return this.organizationUsers.getSwitchState(row);
  }

  /** Toggle the switch in a row. Pass targetState=true/false to set explicitly. */
  async toggleOrganizationUsersTableSwitch(row: number, targetState?: boolean): Promise<void> {
    return this.organizationUsers.toggleSwitch(row, targetState);
  }

  /** Click a button in a row by optional label; omit label to click the last button (action menu). */
  async clickOrganizationUsersTableButton(row: number, label?: string): Promise<void> {
    return this.organizationUsers.clickButton(row, label);
  }

  /** Click a named option inside an already-open row action dropdown. */
  async clickOrganizationUsersTableMenuOption(label: string): Promise<void> {
    return this.organizationUsers.clickMenuOption(label);
  }

  /** Click a column header to sort. Call twice to reverse direction. */
  async sortOrganizationUsersTableBy(col: string): Promise<void> {
    return this.organizationUsers.sortBy(col);
  }

  /** Locator for any element inside a row — toggles, buttons, custom controls. */
  getOrganizationUsersTableInRow(row: number, selector: string): Locator {
    return this.organizationUsers.getInRow(row, selector);
  }

  // ── Row-parameterized: userAccessToggle (row×20) ──
  async clickUserAccessToggle(row = 1): Promise<void> {
    await clickWhenVisible(this.page.locator('[data-testid^="user-access-toggle-"]').nth(row - 1));
  }

  async doubleClickUserAccessToggle(row = 1): Promise<void> {
    await doubleClickWhenVisible(this.page.locator('[data-testid^="user-access-toggle-"]').nth(row - 1));
  }

  async expectUserAccessToggleVisible(row = 1, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(this.page.locator('[data-testid^="user-access-toggle-"]').nth(row - 1), timeoutMs, soft);
  }

  async expectUserAccessToggleHidden(row = 1, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(this.page.locator('[data-testid^="user-access-toggle-"]').nth(row - 1), timeoutMs, soft);
  }

  async expectUserAccessToggleEnabled(row = 1, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(this.page.locator('[data-testid^="user-access-toggle-"]').nth(row - 1), timeoutMs, soft);
  }

  async expectUserAccessToggleDisabled(row = 1, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(this.page.locator('[data-testid^="user-access-toggle-"]').nth(row - 1), timeoutMs, soft);
  }


  async clickAcmeCorporation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.acmeCorporation));
  }

  async doubleClickAcmeCorporation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.acmeCorporation));
  }

  async longPressAcmeCorporation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.acmeCorporation));
  }

  async expectAcmeCorporationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.acmeCorporation), expected, timeoutMs);
  }

  async expectAcmeCorporationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.acmeCorporation), substring, timeoutMs);
  }

  async expectAcmeCorporationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.acmeCorporation), value, timeoutMs);
  }

  async expectAcmeCorporationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.acmeCorporation), timeoutMs);
  }

  async expectAcmeCorporationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.acmeCorporation), count, timeoutMs);
  }

  async scrollAcmeCorporationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.acmeCorporation));
  }

  async doubleClickUkgAssist(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.ukgAssist));
  }

  async longPressUkgAssist(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.ukgAssist));
  }

  async expectUkgAssistHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.ukgAssist), timeoutMs);
  }

  async expectUkgAssistText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.ukgAssist), expected, timeoutMs);
  }

  async expectUkgAssistContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.ukgAssist), substring, timeoutMs);
  }

  async expectUkgAssistValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.ukgAssist), value, timeoutMs);
  }

  async expectUkgAssistEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.ukgAssist), timeoutMs);
  }

  async expectUkgAssistDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.ukgAssist), timeoutMs);
  }

  async expectUkgAssistChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.ukgAssist), timeoutMs);
  }

  async expectUkgAssistUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.ukgAssist), timeoutMs);
  }

  async expectUkgAssistFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.ukgAssist), timeoutMs);
  }

  async expectUkgAssistCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.ukgAssist), count, timeoutMs);
  }

  async scrollUkgAssistIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.ukgAssist));
  }

  async doubleClickSubscriptions(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.subscriptions));
  }

  async longPressSubscriptions(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.subscriptions));
  }

  async expectSubscriptionsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.subscriptions), expected, timeoutMs);
  }

  async expectSubscriptionsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.subscriptions), substring, timeoutMs);
  }

  async expectSubscriptionsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.subscriptions), value, timeoutMs);
  }

  async expectSubscriptionsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.subscriptions), timeoutMs);
  }

  async expectSubscriptionsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.subscriptions), count, timeoutMs);
  }

  async scrollSubscriptionsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.subscriptions));
  }

  async doubleClickImplementations(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.implementations));
  }

  async longPressImplementations(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.implementations));
  }

  async expectImplementationsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.implementations), timeoutMs);
  }

  async expectImplementationsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.implementations), expected, timeoutMs);
  }

  async expectImplementationsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.implementations), substring, timeoutMs);
  }

  async expectImplementationsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.implementations), value, timeoutMs);
  }

  async expectImplementationsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.implementations), timeoutMs);
  }

  async expectImplementationsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.implementations), timeoutMs);
  }

  async expectImplementationsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.implementations), timeoutMs);
  }

  async expectImplementationsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.implementations), timeoutMs);
  }

  async expectImplementationsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.implementations), timeoutMs);
  }

  async expectImplementationsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.implementations), count, timeoutMs);
  }

  async scrollImplementationsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.implementations));
  }

  async doubleClickBillings(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.billings));
  }

  async longPressBillings(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.billings));
  }

  async expectBillingsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.billings), timeoutMs);
  }

  async expectBillingsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.billings), expected, timeoutMs);
  }

  async expectBillingsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.billings), substring, timeoutMs);
  }

  async expectBillingsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.billings), value, timeoutMs);
  }

  async expectBillingsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.billings), timeoutMs);
  }

  async expectBillingsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.billings), timeoutMs);
  }

  async expectBillingsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.billings), timeoutMs);
  }

  async expectBillingsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.billings), timeoutMs);
  }

  async expectBillingsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.billings), timeoutMs);
  }

  async expectBillingsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.billings), count, timeoutMs);
  }

  async scrollBillingsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.billings));
  }

  async doubleClickSupport(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.support));
  }

  async longPressSupport(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.support));
  }

  async expectSupportHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.support), timeoutMs);
  }

  async expectSupportText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.support), expected, timeoutMs);
  }

  async expectSupportContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.support), substring, timeoutMs);
  }

  async expectSupportValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.support), value, timeoutMs);
  }

  async expectSupportEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.support), timeoutMs);
  }

  async expectSupportDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.support), timeoutMs);
  }

  async expectSupportChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.support), timeoutMs);
  }

  async expectSupportUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.support), timeoutMs);
  }

  async expectSupportFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.support), timeoutMs);
  }

  async expectSupportCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.support), count, timeoutMs);
  }

  async scrollSupportIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.support));
  }

  async doubleClickAdoption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.adoption));
  }

  async longPressAdoption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.adoption));
  }

  async expectAdoptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.adoption), timeoutMs);
  }

  async expectAdoptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.adoption), expected, timeoutMs);
  }

  async expectAdoptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.adoption), substring, timeoutMs);
  }

  async expectAdoptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.adoption), value, timeoutMs);
  }

  async expectAdoptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.adoption), timeoutMs);
  }

  async expectAdoptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.adoption), timeoutMs);
  }

  async expectAdoptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.adoption), timeoutMs);
  }

  async expectAdoptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.adoption), timeoutMs);
  }

  async expectAdoptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.adoption), timeoutMs);
  }

  async expectAdoptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.adoption), count, timeoutMs);
  }

  async scrollAdoptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.adoption));
  }

  async doubleClickAdmin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.admin));
  }

  async longPressAdmin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.admin));
  }

  async expectAdminHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.admin), timeoutMs);
  }

  async expectAdminText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.admin), expected, timeoutMs);
  }

  async expectAdminContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.admin), substring, timeoutMs);
  }

  async expectAdminValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.admin), value, timeoutMs);
  }

  async expectAdminEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.admin), timeoutMs);
  }

  async expectAdminDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.admin), timeoutMs);
  }

  async expectAdminChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.admin), timeoutMs);
  }

  async expectAdminUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.admin), timeoutMs);
  }

  async expectAdminFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.admin), timeoutMs);
  }

  async expectAdminCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.admin), count, timeoutMs);
  }

  async scrollAdminIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.admin));
  }

  async doubleClickAccountProfile(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.accountProfile));
  }

  async longPressAccountProfile(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.accountProfile));
  }

  async expectAccountProfileHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.accountProfile), expected, timeoutMs);
  }

  async expectAccountProfileContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.accountProfile), substring, timeoutMs);
  }

  async expectAccountProfileValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.accountProfile), value, timeoutMs);
  }

  async expectAccountProfileEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.accountProfile), timeoutMs);
  }

  async expectAccountProfileCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.accountProfile), count, timeoutMs);
  }

  async scrollAccountProfileIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.accountProfile));
  }

  async doubleClickEjEmmaJohnsonPortal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.ejEmmaJohnsonPortal));
  }

  async longPressEjEmmaJohnsonPortal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.ejEmmaJohnsonPortal));
  }

  async expectEjEmmaJohnsonPortalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.ejEmmaJohnsonPortal), timeoutMs);
  }

  async expectEjEmmaJohnsonPortalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.ejEmmaJohnsonPortal), expected, timeoutMs);
  }

  async expectEjEmmaJohnsonPortalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.ejEmmaJohnsonPortal), substring, timeoutMs);
  }

  async expectEjEmmaJohnsonPortalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.ejEmmaJohnsonPortal), value, timeoutMs);
  }

  async expectEjEmmaJohnsonPortalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.ejEmmaJohnsonPortal), timeoutMs);
  }

  async expectEjEmmaJohnsonPortalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.ejEmmaJohnsonPortal), timeoutMs);
  }

  async expectEjEmmaJohnsonPortalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.ejEmmaJohnsonPortal), timeoutMs);
  }

  async expectEjEmmaJohnsonPortalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.ejEmmaJohnsonPortal), timeoutMs);
  }

  async expectEjEmmaJohnsonPortalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.ejEmmaJohnsonPortal), timeoutMs);
  }

  async expectEjEmmaJohnsonPortalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.ejEmmaJohnsonPortal), count, timeoutMs);
  }

  async scrollEjEmmaJohnsonPortalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.ejEmmaJohnsonPortal));
  }

  async longPressSignOut(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.signOut));
  }

  async expectSignOutHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.signOut), timeoutMs);
  }

  async expectSignOutText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.signOut), expected, timeoutMs);
  }

  async expectSignOutContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.signOut), substring, timeoutMs);
  }

  async expectSignOutValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.signOut), value, timeoutMs);
  }

  async expectSignOutEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.signOut), timeoutMs);
  }

  async expectSignOutDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.signOut), timeoutMs);
  }

  async expectSignOutChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.signOut), timeoutMs);
  }

  async expectSignOutUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.signOut), timeoutMs);
  }

  async expectSignOutFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.signOut), timeoutMs);
  }

  async expectSignOutCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.signOut), count, timeoutMs);
  }

  async scrollSignOutIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.signOut));
  }

  async longPressCollapseSidebar(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.collapseSidebar));
  }

  async expectCollapseSidebarHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.collapseSidebar), expected, timeoutMs);
  }

  async expectCollapseSidebarContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.collapseSidebar), substring, timeoutMs);
  }

  async expectCollapseSidebarValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.collapseSidebar), value, timeoutMs);
  }

  async expectCollapseSidebarEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.collapseSidebar), timeoutMs);
  }

  async expectCollapseSidebarCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.collapseSidebar), count, timeoutMs);
  }

  async scrollCollapseSidebarIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.collapseSidebar));
  }

  async longPressAdminTabUsers(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabUsers));
  }

  async expectAdminTabUsersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.adminTabUsers), expected, timeoutMs);
  }

  async expectAdminTabUsersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.adminTabUsers), substring, timeoutMs);
  }

  async expectAdminTabUsersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.adminTabUsers), value, timeoutMs);
  }

  async expectAdminTabUsersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.adminTabUsers), timeoutMs);
  }

  async expectAdminTabUsersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.adminTabUsers), count, timeoutMs);
  }

  async scrollAdminTabUsersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabUsers));
  }

  async longPressAdminTabRbac(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabRbac));
  }

  async expectAdminTabRbacHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.adminTabRbac), expected, timeoutMs);
  }

  async expectAdminTabRbacContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.adminTabRbac), substring, timeoutMs);
  }

  async expectAdminTabRbacValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.adminTabRbac), value, timeoutMs);
  }

  async expectAdminTabRbacEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.adminTabRbac), timeoutMs);
  }

  async expectAdminTabRbacCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.adminTabRbac), count, timeoutMs);
  }

  async scrollAdminTabRbacIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabRbac));
  }

  async longPressAdminTabAudit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabAudit));
  }

  async expectAdminTabAuditHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.adminTabAudit), expected, timeoutMs);
  }

  async expectAdminTabAuditContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.adminTabAudit), substring, timeoutMs);
  }

  async expectAdminTabAuditValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.adminTabAudit), value, timeoutMs);
  }

  async expectAdminTabAuditEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.adminTabAudit), timeoutMs);
  }

  async expectAdminTabAuditCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.adminTabAudit), count, timeoutMs);
  }

  async scrollAdminTabAuditIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.adminTabAudit));
  }

  async clickUsers(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.users));
  }

  async doubleClickUsers(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.users));
  }

  async longPressUsers(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.users));
  }

  async expectUsersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.users), timeoutMs);
  }

  async expectUsersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.users), expected, timeoutMs);
  }

  async expectUsersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.users), substring, timeoutMs);
  }

  async expectUsersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.users), value, timeoutMs);
  }

  async expectUsersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.users), timeoutMs);
  }

  async expectUsersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.users), timeoutMs);
  }

  async expectUsersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.users), timeoutMs);
  }

  async expectUsersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.users), timeoutMs);
  }

  async expectUsersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.users), timeoutMs);
  }

  async expectUsersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.users), count, timeoutMs);
  }

  async scrollUsersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.users));
  }

  async typeTextUsersSearch(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, UserManagementPage.L.usersSearch), value);
  }

  async expectUsersSearchHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.usersSearch), timeoutMs);
  }

  async expectUsersSearchText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.usersSearch), expected, timeoutMs);
  }

  async expectUsersSearchContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.usersSearch), substring, timeoutMs);
  }

  async expectUsersSearchValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.usersSearch), value, timeoutMs);
  }

  async expectUsersSearchEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.usersSearch), timeoutMs);
  }

  async expectUsersSearchDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.usersSearch), timeoutMs);
  }

  async expectUsersSearchChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.usersSearch), timeoutMs);
  }

  async expectUsersSearchUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.usersSearch), timeoutMs);
  }

  async expectUsersSearchFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.usersSearch), timeoutMs);
  }

  async expectUsersSearchCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.usersSearch), count, timeoutMs);
  }

  async scrollUsersSearchIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.usersSearch));
  }

  async longPressInviteUser(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.inviteUser));
  }

  async expectInviteUserHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.inviteUser), timeoutMs);
  }

  async expectInviteUserText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.inviteUser), expected, timeoutMs);
  }

  async expectInviteUserContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.inviteUser), substring, timeoutMs);
  }

  async expectInviteUserValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.inviteUser), value, timeoutMs);
  }

  async expectInviteUserEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.inviteUser), timeoutMs);
  }

  async expectInviteUserDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.inviteUser), timeoutMs);
  }

  async expectInviteUserChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.inviteUser), timeoutMs);
  }

  async expectInviteUserUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.inviteUser), timeoutMs);
  }

  async expectInviteUserFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.inviteUser), timeoutMs);
  }

  async expectInviteUserCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.inviteUser), count, timeoutMs);
  }

  async scrollInviteUserIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.inviteUser));
  }

  async longPressUsersPaginationPrevious(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious));
  }

  async expectUsersPaginationPreviousHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious), timeoutMs);
  }

  async expectUsersPaginationPreviousText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious), expected, timeoutMs);
  }

  async expectUsersPaginationPreviousContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious), substring, timeoutMs);
  }

  async expectUsersPaginationPreviousValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious), value, timeoutMs);
  }

  async expectUsersPaginationPreviousEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious), timeoutMs);
  }

  async expectUsersPaginationPreviousDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious), timeoutMs);
  }

  async expectUsersPaginationPreviousChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious), timeoutMs);
  }

  async expectUsersPaginationPreviousUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious), timeoutMs);
  }

  async expectUsersPaginationPreviousFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious), timeoutMs);
  }

  async expectUsersPaginationPreviousCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious), count, timeoutMs);
  }

  async scrollUsersPaginationPreviousIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPrevious));
  }

  async longPressUsersPaginationPage1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage1));
  }

  async expectUsersPaginationPage1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.usersPaginationPage1), timeoutMs);
  }

  async expectUsersPaginationPage1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.usersPaginationPage1), expected, timeoutMs);
  }

  async expectUsersPaginationPage1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.usersPaginationPage1), substring, timeoutMs);
  }

  async expectUsersPaginationPage1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.usersPaginationPage1), value, timeoutMs);
  }

  async expectUsersPaginationPage1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.usersPaginationPage1), timeoutMs);
  }

  async expectUsersPaginationPage1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.usersPaginationPage1), timeoutMs);
  }

  async expectUsersPaginationPage1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.usersPaginationPage1), timeoutMs);
  }

  async expectUsersPaginationPage1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.usersPaginationPage1), timeoutMs);
  }

  async expectUsersPaginationPage1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.usersPaginationPage1), timeoutMs);
  }

  async expectUsersPaginationPage1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.usersPaginationPage1), count, timeoutMs);
  }

  async scrollUsersPaginationPage1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage1));
  }

  async longPressUsersPaginationPage2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage2));
  }

  async expectUsersPaginationPage2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.usersPaginationPage2), timeoutMs);
  }

  async expectUsersPaginationPage2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.usersPaginationPage2), expected, timeoutMs);
  }

  async expectUsersPaginationPage2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.usersPaginationPage2), substring, timeoutMs);
  }

  async expectUsersPaginationPage2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.usersPaginationPage2), value, timeoutMs);
  }

  async expectUsersPaginationPage2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.usersPaginationPage2), timeoutMs);
  }

  async expectUsersPaginationPage2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.usersPaginationPage2), timeoutMs);
  }

  async expectUsersPaginationPage2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.usersPaginationPage2), timeoutMs);
  }

  async expectUsersPaginationPage2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.usersPaginationPage2), timeoutMs);
  }

  async expectUsersPaginationPage2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.usersPaginationPage2), timeoutMs);
  }

  async expectUsersPaginationPage2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.usersPaginationPage2), count, timeoutMs);
  }

  async scrollUsersPaginationPage2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationPage2));
  }

  async longPressUsersPaginationNext(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationNext));
  }

  async expectUsersPaginationNextHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.usersPaginationNext), timeoutMs);
  }

  async expectUsersPaginationNextText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.usersPaginationNext), expected, timeoutMs);
  }

  async expectUsersPaginationNextContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.usersPaginationNext), substring, timeoutMs);
  }

  async expectUsersPaginationNextValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.usersPaginationNext), value, timeoutMs);
  }

  async expectUsersPaginationNextEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.usersPaginationNext), timeoutMs);
  }

  async expectUsersPaginationNextDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.usersPaginationNext), timeoutMs);
  }

  async expectUsersPaginationNextChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.usersPaginationNext), timeoutMs);
  }

  async expectUsersPaginationNextUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.usersPaginationNext), timeoutMs);
  }

  async expectUsersPaginationNextFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.usersPaginationNext), timeoutMs);
  }

  async expectUsersPaginationNextCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.usersPaginationNext), count, timeoutMs);
  }

  async scrollUsersPaginationNextIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.usersPaginationNext));
  }

  async longPressSendFeedback(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.sendFeedback));
  }

  async expectSendFeedbackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.sendFeedback), expected, timeoutMs);
  }

  async expectSendFeedbackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.sendFeedback), substring, timeoutMs);
  }

  async expectSendFeedbackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.sendFeedback), value, timeoutMs);
  }

  async expectSendFeedbackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.sendFeedback), timeoutMs);
  }

  async expectSendFeedbackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.sendFeedback), count, timeoutMs);
  }

  async scrollSendFeedbackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.sendFeedback));
  }

  async longPressInviteModalClose(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.inviteModalClose));
  }

  async expectInviteModalCloseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.inviteModalClose), timeoutMs);
  }

  async expectInviteModalCloseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.inviteModalClose), expected, timeoutMs);
  }

  async expectInviteModalCloseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.inviteModalClose), substring, timeoutMs);
  }

  async expectInviteModalCloseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.inviteModalClose), value, timeoutMs);
  }

  async expectInviteModalCloseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.inviteModalClose), timeoutMs);
  }

  async expectInviteModalCloseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.inviteModalClose), timeoutMs);
  }

  async expectInviteModalCloseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.inviteModalClose), timeoutMs);
  }

  async expectInviteModalCloseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.inviteModalClose), timeoutMs);
  }

  async expectInviteModalCloseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.inviteModalClose), timeoutMs);
  }

  async expectInviteModalCloseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.inviteModalClose), count, timeoutMs);
  }

  async scrollInviteModalCloseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.inviteModalClose));
  }

  async clickEmailAddress(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.emailAddress));
  }

  async doubleClickEmailAddress(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.emailAddress));
  }

  async longPressEmailAddress(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.emailAddress));
  }

  async expectEmailAddressHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.emailAddress), timeoutMs);
  }

  async expectEmailAddressText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.emailAddress), expected, timeoutMs);
  }

  async expectEmailAddressContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.emailAddress), substring, timeoutMs);
  }

  async expectEmailAddressValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.emailAddress), value, timeoutMs);
  }

  async expectEmailAddressEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.emailAddress), timeoutMs);
  }

  async expectEmailAddressDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.emailAddress), timeoutMs);
  }

  async expectEmailAddressChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.emailAddress), timeoutMs);
  }

  async expectEmailAddressUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.emailAddress), timeoutMs);
  }

  async expectEmailAddressFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.emailAddress), timeoutMs);
  }

  async expectEmailAddressCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.emailAddress), count, timeoutMs);
  }

  async scrollEmailAddressIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.emailAddress));
  }

  async typeTextInviteEmail(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, UserManagementPage.L.inviteEmail), value);
  }

  async expectInviteEmailHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.inviteEmail), timeoutMs);
  }

  async expectInviteEmailText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.inviteEmail), expected, timeoutMs);
  }

  async expectInviteEmailContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.inviteEmail), substring, timeoutMs);
  }

  async expectInviteEmailValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.inviteEmail), value, timeoutMs);
  }

  async expectInviteEmailEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.inviteEmail), timeoutMs);
  }

  async expectInviteEmailDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.inviteEmail), timeoutMs);
  }

  async expectInviteEmailChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.inviteEmail), timeoutMs);
  }

  async expectInviteEmailUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.inviteEmail), timeoutMs);
  }

  async expectInviteEmailFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.inviteEmail), timeoutMs);
  }

  async expectInviteEmailCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.inviteEmail), count, timeoutMs);
  }

  async scrollInviteEmailIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.inviteEmail));
  }

  async clickRole(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, UserManagementPage.L.role));
  }

  async doubleClickRole(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, UserManagementPage.L.role));
  }

  async longPressRole(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.role));
  }

  async expectRoleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.role), timeoutMs);
  }

  async expectRoleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.role), expected, timeoutMs);
  }

  async expectRoleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.role), substring, timeoutMs);
  }

  async expectRoleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.role), value, timeoutMs);
  }

  async expectRoleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.role), timeoutMs);
  }

  async expectRoleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.role), timeoutMs);
  }

  async expectRoleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.role), timeoutMs);
  }

  async expectRoleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.role), timeoutMs);
  }

  async expectRoleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.role), timeoutMs);
  }

  async expectRoleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.role), count, timeoutMs);
  }

  async scrollRoleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.role));
  }

  async expectInviteRoleSelectHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), timeoutMs);
  }

  async expectInviteRoleSelectText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), expected, timeoutMs);
  }

  async expectInviteRoleSelectContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), substring, timeoutMs);
  }

  async expectInviteRoleSelectValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), value, timeoutMs);
  }

  async expectInviteRoleSelectEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), timeoutMs);
  }

  async expectInviteRoleSelectDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), timeoutMs);
  }

  async expectInviteRoleSelectChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), timeoutMs);
  }

  async expectInviteRoleSelectUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), timeoutMs);
  }

  async expectInviteRoleSelectFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), timeoutMs);
  }

  async expectInviteRoleSelectCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.inviteRoleSelect), count, timeoutMs);
  }

  async scrollInviteRoleSelectIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.inviteRoleSelect));
  }

  async longPressInviteCancel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.inviteCancel));
  }

  async expectInviteCancelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.inviteCancel), timeoutMs);
  }

  async expectInviteCancelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.inviteCancel), expected, timeoutMs);
  }

  async expectInviteCancelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.inviteCancel), substring, timeoutMs);
  }

  async expectInviteCancelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.inviteCancel), value, timeoutMs);
  }

  async expectInviteCancelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.inviteCancel), timeoutMs);
  }

  async expectInviteCancelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.inviteCancel), timeoutMs);
  }

  async expectInviteCancelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.inviteCancel), timeoutMs);
  }

  async expectInviteCancelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.inviteCancel), timeoutMs);
  }

  async expectInviteCancelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.inviteCancel), timeoutMs);
  }

  async expectInviteCancelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.inviteCancel), count, timeoutMs);
  }

  async scrollInviteCancelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.inviteCancel));
  }

  async longPressInviteSend(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, UserManagementPage.L.inviteSend));
  }

  async expectInviteSendHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, UserManagementPage.L.inviteSend), timeoutMs);
  }

  async expectInviteSendText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, UserManagementPage.L.inviteSend), expected, timeoutMs);
  }

  async expectInviteSendContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, UserManagementPage.L.inviteSend), substring, timeoutMs);
  }

  async expectInviteSendValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, UserManagementPage.L.inviteSend), value, timeoutMs);
  }

  async expectInviteSendEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, UserManagementPage.L.inviteSend), timeoutMs);
  }

  async expectInviteSendDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, UserManagementPage.L.inviteSend), timeoutMs);
  }

  async expectInviteSendChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, UserManagementPage.L.inviteSend), timeoutMs);
  }

  async expectInviteSendUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, UserManagementPage.L.inviteSend), timeoutMs);
  }

  async expectInviteSendFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, UserManagementPage.L.inviteSend), timeoutMs);
  }

  async expectInviteSendCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, UserManagementPage.L.inviteSend), count, timeoutMs);
  }

  async scrollInviteSendIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, UserManagementPage.L.inviteSend));
  }

}
