import { test as base, expect } from "@playwright/test";
import { AuditLogPage } from "../pageobjects/AuditLogPage";
import { LoginPage } from "../pageobjects/LoginPage";
import { OverviewPage } from "../pageobjects/OverviewPage";
import { RolesAndAccessPage } from "../pageobjects/RolesAndAccessPage";
import { UserManagementPage } from "../pageobjects/UserManagementPage";

type AppFixtures = {
  auditLogPage: AuditLogPage;
  loginPage: LoginPage;
  overviewPage: OverviewPage;
  rolesAndAccessPage: RolesAndAccessPage;
  userManagementPage: UserManagementPage;
};

export const test = base.extend<AppFixtures>({
  auditLogPage: async ({ page }, use) => {
    await use(new AuditLogPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  overviewPage: async ({ page }, use) => {
    await use(new OverviewPage(page));
  },
  rolesAndAccessPage: async ({ page }, use) => {
    await use(new RolesAndAccessPage(page));
  },
  userManagementPage: async ({ page }, use) => {
    await use(new UserManagementPage(page));
  },
});

export { expect };
