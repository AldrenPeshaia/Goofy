import { PrivateApp } from "./private-app/App";
import { PublicApp } from "./public-app/App";

export const AppGuard = () => {
  const user = false;

  return user ? <PrivateApp /> : <PublicApp />;
};
