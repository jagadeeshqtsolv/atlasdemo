import type { Page } from "@playwright/test";
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

export class RolesAndAccessPage {
  private static readonly L = {
    rolesDefinedIn: { strategy: 'text' as const, value: '4 Roles defined in your organization', actionKind: 'text' as const },
    clickARoleTo: { strategy: 'text' as const, value: 'Click a role to view permissions', actionKind: 'text' as const },
    roleCard1: { strategy: 'role' as const, value: 'Portal Administrator 93', role: 'button', actionKind: 'button' as const },
    roleCard2: { strategy: 'role' as const, value: 'Business Owner 73', role: 'button', actionKind: 'button' as const },
    roleCard3: { strategy: 'role' as const, value: 'Billing & Renewals User 61', role: 'button', actionKind: 'button' as const },
    roleCard4: { strategy: 'role' as const, value: 'Read Only Viewer 53', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextRolesDefinedIn(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RolesAndAccessPage.L.rolesDefinedIn));
  }

  async expectRolesDefinedInVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.rolesDefinedIn), timeoutMs, soft);
  }

  async getInnerTextClickARoleTo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo));
  }

  async expectClickARoleToVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo), timeoutMs, soft);
  }

  async clickRoleCard1(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard1));
  }

  async doubleClickRoleCard1(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard1));
  }

  async expectRoleCard1Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard1), timeoutMs, soft);
  }

  async clickRoleCard2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard2));
  }

  async doubleClickRoleCard2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard2));
  }

  async expectRoleCard2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard2), timeoutMs, soft);
  }

  async clickRoleCard3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard3));
  }

  async doubleClickRoleCard3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard3));
  }

  async expectRoleCard3Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard3), timeoutMs, soft);
  }

  async clickRoleCard4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard4));
  }

  async doubleClickRoleCard4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard4));
  }

  async expectRoleCard4Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard4), timeoutMs, soft);
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


  async clickRolesDefinedIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.rolesDefinedIn));
  }

  async doubleClickRolesDefinedIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.rolesDefinedIn));
  }

  async longPressRolesDefinedIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.rolesDefinedIn));
  }

  async expectRolesDefinedInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.rolesDefinedIn), timeoutMs);
  }

  async expectRolesDefinedInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.rolesDefinedIn), expected, timeoutMs);
  }

  async expectRolesDefinedInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.rolesDefinedIn), substring, timeoutMs);
  }

  async expectRolesDefinedInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.rolesDefinedIn), value, timeoutMs);
  }

  async expectRolesDefinedInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.rolesDefinedIn), timeoutMs);
  }

  async expectRolesDefinedInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.rolesDefinedIn), timeoutMs);
  }

  async expectRolesDefinedInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.rolesDefinedIn), timeoutMs);
  }

  async expectRolesDefinedInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.rolesDefinedIn), timeoutMs);
  }

  async expectRolesDefinedInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.rolesDefinedIn), timeoutMs);
  }

  async expectRolesDefinedInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.rolesDefinedIn), count, timeoutMs);
  }

  async scrollRolesDefinedInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.rolesDefinedIn));
  }

  async clickClickARoleTo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo));
  }

  async doubleClickClickARoleTo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo));
  }

  async longPressClickARoleTo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo));
  }

  async expectClickARoleToHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo), timeoutMs);
  }

  async expectClickARoleToText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo), expected, timeoutMs);
  }

  async expectClickARoleToContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo), substring, timeoutMs);
  }

  async expectClickARoleToValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo), value, timeoutMs);
  }

  async expectClickARoleToEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo), timeoutMs);
  }

  async expectClickARoleToDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo), timeoutMs);
  }

  async expectClickARoleToChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo), timeoutMs);
  }

  async expectClickARoleToUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo), timeoutMs);
  }

  async expectClickARoleToFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo), timeoutMs);
  }

  async expectClickARoleToCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo), count, timeoutMs);
  }

  async scrollClickARoleToIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.clickARoleTo));
  }

  async longPressRoleCard1(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard1));
  }

  async expectRoleCard1Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.roleCard1), timeoutMs);
  }

  async expectRoleCard1Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.roleCard1), expected, timeoutMs);
  }

  async expectRoleCard1ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.roleCard1), substring, timeoutMs);
  }

  async expectRoleCard1Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.roleCard1), value, timeoutMs);
  }

  async expectRoleCard1Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.roleCard1), timeoutMs);
  }

  async expectRoleCard1Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.roleCard1), timeoutMs);
  }

  async expectRoleCard1Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.roleCard1), timeoutMs);
  }

  async expectRoleCard1Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.roleCard1), timeoutMs);
  }

  async expectRoleCard1Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.roleCard1), timeoutMs);
  }

  async expectRoleCard1Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.roleCard1), count, timeoutMs);
  }

  async scrollRoleCard1IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard1));
  }

  async longPressRoleCard2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard2));
  }

  async expectRoleCard2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.roleCard2), timeoutMs);
  }

  async expectRoleCard2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.roleCard2), expected, timeoutMs);
  }

  async expectRoleCard2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.roleCard2), substring, timeoutMs);
  }

  async expectRoleCard2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.roleCard2), value, timeoutMs);
  }

  async expectRoleCard2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.roleCard2), timeoutMs);
  }

  async expectRoleCard2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.roleCard2), timeoutMs);
  }

  async expectRoleCard2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.roleCard2), timeoutMs);
  }

  async expectRoleCard2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.roleCard2), timeoutMs);
  }

  async expectRoleCard2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.roleCard2), timeoutMs);
  }

  async expectRoleCard2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.roleCard2), count, timeoutMs);
  }

  async scrollRoleCard2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard2));
  }

  async longPressRoleCard3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard3));
  }

  async expectRoleCard3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.roleCard3), timeoutMs);
  }

  async expectRoleCard3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.roleCard3), expected, timeoutMs);
  }

  async expectRoleCard3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.roleCard3), substring, timeoutMs);
  }

  async expectRoleCard3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.roleCard3), value, timeoutMs);
  }

  async expectRoleCard3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.roleCard3), timeoutMs);
  }

  async expectRoleCard3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.roleCard3), timeoutMs);
  }

  async expectRoleCard3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.roleCard3), timeoutMs);
  }

  async expectRoleCard3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.roleCard3), timeoutMs);
  }

  async expectRoleCard3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.roleCard3), timeoutMs);
  }

  async expectRoleCard3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.roleCard3), count, timeoutMs);
  }

  async scrollRoleCard3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard3));
  }

  async longPressRoleCard4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard4));
  }

  async expectRoleCard4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, RolesAndAccessPage.L.roleCard4), timeoutMs);
  }

  async expectRoleCard4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, RolesAndAccessPage.L.roleCard4), expected, timeoutMs);
  }

  async expectRoleCard4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, RolesAndAccessPage.L.roleCard4), substring, timeoutMs);
  }

  async expectRoleCard4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, RolesAndAccessPage.L.roleCard4), value, timeoutMs);
  }

  async expectRoleCard4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, RolesAndAccessPage.L.roleCard4), timeoutMs);
  }

  async expectRoleCard4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, RolesAndAccessPage.L.roleCard4), timeoutMs);
  }

  async expectRoleCard4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, RolesAndAccessPage.L.roleCard4), timeoutMs);
  }

  async expectRoleCard4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, RolesAndAccessPage.L.roleCard4), timeoutMs);
  }

  async expectRoleCard4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, RolesAndAccessPage.L.roleCard4), timeoutMs);
  }

  async expectRoleCard4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, RolesAndAccessPage.L.roleCard4), count, timeoutMs);
  }

  async scrollRoleCard4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, RolesAndAccessPage.L.roleCard4));
  }

}
