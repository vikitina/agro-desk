export type DemoRole =
  | "administrator"
  | "manager"
  | "viewer";

export interface DemoAccount {
  role: DemoRole;
  email: string;
}

export const demoAccounts: DemoAccount[] = [
  {
    role: "administrator",
    email: "demo.admin@example.com",
  },
  {
    role: "manager",
    email: "demo.manager@example.com",
  },
  {
    role: "viewer",
    email: "demo.viewer1@example.com",
  },
];

export const demoPassword =
  import.meta.env.VITE_DEMO_PASSWORD;
