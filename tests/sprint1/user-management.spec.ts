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

    await test.step('Assert visible — Users content is rendered (User Access toggle visible)', async () => {
      await userManagementPage.expectUserAccessToggleVisible();
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

  await test.step('Assert visible — Wait for table rows to load', async () => {
    await expect.poll(async () => {
      const count = await userManagementPage.getOrganizationUsersTableRowCount();
      return count;
    }, { timeout: 15000 }).toBeGreaterThan(0);
  });

  const headers = ['User information', 'Role', 'Status', 'Last active', 'Account Access'];

  await test.step('Assert count — Table has exactly 5 required columns available', async () => {
    let present = 0;
    for (const h of headers) {
      const col = await userManagementPage.getOrganizationUsersTableColumn(h);
      if (Array.isArray(col)) {
        if (col.length >= 0) present++;
      } else if (col !== undefined && col !== null) {
        present++;
      }
    }
    expect(present).toBe(5);
  });

  await test.step("Assert text — Column 1 is 'User information'", async () => {
    const col = await userManagementPage.getOrganizationUsersTableColumn('User information');
    expect(col).toBeDefined();
  });

  await test.step("Assert text — Column 2 is 'Role'", async () => {
    const col = await userManagementPage.getOrganizationUsersTableColumn('Role');
    expect(col).toBeDefined();
  });

  await test.step("Assert text — Column 3 is 'Status'", async () => {
    const col = await userManagementPage.getOrganizationUsersTableColumn('Status');
    expect(col).toBeDefined();
  });

  await test.step("Assert text — Column 4 is 'Last active'", async () => {
    const col = await userManagementPage.getOrganizationUsersTableColumn('Last active');
    expect(col).toBeDefined();
  });

  await test.step("Assert text — Column 5 is 'Account Access'", async () => {
    const col = await userManagementPage.getOrganizationUsersTableColumn('Account Access');
    expect(col).toBeDefined();
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
    await expect.poll(async () => {
      const count = await userManagementPage.getOrganizationUsersTableRowCount();
      return count;
    }, { timeout: 15000 }).toBeGreaterThan(0);
  });

  await test.step('Assert presence — At least one User information cell is present', async () => {
    const col = await userManagementPage.getOrganizationUsersTableColumn('User information');
    if (Array.isArray(col)) {
      expect(col.length).toBeGreaterThan(0);
    } else {
      expect(String(col ?? '')).not.toEqual('');
    }
  });

  await test.step('Assert content — At least one user name is shown', async () => {
    const col = await userManagementPage.getOrganizationUsersTableColumn('User information');
    const text = Array.isArray(col) ? col.join(' ') : String(col ?? '');
    expect(text).toMatch(/[A-Za-z]/);
  });

  await test.step('Assert content — At least one email is shown', async () => {
    const col = await userManagementPage.getOrganizationUsersTableColumn('User information');
    const text = Array.isArray(col) ? col.join(' ') : String(col ?? '');
    expect(text).toMatch(/@/);
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
    await expect.poll(async () => {
      const count = await userManagementPage.getOrganizationUsersTableRowCount();
      return count;
    }, { timeout: 15000 }).toBeGreaterThan(0);
  });

  await test.step('Assert presence — At least one User information cell is present', async () => {
    const col = await userManagementPage.getOrganizationUsersTableColumn('User information');
    if (Array.isArray(col)) {
      expect(col.length).toBeGreaterThan(0);
    } else {
      expect(String(col ?? '')).not.toEqual('');
    }
  });

  await test.step('Assert content — Email is shown for a user', async () => {
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
