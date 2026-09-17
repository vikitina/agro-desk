import {
  CircleUserRound,
  Database,
  Languages,
  LockKeyhole,
  LogIn,
  Pencil,
  ShieldCheck,
  UserCog,
  UserPlus,
  Users,
} from "lucide-react";

export function getHomeFeatures(
  t: (key: string) => string
) {
  return [
    {
      icon: LockKeyhole,
      title: t("home.features.authentication.title"),
      description: t(
        "home.features.authentication.description"
      ),
    },
    {
      icon: Users,
      title: t("home.features.authorization.title"),
      description: t(
        "home.features.authorization.description"
      ),
    },
    {
      icon: ShieldCheck,
      title: t("home.features.permissions.title"),
      description: t(
        "home.features.permissions.description"
      ),
    },
    {
      icon: Database,
      title: t("home.features.security.title"),
      description: t(
        "home.features.security.description"
      ),
    },
    {
      icon: Pencil,
      title: t("home.features.crud.title"),
      description: t(
        "home.features.crud.description"
      ),
    },
    {
      icon: Languages,
      title: t("home.features.architecture.title"),
      description: t(
        "home.features.architecture.description"
      ),
    },
  ];
}

export function getHomeRoles(
  t: (key: string) => string
) {
  return [
    {
      name: t("home.roles.administrator.name"),
      description: t(
        "home.roles.administrator.description"
      ),
    },
    {
      name: t("home.roles.manager.name"),
      description: t(
        "home.roles.manager.description"
      ),
    },
    {
      name: t("home.roles.viewer.name"),
      description: t(
        "home.roles.viewer.description"
      ),
    },
  ];
}

export function getDemoSteps(
  t: (key: string) => string
) {
  return [
    {
      icon: CircleUserRound,
      title: t(
        "home.demo.quick.steps.chooseRole.title"
      ),
      description: t(
        "home.demo.quick.steps.chooseRole.description"
      ),
    },
    {
      icon: LogIn,
      title: t(
        "home.demo.quick.steps.login.title"
      ),
      description: t(
        "home.demo.quick.steps.login.description"
      ),
    },
    {
      icon: Users,
      title: t(
        "home.demo.quick.steps.compare.title"
      ),
      description: t(
        "home.demo.quick.steps.compare.description"
      ),
    },
  ];
}

export function getManagementSteps(
  t: (key: string) => string
) {
  return [
    {
      icon: UserPlus,
      title: t(
        "home.demo.management.steps.register.title"
      ),
      description: t(
        "home.demo.management.steps.register.description"
      ),
    },
    {
      icon: UserCog,
      title: t(
        "home.demo.management.steps.changeRole.title"
      ),
      description: t(
        "home.demo.management.steps.changeRole.description"
      ),
    },
    {
      icon: LogIn,
      title: t(
        "home.demo.management.steps.explore.title"
      ),
      description: t(
        "home.demo.management.steps.explore.description"
      ),
    },
  ];
}