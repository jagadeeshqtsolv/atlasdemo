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

export class LoginPage {
  private static readonly L = {
    customerExperiencePortal: { strategy: 'text' as const, value: 'Customer Experience Portal', actionKind: 'text' as const },
    yourCommandCentre: { strategy: 'text' as const, value: 'YOUR COMMAND CENTRE', actionKind: 'text' as const },
    everythingYouNeedIn: { strategy: 'text' as const, value: 'Everything you need, in one place.', actionKind: 'text' as const },
    inOnePlace: { strategy: 'text' as const, value: 'in one place.', actionKind: 'text' as const },
    unifiedVisibilityAcrossYour: { strategy: 'text' as const, value: 'Unified visibility across your UKG products —', actionKind: 'text' as const },
    trackInvoicesAndSpend: { strategy: 'role' as const, value: 'Track invoices and spend trends', role: 'option', actionKind: 'generic' as const },
    monitorUsageCapacity: { strategy: 'role' as const, value: 'Monitor usage & capacity', role: 'option', actionKind: 'generic' as const },
    realTimeAlertsCase: { strategy: 'role' as const, value: 'Real-time alerts & case status', role: 'option', actionKind: 'generic' as const },
    roleBasedAccessAudit: { strategy: 'role' as const, value: 'Role-based access & audit logs', role: 'option', actionKind: 'generic' as const },
    welcomeBack: { strategy: 'text' as const, value: 'Welcome back', actionKind: 'text' as const },
    signInToYour: { strategy: 'text' as const, value: 'Sign in to your portal account', actionKind: 'text' as const },
    loginWithSalesforce: { strategy: 'role' as const, value: 'Login with Salesforce', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextCustomerExperiencePortal(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.customerExperiencePortal));
  }

  async expectCustomerExperiencePortalVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.customerExperiencePortal), timeoutMs, soft);
  }

  async getInnerTextYourCommandCentre(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.yourCommandCentre));
  }

  async expectYourCommandCentreVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.yourCommandCentre), timeoutMs, soft);
  }

  async getInnerTextEverythingYouNeedIn(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.everythingYouNeedIn));
  }

  async expectEverythingYouNeedInVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.everythingYouNeedIn), timeoutMs, soft);
  }

  async getInnerTextInOnePlace(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.inOnePlace));
  }

  async expectInOnePlaceVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.inOnePlace), timeoutMs, soft);
  }

  async getInnerTextUnifiedVisibilityAcrossYour(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.unifiedVisibilityAcrossYour));
  }

  async expectUnifiedVisibilityAcrossYourVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.unifiedVisibilityAcrossYour), timeoutMs, soft);
  }

  async clickTrackInvoicesAndSpend(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.trackInvoicesAndSpend));
  }

  async expectTrackInvoicesAndSpendVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.trackInvoicesAndSpend), timeoutMs, soft);
  }

  async clickMonitorUsageCapacity(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.monitorUsageCapacity));
  }

  async expectMonitorUsageCapacityVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.monitorUsageCapacity), timeoutMs, soft);
  }

  async clickRealTimeAlertsCase(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.realTimeAlertsCase));
  }

  async expectRealTimeAlertsCaseVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.realTimeAlertsCase), timeoutMs, soft);
  }

  async clickRoleBasedAccessAudit(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.roleBasedAccessAudit));
  }

  async expectRoleBasedAccessAuditVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.roleBasedAccessAudit), timeoutMs, soft);
  }

  async getInnerTextWelcomeBack(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.welcomeBack));
  }

  async expectWelcomeBackVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.welcomeBack), timeoutMs, soft);
  }

  async getInnerTextSignInToYour(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.signInToYour));
  }

  async expectSignInToYourVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.signInToYour), timeoutMs, soft);
  }

  async clickLoginWithSalesforce(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.loginWithSalesforce));
  }

  async doubleClickLoginWithSalesforce(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.loginWithSalesforce));
  }

  async expectLoginWithSalesforceVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.loginWithSalesforce), timeoutMs, soft);
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


  async clickCustomerExperiencePortal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.customerExperiencePortal));
  }

  async doubleClickCustomerExperiencePortal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.customerExperiencePortal));
  }

  async longPressCustomerExperiencePortal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.customerExperiencePortal));
  }

  async expectCustomerExperiencePortalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.customerExperiencePortal), timeoutMs);
  }

  async expectCustomerExperiencePortalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.customerExperiencePortal), expected, timeoutMs);
  }

  async expectCustomerExperiencePortalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.customerExperiencePortal), substring, timeoutMs);
  }

  async expectCustomerExperiencePortalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.customerExperiencePortal), value, timeoutMs);
  }

  async expectCustomerExperiencePortalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.customerExperiencePortal), timeoutMs);
  }

  async expectCustomerExperiencePortalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.customerExperiencePortal), timeoutMs);
  }

  async expectCustomerExperiencePortalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.customerExperiencePortal), timeoutMs);
  }

  async expectCustomerExperiencePortalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.customerExperiencePortal), timeoutMs);
  }

  async expectCustomerExperiencePortalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.customerExperiencePortal), timeoutMs);
  }

  async expectCustomerExperiencePortalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.customerExperiencePortal), count, timeoutMs);
  }

  async scrollCustomerExperiencePortalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.customerExperiencePortal));
  }

  async clickYourCommandCentre(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.yourCommandCentre));
  }

  async doubleClickYourCommandCentre(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.yourCommandCentre));
  }

  async longPressYourCommandCentre(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.yourCommandCentre));
  }

  async expectYourCommandCentreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.yourCommandCentre), timeoutMs);
  }

  async expectYourCommandCentreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.yourCommandCentre), expected, timeoutMs);
  }

  async expectYourCommandCentreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.yourCommandCentre), substring, timeoutMs);
  }

  async expectYourCommandCentreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.yourCommandCentre), value, timeoutMs);
  }

  async expectYourCommandCentreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.yourCommandCentre), timeoutMs);
  }

  async expectYourCommandCentreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.yourCommandCentre), timeoutMs);
  }

  async expectYourCommandCentreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.yourCommandCentre), timeoutMs);
  }

  async expectYourCommandCentreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.yourCommandCentre), timeoutMs);
  }

  async expectYourCommandCentreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.yourCommandCentre), timeoutMs);
  }

  async expectYourCommandCentreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.yourCommandCentre), count, timeoutMs);
  }

  async scrollYourCommandCentreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.yourCommandCentre));
  }

  async clickEverythingYouNeedIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.everythingYouNeedIn));
  }

  async doubleClickEverythingYouNeedIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.everythingYouNeedIn));
  }

  async longPressEverythingYouNeedIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.everythingYouNeedIn));
  }

  async expectEverythingYouNeedInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.everythingYouNeedIn), timeoutMs);
  }

  async expectEverythingYouNeedInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.everythingYouNeedIn), expected, timeoutMs);
  }

  async expectEverythingYouNeedInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.everythingYouNeedIn), substring, timeoutMs);
  }

  async expectEverythingYouNeedInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.everythingYouNeedIn), value, timeoutMs);
  }

  async expectEverythingYouNeedInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.everythingYouNeedIn), timeoutMs);
  }

  async expectEverythingYouNeedInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.everythingYouNeedIn), timeoutMs);
  }

  async expectEverythingYouNeedInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.everythingYouNeedIn), timeoutMs);
  }

  async expectEverythingYouNeedInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.everythingYouNeedIn), timeoutMs);
  }

  async expectEverythingYouNeedInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.everythingYouNeedIn), timeoutMs);
  }

  async expectEverythingYouNeedInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.everythingYouNeedIn), count, timeoutMs);
  }

  async scrollEverythingYouNeedInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.everythingYouNeedIn));
  }

  async clickInOnePlace(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.inOnePlace));
  }

  async doubleClickInOnePlace(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.inOnePlace));
  }

  async longPressInOnePlace(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.inOnePlace));
  }

  async expectInOnePlaceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.inOnePlace), timeoutMs);
  }

  async expectInOnePlaceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.inOnePlace), expected, timeoutMs);
  }

  async expectInOnePlaceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.inOnePlace), substring, timeoutMs);
  }

  async expectInOnePlaceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.inOnePlace), value, timeoutMs);
  }

  async expectInOnePlaceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.inOnePlace), timeoutMs);
  }

  async expectInOnePlaceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.inOnePlace), timeoutMs);
  }

  async expectInOnePlaceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.inOnePlace), timeoutMs);
  }

  async expectInOnePlaceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.inOnePlace), timeoutMs);
  }

  async expectInOnePlaceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.inOnePlace), timeoutMs);
  }

  async expectInOnePlaceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.inOnePlace), count, timeoutMs);
  }

  async scrollInOnePlaceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.inOnePlace));
  }

  async clickUnifiedVisibilityAcrossYour(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.unifiedVisibilityAcrossYour));
  }

  async doubleClickUnifiedVisibilityAcrossYour(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.unifiedVisibilityAcrossYour));
  }

  async longPressUnifiedVisibilityAcrossYour(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.unifiedVisibilityAcrossYour));
  }

  async expectUnifiedVisibilityAcrossYourHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.unifiedVisibilityAcrossYour), timeoutMs);
  }

  async expectUnifiedVisibilityAcrossYourText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.unifiedVisibilityAcrossYour), expected, timeoutMs);
  }

  async expectUnifiedVisibilityAcrossYourContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.unifiedVisibilityAcrossYour), substring, timeoutMs);
  }

  async expectUnifiedVisibilityAcrossYourValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.unifiedVisibilityAcrossYour), value, timeoutMs);
  }

  async expectUnifiedVisibilityAcrossYourEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.unifiedVisibilityAcrossYour), timeoutMs);
  }

  async expectUnifiedVisibilityAcrossYourDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.unifiedVisibilityAcrossYour), timeoutMs);
  }

  async expectUnifiedVisibilityAcrossYourChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.unifiedVisibilityAcrossYour), timeoutMs);
  }

  async expectUnifiedVisibilityAcrossYourUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.unifiedVisibilityAcrossYour), timeoutMs);
  }

  async expectUnifiedVisibilityAcrossYourFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.unifiedVisibilityAcrossYour), timeoutMs);
  }

  async expectUnifiedVisibilityAcrossYourCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.unifiedVisibilityAcrossYour), count, timeoutMs);
  }

  async scrollUnifiedVisibilityAcrossYourIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.unifiedVisibilityAcrossYour));
  }

  async doubleClickTrackInvoicesAndSpend(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.trackInvoicesAndSpend));
  }

  async longPressTrackInvoicesAndSpend(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.trackInvoicesAndSpend));
  }

  async expectTrackInvoicesAndSpendHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.trackInvoicesAndSpend), timeoutMs);
  }

  async expectTrackInvoicesAndSpendText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.trackInvoicesAndSpend), expected, timeoutMs);
  }

  async expectTrackInvoicesAndSpendContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.trackInvoicesAndSpend), substring, timeoutMs);
  }

  async expectTrackInvoicesAndSpendValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.trackInvoicesAndSpend), value, timeoutMs);
  }

  async expectTrackInvoicesAndSpendEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.trackInvoicesAndSpend), timeoutMs);
  }

  async expectTrackInvoicesAndSpendDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.trackInvoicesAndSpend), timeoutMs);
  }

  async expectTrackInvoicesAndSpendChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.trackInvoicesAndSpend), timeoutMs);
  }

  async expectTrackInvoicesAndSpendUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.trackInvoicesAndSpend), timeoutMs);
  }

  async expectTrackInvoicesAndSpendFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.trackInvoicesAndSpend), timeoutMs);
  }

  async expectTrackInvoicesAndSpendCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.trackInvoicesAndSpend), count, timeoutMs);
  }

  async scrollTrackInvoicesAndSpendIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.trackInvoicesAndSpend));
  }

  async doubleClickMonitorUsageCapacity(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.monitorUsageCapacity));
  }

  async longPressMonitorUsageCapacity(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.monitorUsageCapacity));
  }

  async expectMonitorUsageCapacityHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.monitorUsageCapacity), timeoutMs);
  }

  async expectMonitorUsageCapacityText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.monitorUsageCapacity), expected, timeoutMs);
  }

  async expectMonitorUsageCapacityContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.monitorUsageCapacity), substring, timeoutMs);
  }

  async expectMonitorUsageCapacityValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.monitorUsageCapacity), value, timeoutMs);
  }

  async expectMonitorUsageCapacityEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.monitorUsageCapacity), timeoutMs);
  }

  async expectMonitorUsageCapacityDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.monitorUsageCapacity), timeoutMs);
  }

  async expectMonitorUsageCapacityChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.monitorUsageCapacity), timeoutMs);
  }

  async expectMonitorUsageCapacityUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.monitorUsageCapacity), timeoutMs);
  }

  async expectMonitorUsageCapacityFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.monitorUsageCapacity), timeoutMs);
  }

  async expectMonitorUsageCapacityCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.monitorUsageCapacity), count, timeoutMs);
  }

  async scrollMonitorUsageCapacityIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.monitorUsageCapacity));
  }

  async doubleClickRealTimeAlertsCase(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.realTimeAlertsCase));
  }

  async longPressRealTimeAlertsCase(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.realTimeAlertsCase));
  }

  async expectRealTimeAlertsCaseHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.realTimeAlertsCase), timeoutMs);
  }

  async expectRealTimeAlertsCaseText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.realTimeAlertsCase), expected, timeoutMs);
  }

  async expectRealTimeAlertsCaseContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.realTimeAlertsCase), substring, timeoutMs);
  }

  async expectRealTimeAlertsCaseValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.realTimeAlertsCase), value, timeoutMs);
  }

  async expectRealTimeAlertsCaseEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.realTimeAlertsCase), timeoutMs);
  }

  async expectRealTimeAlertsCaseDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.realTimeAlertsCase), timeoutMs);
  }

  async expectRealTimeAlertsCaseChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.realTimeAlertsCase), timeoutMs);
  }

  async expectRealTimeAlertsCaseUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.realTimeAlertsCase), timeoutMs);
  }

  async expectRealTimeAlertsCaseFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.realTimeAlertsCase), timeoutMs);
  }

  async expectRealTimeAlertsCaseCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.realTimeAlertsCase), count, timeoutMs);
  }

  async scrollRealTimeAlertsCaseIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.realTimeAlertsCase));
  }

  async doubleClickRoleBasedAccessAudit(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.roleBasedAccessAudit));
  }

  async longPressRoleBasedAccessAudit(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.roleBasedAccessAudit));
  }

  async expectRoleBasedAccessAuditHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.roleBasedAccessAudit), timeoutMs);
  }

  async expectRoleBasedAccessAuditText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.roleBasedAccessAudit), expected, timeoutMs);
  }

  async expectRoleBasedAccessAuditContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.roleBasedAccessAudit), substring, timeoutMs);
  }

  async expectRoleBasedAccessAuditValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.roleBasedAccessAudit), value, timeoutMs);
  }

  async expectRoleBasedAccessAuditEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.roleBasedAccessAudit), timeoutMs);
  }

  async expectRoleBasedAccessAuditDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.roleBasedAccessAudit), timeoutMs);
  }

  async expectRoleBasedAccessAuditChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.roleBasedAccessAudit), timeoutMs);
  }

  async expectRoleBasedAccessAuditUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.roleBasedAccessAudit), timeoutMs);
  }

  async expectRoleBasedAccessAuditFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.roleBasedAccessAudit), timeoutMs);
  }

  async expectRoleBasedAccessAuditCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.roleBasedAccessAudit), count, timeoutMs);
  }

  async scrollRoleBasedAccessAuditIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.roleBasedAccessAudit));
  }

  async clickWelcomeBack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.welcomeBack));
  }

  async doubleClickWelcomeBack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.welcomeBack));
  }

  async longPressWelcomeBack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.welcomeBack));
  }

  async expectWelcomeBackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.welcomeBack), timeoutMs);
  }

  async expectWelcomeBackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.welcomeBack), expected, timeoutMs);
  }

  async expectWelcomeBackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.welcomeBack), substring, timeoutMs);
  }

  async expectWelcomeBackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.welcomeBack), value, timeoutMs);
  }

  async expectWelcomeBackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.welcomeBack), timeoutMs);
  }

  async expectWelcomeBackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.welcomeBack), timeoutMs);
  }

  async expectWelcomeBackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.welcomeBack), timeoutMs);
  }

  async expectWelcomeBackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.welcomeBack), timeoutMs);
  }

  async expectWelcomeBackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.welcomeBack), timeoutMs);
  }

  async expectWelcomeBackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.welcomeBack), count, timeoutMs);
  }

  async scrollWelcomeBackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.welcomeBack));
  }

  async clickSignInToYour(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.signInToYour));
  }

  async doubleClickSignInToYour(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.signInToYour));
  }

  async longPressSignInToYour(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.signInToYour));
  }

  async expectSignInToYourHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.signInToYour), timeoutMs);
  }

  async expectSignInToYourText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.signInToYour), expected, timeoutMs);
  }

  async expectSignInToYourContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.signInToYour), substring, timeoutMs);
  }

  async expectSignInToYourValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.signInToYour), value, timeoutMs);
  }

  async expectSignInToYourEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.signInToYour), timeoutMs);
  }

  async expectSignInToYourDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.signInToYour), timeoutMs);
  }

  async expectSignInToYourChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.signInToYour), timeoutMs);
  }

  async expectSignInToYourUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.signInToYour), timeoutMs);
  }

  async expectSignInToYourFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.signInToYour), timeoutMs);
  }

  async expectSignInToYourCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.signInToYour), count, timeoutMs);
  }

  async scrollSignInToYourIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.signInToYour));
  }

  async longPressLoginWithSalesforce(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.loginWithSalesforce));
  }

  async expectLoginWithSalesforceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.loginWithSalesforce), timeoutMs);
  }

  async expectLoginWithSalesforceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.loginWithSalesforce), expected, timeoutMs);
  }

  async expectLoginWithSalesforceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.loginWithSalesforce), substring, timeoutMs);
  }

  async expectLoginWithSalesforceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.loginWithSalesforce), value, timeoutMs);
  }

  async expectLoginWithSalesforceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.loginWithSalesforce), timeoutMs);
  }

  async expectLoginWithSalesforceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.loginWithSalesforce), timeoutMs);
  }

  async expectLoginWithSalesforceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.loginWithSalesforce), timeoutMs);
  }

  async expectLoginWithSalesforceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.loginWithSalesforce), timeoutMs);
  }

  async expectLoginWithSalesforceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.loginWithSalesforce), timeoutMs);
  }

  async expectLoginWithSalesforceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.loginWithSalesforce), count, timeoutMs);
  }

  async scrollLoginWithSalesforceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.loginWithSalesforce));
  }

}
