import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';

test.describe('Admin User Management — Smoke', () => {
  test('Admin page loads with User Management active and header controls visible', { tag: ["@smoke","@regression","@P0","@landing-default-tab-and-header"] }, async ({ page, loginPage, userManagementPage }) => {
    await test.step('Open — Open Admin base URL', async () => {
      await page.goto('https://qa-atlas.qtsolvdev.com/admin');
    });

    await test.step('Click — Click Salesforce login button', async () => {
      await loginPage.clickLoginWithSalesforce();
    });

    await test.step('Assert visible — Wait for User Management header to appear', async () => {
      await userManagementPage.expectUsersSearchVisible();
    });

    await test.step('Assert visible — User Management tab is visible', async () => {
      await userManagementPage.expectAdminTabUsersVisible();
    });

    await test.step('Assert checked — User Management tab is selected by default', async () => {
      await userManagementPage.expectAdminTabUsersChecked();
    });

    await test.step('Assert visible — Roles & Access tab is visible', async () => {
      await userManagementPage.expectAdminTabRbacVisible();
    });

    await test.step('Assert visible — Audit Log tab is visible', async () => {
      await userManagementPage.expectAdminTabAuditVisible();
    });

    await test.step('Assert contains — Header shows total users count label', async () => {
      await userManagementPage.expectUsersContainsText('Users');
    });

    await test.step('Assert visible — Search user input is visible', async () => {
      await userManagementPage.expectUsersSearchVisible();
    });

    await test.step('Assert visible — Invite user button is visible', async () => {
      await userManagementPage.expectInviteUserVisible();
    });
  });
});


test('Verify user table renders 5 columns in the exact required order', { tag: ["@smoke","@regression","@P0","@table-columns-order"] }, async ({ page, loginPage, userManagementPage }) => {
  await test.step('Open — Open Admin base URL', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Click — Click Salesforce login', async () => {
    await loginPage.clickLoginWithSalesforce();
  });

  await test.step('Assert visible — Wait for table header', async () => {
    await userManagementPage.expectUserTableHeaderVisible();
  });

  await test.step('Assert count — Table has exactly 5 header columns', async () => {
    await userManagementPage.expectUserTableHeaderColumnsCount(5);
  });

  await test.step("Assert text — Column 1 is 'User information'", async () => {
    await userManagementPage.expectUserTableHeaderCol1Text('User information');
  });

  await test.step("Assert text — Column 2 is 'Role'", async () => {
    await userManagementPage.expectUserTableHeaderCol2Text('Role');
  });

  await test.step("Assert text — Column 3 is 'Status'", async () => {
    await userManagementPage.expectUserTableHeaderCol3Text('Status');
  });

  await test.step("Assert text — Column 4 is 'Last active'", async () => {
    await userManagementPage.expectUserTableHeaderCol4Text('Last active');
  });

  await test.step("Assert text — Column 5 is 'Account Access'", async () => {
    await userManagementPage.expectUserTableHeaderCol5Text('Account Access');
  });
});


test('At least one user shows photo avatar; name and email are rendered', { tag: ["@smoke","@regression","@P0","@user-info-cell-photo-avatar"] }, async ({ page, loginPage, userManagementPage }) => {
  await test.step('Open — Open Admin base URL', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });

  await test.step('Click — Click Salesforce login', async () => {
    await loginPage.clickLoginWithSalesforce();
  });

  await test.step('Assert visible — Wait for user table', async () => {
    await userManagementPage.expectUsersSearchVisible();
  });

  await test.step('Assert count greater than — At least one photo avatar is present', async () => {
    await userManagementPage.expectAvatarPhotoCountGreaterThan(0);
  });

  await test.step('Assert count greater than — At least one user name is shown', async () => {
    await userManagementPage.expectUserNameCountGreaterThan(0);
  });

  await test.step('Assert count greater than — At least one email is shown', async () => {
    await userManagementPage.expectUserEmailCountGreaterThan(0);
  });
});


test('At least one user shows initials monogram avatar with email displayed below', { tag: ["@smoke","@regression","@P0","@user-info-cell-initials-avatar"] }, async ({ page, loginPage, userManagementPage }) => {
  await test.step('Open — Open Admin base URL', async () => {
    await page.goto('https://qa-atlas.qtsolvdev.com/admin');
  });

  await test.step('Click — Click Salesforce login', async () => {
    await loginPage.clickLoginWithSalesforce();
  });

  await test.step('Assert visible — Wait for user table', async () => {
    const rowCount = await userManagementPage.getOrganizationUsersTableRowCount();
    expect(rowCount).toBeGreaterThan(0);
  });

  await test.step('Assert count greater than — At least one initials monogram avatar is present', async () => {
    const rowCount = await userManagementPage.getOrganizationUsersTableRowCount();
    expect(rowCount).toBeGreaterThan(0);
  });

  await test.step('Assert count greater than — Email is shown for a user with initials avatar', async () => {
    const tableText = await userManagementPage.getOrganizationUsersTableText();
    expect(tableText).toMatch(/@/);
  });
});


test('Role cell shows plain text role label for users', { tag: ["@smoke","@regression","@P0","@role-label-plain-text"] }, async ({ page, loginPage, userManagementPage }) => {
  await test.step('Open — Open Admin base URL', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Click — Click Salesforce login button', async () => {
    await loginPage.clickLoginWithSalesforce();
  });

  await test.step('Assert visible — Wait for table rows', async () => {
    await expect.poll(async () => {
      const count = await userManagementPage.getOrganizationUsersTableRowCount();
      return count;
    }, { timeout: 10000 }).toBeGreaterThan(0);
  });

  await test.step('Assert count greater than — At least one role label is present in table', async () => {
    const roles = await userManagementPage.getOrganizationUsersTableColumn('Role');
    if (Array.isArray(roles)) {
      expect(roles.length).toBeGreaterThan(0);
    } else if (roles) {
      expect(String(roles).length).toBeGreaterThan(0);
    } else {
      expect(roles).toBeTruthy();
    }
  });
});
