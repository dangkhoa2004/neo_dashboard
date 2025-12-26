import dashboardApi from "./modules/dashboard";
import membersApi from "./modules/members";
import packagesApi from "./modules/packages";
import couponsApi from "./modules/coupons";
import settingsApi from "./modules/settings";

export const api = {
  dashboard: dashboardApi,
  members: membersApi,
  packages: packagesApi,
  coupons: couponsApi,
  settings: settingsApi,
};
